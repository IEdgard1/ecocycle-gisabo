import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuPrincipal = [
    { nom: 'Tableau de bord', icone: '📊', chemin: '/admin/dashboard' },
    { nom: 'Collectes', icone: '🚛', chemin: '/admin/collectes' },
    { nom: 'Tri & Catégories', icone: '♻️', chemin: '/admin/tri' },
    { nom: 'Statistiques', icone: '📈', chemin: '/admin/statistiques' },
  ];

  const menuGestion = [
    { nom: 'Déclaration', icone: '📋', chemin: '/admin/declaration' },
    { nom: 'Prestataires', icone: '🏭', chemin: '/admin/prestataires' },
  ];

  const MenuItem = ({ item }) => {
    const actif = location.pathname === item.chemin;
    return (
      <div
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
  };

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

      {/* Navigation */}
      <div className="flex-1 p-3">

        <p className="text-xs text-gray-400 font-semibold uppercase mb-2 px-2">
          Principal
        </p>
        {menuPrincipal.map((item) => (
          <MenuItem key={item.chemin} item={item} />
        ))}

        <p className="text-xs text-gray-400 font-semibold uppercase mb-2 px-2 mt-4">
          Gestion
        </p>
        {menuGestion.map((item) => (
          <MenuItem key={item.chemin} item={item} />
        ))}

      </div>

      {/* Utilisateur en bas */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-sm">
            AM
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Amina M.</p>
            <p className="text-xs text-gray-400">Responsable HSE</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;