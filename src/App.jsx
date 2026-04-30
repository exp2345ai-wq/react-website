import { Routes, Route, Navigate } from 'react-router-dom';
import EntryLoader from './pages/EntryLoader.jsx';
import DesktopHome from './pages/DesktopHome.jsx';
import MobileHome from './pages/MobileHome.jsx';
import Auth from './pages/Auth.jsx';
import Admin from './pages/Admin.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Recruitment from './pages/Recruitment.jsx';
import Events from './pages/Events.jsx';
import InstagramHighlight from './pages/InstagramHighlight.jsx';
import Interview from './pages/Interview.jsx';
import Roadmap from './pages/Roadmap.jsx';
import RoadmapOld from './pages/RoadmapOld.jsx';
import Alumni from './pages/Alumni.jsx';
import PremiumLoader from './pages/PremiumLoader.jsx';

/**
 * Top-level router. The entry loader detects the screen size and
 * navigates to either `/home` (desktop) or `/m/home` (mobile),
 * matching the original `index.html` behaviour 1:1 (breakpoint 600px).
 */
export default function App() {
  return (
    <Routes>
      {/* Entry route — original 3D Three.js loader + redirect. */}
      <Route path="/" element={<EntryLoader />} />

      {/* Primary pages */}
      <Route path="/home" element={<DesktopHome />} />
      <Route path="/m/home" element={<MobileHome />} />

      {/* Connected sub-pages */}
      <Route path="/auth" element={<Auth />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/recruitment" element={<Recruitment />} />
      <Route path="/events" element={<Events />} />
      <Route path="/instagram" element={<InstagramHighlight />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/roadmap-old" element={<RoadmapOld />} />
      <Route path="/alumni" element={<Alumni />} />
      <Route path="/premium" element={<PremiumLoader />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
