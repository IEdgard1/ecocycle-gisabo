import React from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';

const objectifs = [
  { label: 'Recyclage global', valeur: '67 / 80%', pct: 84, couleur: 'bg-green-500' },
  { label: 'Réduction volume', valeur: '−8 / −15%', pct: 53, couleur: 'bg-blue-500' },
  { label: 'CO₂ évité', valeur: '1 240 / 2 000 kg', pct: 62, couleur: 'bg-yellow-500' },
  { label: 'Zéro DEEE en décharge', valeur: '100%', pct: 100, couleur: 'bg-green-500' },
  { label: 'Formation employés tri', valeur: '42 / 80 pers.', pct: 53, couleur: 'bg-purple-500' },
];

const prestataires = [
  { nom: 'EcoRecycleurs', specialite: 'DEEE', volume: '245 kg', note: '4.8', pct: 96, couleur: 'bg-green-500' },
  { nom: 'PaperCycle', specialite: 'Papier/Carton', volume: '1 380 kg', note: '4.5', pct: 90, couleur: 'bg-blue-500' },
  { nom: 'Compost+', specialite: 'Déchets org.', volume: '1 110 kg', note: '4.7', pct: 94, couleur: 'bg-yellow-500' },
];

const mois = ['Déc', 'Jan', 'Fév', 'Mar', 'Avr', 'Mai'];
const donnees = [42, 48, 38, 55, 50, 62];

function Statistiques() {
  const maxVal = Math.max(...donnees);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar
          titre="Statistiques"
          boutonTexte="Exporter rapport"
        />

        <div className="flex-1 p-6 overflow-y-auto">

          {/* KPI mini */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-xs text-gray-500 mb-1">Taux de recyclage moyen</p>
              <p className="text-3xl font-bold text-green-600">67%</p>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
              <p className="text-xs text-gray-500 mb-1">Volume total mai 2026</p>
              <p className="text-3xl font-bold text-gray-800">4 820 kg</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-xs text-gray-500 mb-1">CO₂ évité ce mois</p>
              <p className="text-3xl font-bold text-green-600">1 240 kg</p>
            </div>
          </div>

          {/* Graphique + Objectifs */}
          <div className="grid grid-cols-2 gap-4 mb-6">

            {/* Graphique barres */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h2 className="text-sm font-semibold text-gray-700 mb-4">
                Évolution mensuelle (kg recyclés)
              </h2>
              <div className="flex items-end gap-4 h-40">
                {donnees.map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-xs text-gray-500">{val}k</span>
                    <div
                      className="w-full bg-green-500 rounded-t-md"
                      style={{ height: `${(val / maxVal) * 100}%` }}
                    />
                    <span className="text-xs text-gray-400">{mois[i]}</span>
                  </div>
                ))}
              </div>
              {/* Légende */}
              <div className="flex gap-4 mt-3">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-500 rounded" />
                  <span className="text-xs text-gray-500">Recyclé</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-red-300 rounded" />
                  <span className="text-xs text-gray-500">Enfoui</span>
                </div>
              </div>
            </div>

            {/* Objectifs RSE */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h2 className="text-sm font-semibold text-gray-700 mb-4">
                Objectifs RSE 2026
              </h2>
              <div className="space-y-4">
                {objectifs.map((obj, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">{obj.label}</span>
                      <span className="font-semibold text-gray-700">{obj.valeur}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className={`${obj.couleur} h-2 rounded-full`}
                        style={{ width: `${obj.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance prestataires */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Performance des prestataires
            </h2>
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-400 border-b border-gray-100">
                  <th className="text-left pb-2">Prestataire</th>
                  <th className="text-left pb-2">Spécialité</th>
                  <th className="text-left pb-2">Volume traité</th>
                  <th className="text-left pb-2">Note</th>
                  <th className="text-left pb-2">Performance</th>
                </tr>
              </thead>
              <tbody>
                {prestataires.map((p, i) => (
                  <tr key={i} className="border-b border-gray-50">
                    <td className="py-3 text-sm font-medium text-gray-700">{p.nom}</td>
                    <td className="py-3 text-sm text-gray-500">{p.specialite}</td>
                    <td className="py-3 text-sm text-gray-700">{p.volume}</td>
                    <td className="py-3 text-sm text-yellow-500">⭐ {p.note}</td>
                    <td className="py-3 w-32">
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className={`${p.couleur} h-2 rounded-full`}
                          style={{ width: `${p.pct}%` }}
                        />
                      </div>
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

export default Statistiques;