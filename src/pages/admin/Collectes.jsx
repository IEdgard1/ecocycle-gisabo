import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import { useNavigate } from 'react-router-dom';

function Collectes() {
  const navigate = useNavigate();
  const [filtre, setFiltre] = useState('Toutes');

  const collectes = [
    { ref: '#COL-042', date: '26/05/2026', type: 'DEEE', prestataire: 'EcoRecycleurs', poids: 150, statut: 'En attente' },
    { ref: '#COL-041', date: '28/05/2026', type: 'Papier/Carton', prestataire: 'PaperCycle', poids: 400, statut: 'Planifiée' },
    { ref: '#COL-040', date: '20/05/2026', type: 'Plastique', prestataire: 'PlastiRec', poids: 280, statut: 'Terminée' },
    { ref: '#COL-039', date: '15/05/2026', type: 'Déchets org.', prestataire: 'Compost+', poids: 190, statut: 'Terminée' },
    { ref: '#COL-038', date: '10/05/2026', type: 'Verre', prestataire: 'VerrePro', poids: 120, statut: 'Terminée' },
    { ref: '#COL-037', date: '05/05/2026', type: 'DEEE', prestataire: 'EcoRecycleurs', poids: 95, statut: 'Annulée' },
  ];

  const filtres = ['Toutes', 'En attente', 'Planifiées', 'Terminées'];

  const couleurStatut = (statut) => {
    switch (statut) {
      case 'En attente': return 'bg-yellow-100 text-yellow-700';
      case 'Planifiée': return 'bg-blue-100 text-blue-700';
      case 'Terminée': return 'bg-green-100 text-green-700';
      case 'Annulée': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const collectesFiltrees = collectes.filter(c => {
    if (filtre === 'Toutes') return true;
    if (filtre === 'Planifiées') return c.statut === 'Planifiée';
    if (filtre === 'Terminées') return c.statut === 'Terminée';
    return c.statut === filtre;
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar
          titre="Collectes"
          boutonTexte="Planifier une collecte"
          boutonAction={() => navigate('/admin/declaration')}
        />

        <div className="flex-1 p-6">

          {/* Filtres */}
          <div className="flex gap-2 mb-4">
            {filtres.map((f) => (
              <button
                key={f}
                onClick={() => setFiltre(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filtre === f
                    ? 'bg-green-100 text-green-700 border border-green-400'
                    : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Tableau */}
          <div className="bg-white rounded-xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-400 border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-4 py-3">Réf.</th>
                  <th className="text-left px-4 py-3">Date</th>
                  <th className="text-left px-4 py-3">Type de déchet</th>
                  <th className="text-left px-4 py-3">Prestataire</th>
                  <th className="text-left px-4 py-3">Poids (kg)</th>
                  <th className="text-left px-4 py-3">Statut</th>
                  <th className="text-left px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {collectesFiltrees.map((c, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-4 py-3 text-xs font-mono text-gray-500">{c.ref}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{c.date}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{c.type}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{c.prestataire}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{c.poids}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${couleurStatut(c.statut)}`}>
                        {c.statut}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-xs text-green-600 hover:underline">
                        Voir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Collectes;