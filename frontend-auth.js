/* ============================================================
   TaruGuardians Frontend Authentication System
   Shared auth logic for all pages
   ============================================================ */

const TaruAuth = (function () {
    const API_BASE = 'https://backend-wyab.onrender.com/api';
    const TOKEN_KEY = 'taru_token';
    const REFRESH_KEY = 'taru_refresh_token';
    const USER_KEY = 'taru_user';

    function saveAuth(token, refreshToken, user) {
        localStorage.setItem(TOKEN_KEY, token);
        if (refreshToken) localStorage.setItem(REFRESH_KEY, refreshToken);
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    function getToken() {
        return localStorage.getItem(TOKEN_KEY);
    }

    function getRefreshToken() {
        return localStorage.getItem(REFRESH_KEY);
    }

    function getUser() {
        try {
            const raw = localStorage.getItem(USER_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    }

    function isLoggedIn() {
        const token = getToken();
        if (!token) return false;
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.exp * 1000 > Date.now();
        } catch (e) {
            return false;
        }
    }

    function logout() {
        const token = getToken();
        if (token) {
            fetch(API_BASE + '/auth/logout', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            }).catch(function() {});
        }
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(REFRESH_KEY);
        localStorage.removeItem(USER_KEY);
        window.location.href = 'auth.html';
    }

    async function authFetch(url, options) {
        options = options || {};
        var token = getToken();

        if (!token) {
            logout();
            throw new Error('No token');
        }

        options.headers = options.headers || {};
        options.headers['Authorization'] = 'Bearer ' + token;

        if (!(options.body instanceof FormData)) {
            options.headers['Content-Type'] = 'application/json';
        }

        var response = await fetch(API_BASE + url, options);

        if (response.status === 401) {
            var data = await response.json();
            if (data.expired) {
                var refreshed = await refreshAuthToken();
                if (refreshed) {
                    token = getToken();
                    options.headers['Authorization'] = 'Bearer ' + token;
                    response = await fetch(API_BASE + url, options);
                } else {
                    logout();
                    throw new Error('Session expired');
                }
            } else {
                logout();
                throw new Error('Unauthorized');
            }
        }

        return response;
    }

    async function refreshAuthToken() {
        var refreshToken = getRefreshToken();
        if (!refreshToken) return false;

        try {
            var response = await fetch(API_BASE + '/auth/refresh', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ refreshToken: refreshToken })
            });

            var data = await response.json();
            if (data.success) {
                localStorage.setItem(TOKEN_KEY, data.token);
                localStorage.setItem(REFRESH_KEY, data.refreshToken);
                return true;
            }
            return false;
        } catch (e) {
            return false;
        }
    }

    function requireAuth() {
        if (!isLoggedIn()) {
            window.location.href = 'auth.html';
            return false;
        }
        return true;
    }

    function requireAdmin() {
        if (!requireAuth()) return false;
        var user = getUser();
        if (!user || user.role !== 'admin') {
            window.location.href = 'dashboard.html';
            return false;
        }
        return true;
    }

    function requireUser() {
        if (!requireAuth()) return false;
        var user = getUser();
        if (!user) {
            window.location.href = 'auth.html';
            return false;
        }
        if (user.role === 'admin') {
            window.location.href = 'admin.html';
            return false;
        }
        return true;
    }

    function updateNavbar() {
        var loginBtns = document.querySelectorAll('.auth-login-btn');
        var userMenus = document.querySelectorAll('.auth-user-menu');
        var userNames = document.querySelectorAll('.auth-user-name');
        var userAvatars = document.querySelectorAll('.auth-user-avatar');

        console.log('updateNavbar called, isLoggedIn:', isLoggedIn());

        if (isLoggedIn()) {
            var user = getUser();
            loginBtns.forEach(function(btn) { 
                btn.style.display = 'none'; 
            });
            userMenus.forEach(function(menu) { 
                if (menu.classList.contains('mobile-menu')) {
                    menu.style.display = 'block';
                    var links = menu.querySelectorAll('.auth-login-btn, .auth-user-menu');
                    links.forEach(function(link) {
                        if (link.classList.contains('auth-login-btn')) {
                            link.style.display = 'none';
                        }
                        if (link.classList.contains('auth-user-menu')) {
                            link.style.display = 'block';
                        }
                    });
                } else {
                    menu.style.display = 'flex';
                }
            });
            userNames.forEach(function(el) { el.textContent = user ? user.name : 'User'; });
            userAvatars.forEach(function(el) {
                if (user && user.profilePicture) {
                    el.src = user.profilePicture;
                }
            });
        } else {
            loginBtns.forEach(function(btn) { 
                btn.style.display = 'inline-flex'; 
            });
            userMenus.forEach(function(menu) { 
                if (menu.classList.contains('mobile-menu')) {
                    menu.style.display = 'block';
                    var links = menu.querySelectorAll('.auth-login-btn, .auth-user-menu');
                    links.forEach(function(link) {
                        if (link.classList.contains('auth-login-btn')) {
                            link.style.display = 'block';
                        }
                        if (link.classList.contains('auth-user-menu')) {
                            link.style.display = 'none';
                        }
                    });
                } else {
                    menu.style.display = 'none';
                }
            });
        }
    }

    return {
        saveAuth: saveAuth,
        getToken: getToken,
        getRefreshToken: getRefreshToken,
        getUser: getUser,
        isLoggedIn: isLoggedIn,
        logout: logout,
        authFetch: authFetch,
        requireAuth: requireAuth,
        requireAdmin: requireAdmin,
        updateNavbar: updateNavbar,
        API_BASE: API_BASE
    };
})();

document.addEventListener('DOMContentLoaded', function() {
    if (typeof TaruAuth !== 'undefined') {
        TaruAuth.updateNavbar();
    }
});
