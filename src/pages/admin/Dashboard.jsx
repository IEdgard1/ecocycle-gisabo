import React from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import { useNavigate } from 'react-router-dom';

// Carte KPI
function KpiCard({ label, valeur, tendance, couleur }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="text-2xl font-bold text-gray-800">{valeur}</p>
      <p className={`text-xs mt-1 ${couleur}`}>{tendance}</p>
    </div>
  );
}

function Dashboard() {
  const navigate = useNavigate();

  const kpis = [
    { label: 'Déchets ce mois', valeur: '4 820 kg', tendance: '↓ −8% vs mois dernier', couleur: 'text-green-600' },
    { label: 'Taux de recyclage', valeur: '67%', tendance: '↑ +4% vs mois dernier', couleur: 'text-green-600' },
    { label: 'Collectes planifiées', valeur: '12', tendance: '⏱ 3 en attente', couleur: 'text-yellow-500' },
    { label: 'CO₂ économisé', valeur: '1 240 kg', tendance: '↑ +12% vs mois dernier', couleur: 'text-green-600' },
  ];

  const barres = [
    { label: 'Papier/Carton', valeur: '1 380 kg', pct: 72, couleur: 'bg-green-500' },
    { label: 'Plastique', valeur: '860 kg', pct: 45, couleur: 'bg-blue-500' },
    { label: 'Verre', valeur: '540 kg', pct: 28, couleur: 'bg-purple-500' },
    { label: 'Déchets org.', valeur: '1 110 kg', pct: 58, couleur: 'bg-yellow-500' },
    { label: 'DEEE', valeur: '380 kg', pct: 20, couleur: 'bg-red-500' },
    { label: 'DIB / autres', valeur: '280 kg', pct: 14, couleur: 'bg-gray-400' },
  ];

  const alertes = [
    { couleur: 'bg-red-500', titre: 'Benne carton presque pleine', sous: 'Bâtiment B — capacité 92%' },
    { couleur: 'bg-yellow-500', titre: 'Collecte DEEE programmée', sous: 'Demain 08h30 — EcoRecycleurs' },
    { couleur: 'bg-green-500', titre: 'Objectif recyclage atteint', sous: 'Papier/Carton — 95% recyclé ✓' },
  ];

  const collectes = [
    { date: '26 mai 2026', type: 'DEEE', prestataire: 'EcoRecycleurs', volume: '150 kg', statut: 'En attente', couleurStatut: 'bg-yellow-100 text-yellow-700' },
    { date: '28 mai 2026', type: 'Papier/Carton', prestataire: 'PaperCycle', volume: '400 kg', statut: 'Planifiée', couleurStatut: 'bg-blue-100 text-blue-700' },
    { date: '30 mai 2026', type: 'Déchets org.', prestataire: 'Compost+', volume: '200 kg', statut: 'Planifiée', couleurStatut: 'bg-blue-100 text-blue-700' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar
          titre="Tableau de bord"
          boutonTexte="Nouvelle collecte"
          boutonAction={() => navigate('/admin/declaration')}
        />

        <div className="flex-1 p-6 overflow-y-auto">

          {/* KPI Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {kpis.map((k, i) => (
              <KpiCard key={i} {...k} />
            ))}
          </div>

          {/* Répartition + Alertes */}
          <div className="grid grid-cols-3 gap-4 mb-6">

            {/* Répartition */}
            <div className="col-span-2 bg-white rounded-xl border border-gray-200 p-4">
              <h2 className="text-sm font-semibold text-gray-700 mb-4">
                Répartition par type de déchet
              </h2>
              {barres.map((b, i) => (
                <div key={i} className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-gray-500 w-24">{b.label}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2">
                    <div
                      className={`${b.couleur} h-2 rounded-full`}
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-700 w-16 text-right">
                    {b.valeur}
                  </span>
                </div>
              ))}
            </div>

            {/* Alertes */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h2 className="text-sm font-semibold text-gray-700 mb-4">
                Alertes & notifications
              </h2>
              <div className="space-y-3">
                {alertes.map((a, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-lg border border-gray-100">
                    <div className={`w-2 h-2 rounded-full ${a.couleur} mt-1 flex-shrink-0`} />
                    <div>
                      <p className="text-xs font-semibold text-gray-700">{a.titre}</p>
                      <p className="text-xs text-gray-400">{a.sous}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Prochaines collectes */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Prochaines collectes
            </h2>
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-400 border-b border-gray-100">
                  <th className="text-left pb-2">Date</th>
                  <th className="text-left pb-2">Type</th>
                  <th className="text-left pb-2">Prestataire</th>
                  <th className="text-left pb-2">Volume estimé</th>
                  <th className="text-left pb-2">Statut</th>
                </tr>
              </thead>
              <tbody>
                {collectes.map((c, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-3 text-sm text-gray-700">{c.date}</td>
                    <td className="py-3 text-sm text-gray-700">{c.type}</td>
                    <td className="py-3 text-sm text-gray-700">{c.prestataire}</td>
                    <td className="py-3 text-sm text-gray-700">{c.volume}</td>
                    <td className="py-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${c.couleurStatut}`}>
                        {c.statut}
                      </span>
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

export default Dashboard;