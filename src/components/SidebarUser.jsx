import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function SidebarUser() {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { nom: 'Accueil', icone: '🏠', chemin: '/user/accueil' },
    { nom: 'Déclarer', icone: '📋', chemin: '/user/declarer' },
    { nom: 'Tri', icone: '♻️', chemin: '/user/tri' },
    { nom: 'Historique', icone: '📊', chemin: '/user/historique' },
    { nom: 'Signaler', icone: '⚠️', chemin: '/user/signaler' },
    { nom: 'Profil', icone: '👤', chemin: '/user/profil' },
  ];

  return (
    <div className="w-56 min-h-screen bg-white border-r border-gray-200 flex flex-col">

      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="w-10 h-10 object-contain" />
          <div>
            <p className="text-sm font-bold text-gray-800">EcoCycle GISABO</p>
            <p className="text-xs text-gray-400">Gestion déchets</p>
          </div>
        </div>
      </div>

      {/* Avatar utilisateur */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">
            EI
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">Edgard Ishimwe</p>
            <p className="text-xs text-gray-400">IT</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-3">
        {menu.map((item) => {
          const actif = location.pathname === item.chemin;
          return (
            <div
              key={item.chemin}
              onClick={() => navigate(item.chemin)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition mb-1 ${
                actif
                  ? 'bg-green-100 text-green-700 font-semibold'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <span>{item.icone}</span>
              <span className="text-sm">{item.nom}</span>
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-between mb-2">
          <div>
            <p className="text-xs text-gray-400">Déclarations ce mois</p>
            <p className="text-xl font-bold text-gray-800">3</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Total déposé</p>
            <p className="text-xl font-bold text-green-600">240 kg</p>
          </div>
        </div>
      </div>

      {/* Déconnexion */}
      <div
        onClick={() => navigate('/login')}
        className="flex items-center gap-3 px-4 py-4 border-t border-gray-200 cursor-pointer hover:bg-red-50 transition"
      >
        <span>🚪</span>
        <span className="text-red-500 text-sm font-medium">Se déconnecter</span>
      </div>

    </div>
  );
}

export default SidebarUser;