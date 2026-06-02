import React from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';

const prestataires = [
  {
    nom: 'EcoRecycleurs',
    specialite: 'DEEE, batteries, équipements',
    email: 'contact@ecorecycleurs.fr',
    tel: '+257 66371644',
    note: '4.8',
    statut: 'Actif',
    volume: '245 kg traités ce mois',
    pct: 96,
    couleur: 'bg-green-500',
    bordure: 'border-t-green-500',
    icone: '♻️',
  },
  {
    nom: 'PaperCycle',
    specialite: 'Papier, carton, archives',
    email: 'pro@papercycle.fr',
    tel: '+257 66371844',
    note: '4.5',
    statut: 'Actif',
    volume: '1 380 kg traités ce mois',
    pct: 90,
    couleur: 'bg-blue-500',
    bordure: 'border-t-blue-500',
    icone: '📦',
  },
  {
    nom: 'PlastiRec',
    specialite: 'Plastiques PET, HDPE',
    email: 'info@plastirec.fr',
    tel: '+257 66371844',
    note: '4.2',
    statut: 'Actif',
    volume: '860 kg traités ce mois',
    pct: 84,
    couleur: 'bg-purple-500',
    bordure: 'border-t-purple-500',
    icone: '🥤',
  },
  {
    nom: 'Compost+',
    specialite: 'Déchets organiques, compost',
    email: 'hello@compostplus.fr',
    tel: '+257 66371844',
    note: '4.7',
    statut: 'Actif',
    volume: '1 110 kg traités ce mois',
    pct: 94,
    couleur: 'bg-yellow-500',
    bordure: 'border-t-yellow-500',
    icone: '🌿',
  },
  {
    nom: 'VerrePro',
    specialite: 'Verre, bouteilles, vitrages',
    email: 'contact@verrepro.fr',
    tel: '+257 66371844',
    note: '3.9',
    statut: 'En évaluation',
    volume: '120 kg traités ce mois',
    pct: 48,
    couleur: 'bg-gray-400',
    bordure: 'border-t-gray-400',
    icone: '🍾',
  },
];

const contrats = [
  { nom: 'EcoRecycleurs', numero: 'CT-2024-001', debut: '01/01/2024', fin: '31/12/2026', certif: 'ISO 14001 ✓', statut: 'Valide', couleur: 'bg-green-100 text-green-700' },
  { nom: 'PaperCycle', numero: 'CT-2024-002', debut: '15/03/2024', fin: '14/03/2027', certif: 'PEFC ✓', statut: 'Valide', couleur: 'bg-green-100 text-green-700' },
  { nom: 'PlastiRec', numero: 'CT-2023-008', debut: '01/06/2023', fin: '31/05/2026', certif: 'ISO 14001 ✓', statut: 'À renouveler', couleur: 'bg-yellow-100 text-yellow-700' },
  { nom: 'Compost+', numero: 'CT-2025-003', debut: '01/01/2025', fin: '31/12/2027', certif: 'Bio-certification ✓', statut: 'Valide', couleur: 'bg-green-100 text-green-700' },
];

function Prestataires() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar
          titre="Prestataires"
          boutonTexte="Ajouter prestataire"
        />

        <div className="flex-1 p-6 overflow-y-auto">

          {/* Grille des cartes */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {prestataires.map((p, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl border border-gray-200 border-t-4 ${p.bordure} p-4`}
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                    {p.icone}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{p.nom}</p>
                    <p className="text-xs text-gray-400">{p.specialite}</p>
                  </div>
                </div>

                {/* Infos */}
                <p className="text-xs text-gray-500 mb-1">📧 {p.email}</p>
                <p className="text-xs text-gray-500 mb-2">📞 {p.tel}</p>

                {/* Note + Statut */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-yellow-500 font-medium">
                    ⭐ {p.note} / 5
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    p.statut === 'Actif'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {p.statut}
                  </span>
                </div>

                {/* Volume + barre */}
                <p className="text-xs text-gray-400 mb-1">{p.volume}</p>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div
                    className={`${p.couleur} h-1.5 rounded-full`}
                    style={{ width: `${p.pct}%` }}
                  />
                </div>
              </div>
            ))}

            {/* Carte Ajouter */}
            <div className="bg-white rounded-xl border-2 border-dashed border-gray-200 p-4 flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:border-green-400 hover:text-green-500 transition">
              <span className="text-3xl mb-2">+</span>
              <span className="text-sm">Ajouter un prestataire</span>
            </div>
          </div>

          {/* Tableau contrats */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Contrats &amp; certifications
            </h2>
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-400 border-b border-gray-100">
                  <th className="text-left pb-2">Prestataire</th>
                  <th className="text-left pb-2">N° Contrat</th>
                  <th className="text-left pb-2">Date début</th>
                  <th className="text-left pb-2">Date fin</th>
                  <th className="text-left pb-2">Certification</th>
                  <th className="text-left pb-2">Statut contrat</th>
                </tr>
              </thead>
              <tbody>
                {contrats.map((c, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-3 text-sm font-medium text-gray-700">{c.nom}</td>
                    <td className="py-3 text-xs font-mono text-gray-500">{c.numero}</td>
                    <td className="py-3 text-sm text-gray-600">{c.debut}</td>
                    <td className={`py-3 text-sm ${c.statut === 'À renouveler' ? 'text-red-500 font-semibold' : 'text-gray-600'}`}>
                      {c.fin}
                    </td>
                    <td className="py-3 text-sm text-gray-600">{c.certif}</td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${c.couleur}`}>
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

export default Prestataires;