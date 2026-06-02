import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarUser from '../../components/SidebarUser';

function Declarer() {
  const navigate = useNavigate();
  const [typeSelectionne, setTypeSelectionne] = useState('Papier / Carton');
  const [poidsSelectionne, setPoidsSelectionne] = useState('<5 kg');
  const [zone, setZone] = useState('Bâtiment A — Bureau 201');
  const [observation, setObservation] = useState('');

  const types = ['Papier / Carton', 'Plastique', 'Verre', 'DEEE', 'Organique'];
  const poids = ['<5 kg', '5-20 kg', '20-100 kg', '>100 kg'];

  const handleSubmit = () => {
    alert('Déclaration soumise avec succès ! ✓');
    navigate('/user/accueil');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarUser />

      <div className="flex-1 p-6">

        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Déclarer des déchets</h1>
        <p className="text-gray-400 text-sm mb-6">Remplissez le formulaire ci-dessous</p>

        {/* Étapes */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-green-600 text-white text-xs flex items-center justify-center font-bold">1</div>
            <span className="text-xs font-semibold text-green-600">Identification</span>
          </div>
          <div className="flex-1 h-1 bg-gray-200 rounded">
            <div className="w-1/3 h-1 bg-green-500 rounded" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-400 text-xs flex items-center justify-center font-bold">2</div>
            <span className="text-xs text-gray-400">Confirmation</span>
          </div>
          <div className="flex-1 h-1 bg-gray-200 rounded" />
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-400 text-xs flex items-center justify-center font-bold">3</div>
            <span className="text-xs text-gray-400">Récapitulatif</span>
          </div>
        </div>

        {/* Formulaire */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-2xl">

          {/* Type de déchet */}
          <div className="mb-5">
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Type de déchet *
            </label>
            <div className="flex flex-wrap gap-2">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setTypeSelectionne(t)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
                    typeSelectionne === t
                      ? 'bg-white border-green-500 text-green-700'
                      : 'bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Poids */}
          <div className="mb-5">
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Poids estimé (kg) *
            </label>
            <div className="flex gap-2">
              {poids.map((p) => (
                <button
                  key={p}
                  onClick={() => setPoidsSelectionne(p)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
                    poidsSelectionne === p
                      ? 'bg-white border-green-500 text-green-700'
                      : 'bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Zone */}
          <div className="mb-5">
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Zone / Bâtiment *
            </label>
            <select
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500"
            >
              <option>Bâtiment A — Bureau 201</option>
              <option>Bâtiment B — Couloir 2e étage</option>
              <option>Cafétéria — RDC</option>
              <option>Local technique</option>
              <option>Entrepôt</option>
            </select>
          </div>

          {/* Photo */}
          <div className="mb-5">
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Photo (optionnel)
            </label>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center text-gray-400">
              <p className="text-2xl mb-1">📷</p>
              <p className="text-sm">Appuyez pour prendre une photo...</p>
            </div>
          </div>

          {/* Observation */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Observation
            </label>
            <textarea
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
              rows={3}
              placeholder="Remarques supplémentaires..."
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500 resize-none"
            />
          </div>

          {/* Bouton */}
          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition float-right"
          >
            Suivant →
          </button>

        </div>
      </div>
    </div>
  );
}

export default Declarer;