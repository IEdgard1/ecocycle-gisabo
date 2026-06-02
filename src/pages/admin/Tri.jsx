import React from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';

const categories = [
  {
    nom: 'Papier / Carton',
    icone: '📦',
    description: 'Journaux, emballages, cartons plats',
    benne: 'Benne A — Bâtiment principal',
    pct: 45,
    couleur: 'bg-green-500',
    bordure: 'border-t-green-500',
    prochaine: '28 mai 2026',
  },
  {
    nom: 'Plastique',
    icone: '🥤',
    description: 'PET, HDPE, emballages souples',
    benne: 'Benne B — Cafétéria',
    pct: 68,
    couleur: 'bg-blue-500',
    bordure: 'border-t-blue-500',
    prochaine: '02 juin 2026',
  },
  {
    nom: 'Déchets organiques',
    icone: '🌿',
    description: 'Restes alimentaires, marc de café',
    benne: 'Bac compost — RDC',
    pct: 82,
    couleur: 'bg-yellow-500',
    bordure: 'border-t-yellow-500',
    prochaine: '30 mai 2026',
  },
  {
    nom: 'DEEE',
    icone: '💻',
    description: 'Équipements électroniques usagés',
    benne: 'Local technique',
    pct: 92,
    couleur: 'bg-red-500',
    bordure: 'border-t-red-500',
    prochaine: '26 mai 2026',
  },
  {
    nom: 'Verre',
    icone: '🍾',
    description: 'Bouteilles, bocaux, vitres',
    benne: 'Benne D — Entrée',
    pct: 30,
    couleur: 'bg-purple-500',
    bordure: 'border-t-purple-500',
    prochaine: '10 juin 2026',
  },
  {
    nom: 'DIB / Déchets résiduels',
    icone: '🗑️',
    description: 'Non recyclables, déchets mixtes',
    benne: 'Benne générale',
    pct: 55,
    couleur: 'bg-gray-500',
    bordure: 'border-t-gray-500',
    prochaine: '05 juin 2026',
  },
];

const regles = [
  { ok: true, texte: 'Aplatir les cartons avant dépôt en benne' },
  { ok: true, texte: 'Vider les emballages plastiques avant recyclage' },
  { ok: true, texte: 'Déposer les DEEE au local technique uniquement' },
  { ok: false, texte: 'Ne pas mélanger DEEE et déchets ménagers' },
  { ok: false, texte: 'Pas de déchets dangereux dans les bennes classiques' },
  { ok: false, texte: 'Interdiction de jeter les piles dans les bennes ordinaires' },
];

function Tri() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar
          titre="Tri & Catégories"
          boutonTexte="Catégorie"
        />

        <div className="flex-1 p-6 overflow-y-auto">

          {/* Grille des catégories */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {categories.map((cat, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl border border-gray-200 border-t-4 ${cat.bordure} p-4`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{cat.icone}</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{cat.nom}</p>
                    <p className="text-xs text-gray-400">{cat.description}</p>
                  </div>
                </div>

                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>{cat.benne}</span>
                  <span className={cat.pct >= 80 ? 'text-red-500 font-bold' : 'text-gray-500'}>
                    {cat.pct}% {cat.pct >= 80 ? '⚠️' : ''}
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-3">
                  <div
                    className={`${cat.couleur} h-2 rounded-full`}
                    style={{ width: `${cat.pct}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400">
                  Prochaine collecte : {cat.prochaine}
                </p>
              </div>
            ))}
          </div>

          {/* Règles de tri */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Règles de tri en vigueur
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {regles.map((r, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span>{r.ok ? '✅' : '❌'}</span>
                  <span className="text-sm text-gray-600">{r.texte}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Tri;