import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SuperadminPage from './pages/SuperadminPage';
import ClubAdminPage from './pages/ClubAdminPage';
import CoachPage from './pages/CoachPage';
import ProtectedRoute from './components/ProtectedRoute';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoute role="superadmin" />}>
          <Route path="/superadmin" element={<SuperadminPage />} />
        </Route>
        <Route element={<ProtectedRoute role="club_admin" />}>
          <Route path="/club-admin" element={<ClubAdminPage />} />
        </Route>
        <Route element={<ProtectedRoute role="coach" />}>
          <Route path="/coach" element={<CoachPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
