import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Auth
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Onboarding from './pages/auth/Onboarding';

// Admin
import Dashboard from './pages/admin/Dashboard';
import Collectes from './pages/admin/Collectes';
import Tri from './pages/admin/Tri';
import Statistiques from './pages/admin/Statistiques';
import Declaration from './pages/admin/Declaration';
import Prestataires from './pages/admin/Prestataires';

// User
import Accueil from './pages/user/Accueil';
import Declarer from './pages/user/Declarer';
import Historique from './pages/user/Historique';
import Signaler from './pages/user/Signaler';
import Profil from './pages/user/Profil';
import TriUser from './pages/user/TriUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page par défaut → Onboarding */}
        <Route path="/" element={<Navigate to="/onboarding" />} />

        {/* Auth */}
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/collectes" element={<Collectes />} />
        <Route path="/admin/tri" element={<Tri />} />
        <Route path="/admin/statistiques" element={<Statistiques />} />
        <Route path="/admin/declaration" element={<Declaration />} />
        <Route path="/admin/prestataires" element={<Prestataires />} />

        {/* User */}
        <Route path="/user/accueil" element={<Accueil />} />
        <Route path="/user/declarer" element={<Declarer />} />
        <Route path="/user/tri" element={<TriUser />} />
        <Route path="/user/historique" element={<Historique />} />
        <Route path="/user/signaler" element={<Signaler />} />
        <Route path="/user/profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;