import React from 'react';
import { useNavigate } from 'react-router-dom';

function Topbar({ titre, boutonTexte, boutonAction }) {
  const navigate = useNavigate();

  return (
    <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6">

      {/* Titre de la page */}
      <h1 className="text-lg font-semibold text-gray-800">{titre}</h1>

      {/* Droite */}
      <div className="flex items-center gap-3">

        {/* Bouton recherche */}
        <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 transition">
          🔍
        </button>

        {/* Bouton notification */}
        <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 transition relative">
          🔔
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Bouton action principal */}
        {boutonTexte && (
          <button
            onClick={boutonAction}
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            + {boutonTexte}
          </button>
        )}

      </div>
    </div>
  );
}

export default Topbar;