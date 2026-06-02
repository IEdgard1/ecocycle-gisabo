import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarUser from '../../components/SidebarUser';

const declarations = [
  { icone: '📦', type: 'Papier / Carton', date: '20 mai 2026 — PaperCycle', poids: '80 kg', lieu: 'Bâtiment A', statut: 'Terminée', couleurPoids: 'text-gray-800' },
  { icone: '💻', type: 'DEEE', date: '26 mai 2026 — EcoRecycleurs', poids: '45 kg', lieu: 'Local technique', statut: 'En attente', couleurPoids: 'text-red-500' },
  { icone: '🥤', type: 'Plastique', date: '15 mai 2026 — PlastiRec', poids: '115 kg', lieu: 'Cafétéria', statut: 'Terminée', couleurPoids: 'text-gray-800' },
  { icone: '🍎', type: 'Déchets organiques', date: '28 avr. 2026 — Compost+', poids: '70 kg', lieu: 'Cafétéria RDC', statut: 'Terminée', couleurPoids: 'text-yellow-600' },
];

function Historique() {
  const navigate = useNavigate();
  const [filtre, setFiltre] = useState('Tous');

  const filtrees = declarations.filter((d) => {
    if (filtre === 'Tous') return true;
    if (filtre === 'En attente') return d.statut === 'En attente';
    return d.statut === 'Terminée';
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarUser />

      <div className="flex-1 p-6">

        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Mes déclarations</h1>
        <p className="text-gray-400 text-sm mb-6">Historique de vos déclarations</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <p className="text-xs text-gray-400 mb-1">Déclarations</p>
            <p className="text-2xl font-bold text-gray-800">3</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <p className="text-xs text-gray-400 mb-1">Volume total</p>
            <p className="text-2xl font-bold text-gray-800">240 <span className="text-sm text-gray-400">kg</span></p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <p className="text-xs text-gray-400 mb-1">Recyclé</p>
            <p className="text-2xl font-bold text-green-600">67%</p>
          </div>
        </div>

        {/* Filtres */}
        <div className="flex gap-2 mb-4">
          {['Tous', 'En attente', 'Terminées'].map((f) => (
            <button
              key={f}
              onClick={() => setFiltre(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filtre === f
                  ? 'bg-green-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Liste */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
          {filtrees.map((d, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-4 py-4 border-b border-gray-50 hover:bg-gray-50 transition"
            >
              {/* Icone */}
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                {d.icone}
              </div>

              {/* Info */}
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">{d.type}</p>
                <p className="text-xs text-gray-400">{d.date}</p>
              </div>

              {/* Poids + Lieu */}
              <div className="text-right mr-4">
                <p className={`text-sm font-bold ${d.couleurPoids}`}>{d.poids}</p>
                <p className="text-xs text-gray-400">{d.lieu}</p>
              </div>

              {/* Lien */}
              <span
                onClick={() => {}}
                className="text-xs text-green-600 cursor-pointer hover:underline flex-shrink-0"
              >
                Voir détails →
              </span>
            </div>
          ))}
        </div>

        {/* Bouton nouvelle déclaration */}
        <button
          onClick={() => navigate('/user/declarer')}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition text-sm"
        >
          + Nouvelle déclaration
        </button>

      </div>
    </div>
  );
}

export default Historique;