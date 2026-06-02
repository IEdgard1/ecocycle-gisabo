import React, { useState } from 'react';
import SidebarUser from '../../components/SidebarUser';

const categories = [
  {
    nom: 'Papier / Carton',
    icone: '📦',
    description: 'Journaux, magazines, cartons',
    regles: [
      { ok: true, texte: 'Aplatir avant dépôt en benne' },
      { ok: false, texte: 'Pas de papier gras ou souillé' },
    ],
    benne: 'Benne A',
    couleur: 'bg-green-500',
    couleurBouton: 'bg-green-500',
  },
  {
    nom: 'Plastique',
    icone: '🥤',
    description: 'Bouteilles PET, bidons HDPE',
    regles: [
      { ok: true, texte: 'Vider et écraser avant dépôt' },
      { ok: false, texte: 'Pas de sacs plastiques noirs' },
    ],
    benne: 'Benne B',
    couleur: 'bg-blue-500',
    couleurBouton: 'bg-blue-500',
  },
  {
    nom: 'DEEE',
    icone: '💻',
    description: 'Ordinateurs, téléphones, câbles',
    regles: [
      { ok: true, texte: 'Déposer au local technique' },
      { ok: false, texte: 'Jamais dans les bennes classiques' },
    ],
    benne: 'Local technique',
    couleur: 'bg-red-500',
    couleurBouton: 'bg-red-500',
  },
  {
    nom: 'Déchets organiques',
    icone: '🍎',
    description: 'Restes alimentaires, marc de café',
    regles: [
      { ok: true, texte: 'Épluchures, fruits et légumes' },
      { ok: false, texte: 'Pas de viande ni poisson' },
    ],
    benne: 'Bac compost RDC',
    couleur: 'bg-yellow-500',
    couleurBouton: 'bg-yellow-500',
  },
];

function TriUser() {
  const [recherche, setRecherche] = useState('');

  const filtrees = categories.filter((c) =>
    c.nom.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarUser />

      <div className="flex-1 p-6">

        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Règles de tri</h1>
        <p className="text-gray-400 text-sm mb-4">Guide de tri pour votre entreprise</p>

        {/* Recherche */}
        <div className="relative mb-6 max-w-xl">
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          <input
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder="Rechercher un type de déchet..."
            className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-green-500"
          />
        </div>

        {/* Liste des catégories */}
        <div className="space-y-4 max-w-2xl">
          {filtrees.map((cat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 p-4"
            >
              <div className="flex items-start gap-4">

                {/* Icone */}
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {cat.icone}
                </div>

                {/* Contenu */}
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 mb-1">{cat.nom}</p>
                  <p className="text-xs text-gray-400 mb-2">{cat.description}</p>

                  {/* Règles */}
                  {cat.regles.map((r, j) => (
                    <p key={j} className={`text-xs mb-1 ${r.ok ? 'text-gray-600' : 'text-red-500'}`}>
                      {r.ok ? '✓' : '✗'} {r.texte}
                    </p>
                  ))}
                </div>

                {/* Bouton benne */}
                <button className={`${cat.couleurBouton} text-white text-xs px-3 py-1.5 rounded-full font-medium flex-shrink-0`}>
                  {cat.benne} →
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default TriUser;