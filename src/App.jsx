import { Routes, Route, Navigate } from 'react-router-dom';
import EntryLoader from './pages/EntryLoader.jsx';
import {
  DesktopHome,
  MobileHome,
  Auth,
  Admin,
  Dashboard,
  Recruitment,
  Events,
  InstagramHighlight,
  Interview,
  Roadmap,
  RoadmapOld,
  Alumni,
  PremiumLoader,
} from './pages/generated/index.js';

/**
 * Top-level router. The entry loader detects screen size and
 * navigates to either `/home` (desktop) or `/m/home` (mobile),
 * exactly mirroring the original `index.html` behaviour
 * (breakpoint = 600px, three.js loader animation included).
 */
export default function App() {
  return (
    <Routes>
      {/* Entry — original 3D Three.js loader + redirect, ported to React. */}
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

      {/* Anything else falls back to the entry loader. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
