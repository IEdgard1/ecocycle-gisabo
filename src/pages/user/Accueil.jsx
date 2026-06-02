import React from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarUser from '../../components/SidebarUser';

function Accueil() {
  const navigate = useNavigate();

  const actions = [
    { icone: '📋', titre: 'Déclarer des déchets', sous: 'Guide complet', chemin: '/user/declarer' },
    { icone: '♻️', titre: 'Règles de tri', sous: 'Guide complet', chemin: '/user/tri' },
    { icone: '⚠️', titre: 'Signaler un problème', sous: 'Alerter HSE', chemin: '/user/signaler' },
    { icone: '📊', titre: 'Historique', sous: 'Mes déclarations', chemin: '/user/historique' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarUser />

      <div className="flex-1 p-6">

        {/* Header */}
        <div className="mb-6">
          <p className="text-gray-500 text-sm">Bonjour 👋</p>
          <h1 className="text-2xl font-bold text-gray-800">
            Bienvenue sur EcoCycle GISABO
          </h1>
        </div>

        {/* Actions rapides */}
        <p className="text-sm font-bold text-gray-700 mb-3">Actions rapides</p>
        <div className="grid grid-cols-4 gap-4 mb-6">
          {actions.map((a, i) => (
            <div
              key={i}
              onClick={() => navigate(a.chemin)}
              className="bg-white rounded-xl border border-gray-200 p-4 cursor-pointer hover:shadow-md transition flex items-center gap-3"
            >
              <span className="text-2xl">{a.icone}</span>
              <div>
                <p className="text-sm font-semibold text-gray-800">{a.titre}</p>
                <p className="text-xs text-gray-400">{a.sous}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Prochaine collecte */}
        <p className="text-sm font-bold text-gray-700 mb-3">Prochaine collecte</p>
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-400 mb-1">Type</p>
              <p className="text-sm font-semibold text-green-700">Papier / Carton</p>
              <p className="text-xs text-gray-500">Demain — 08h30</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-400 mb-1">Prestataire</p>
              <p className="text-sm font-semibold text-gray-700">PaperCycle</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-400 mb-1">Benne</p>
              <p className="text-sm font-semibold text-gray-700">Benne A</p>
            </div>
          </div>
        </div>

        {/* Alertes */}
        <p className="text-sm font-bold text-gray-700 mb-3">Alertes</p>
        <div className="space-y-3">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-yellow-800">
                ⚠️ Benne DEEE presque pleine
              </p>
              <p className="text-xs text-gray-500">Local technique — capacité 92%</p>
            </div>
            <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-full font-medium">
              Urgent
            </span>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-sm font-semibold text-green-800">
              ✅ Objectif recyclage atteint !
            </p>
            <p className="text-xs text-gray-500">Papier/Carton — 95% recyclé ce mois</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Accueil;