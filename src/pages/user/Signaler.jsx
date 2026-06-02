import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarUser from '../../components/SidebarUser';

function Signaler() {
  const navigate = useNavigate();
  const [typeProbleme, setTypeProbleme] = useState('Benne pleine');
  const [urgence, setUrgence] = useState('Urgent');
  const [localisation, setLocalisation] = useState('Bâtiment A — Couloir 2e étage');
  const [description, setDescription] = useState('La benne carton du couloir est pleine depuis ce matin,\nimpossible de déposer du carton.');

  const types = [
    { icone: '🗑️', label: 'Benne pleine' },
    { icone: '🚫', label: 'Mauvais tri' },
    { icone: '⚠️', label: 'Déchet dangereux' },
    { icone: '🔧', label: 'Équipement cassé' },
  ];

  const urgences = [
    { label: 'Urgent', icone: '🔴', couleur: 'border-red-500 bg-red-50 text-red-600' },
    { label: 'Moyen', icone: '🟡', couleur: 'border-yellow-500 bg-yellow-50 text-yellow-600' },
    { label: 'Faible', icone: '🟢', couleur: 'border-green-500 bg-green-50 text-green-600' },
  ];

  const handleSubmit = () => {
    alert('Signalement envoyé avec succès ! Le responsable HSE a été notifié.');
    navigate('/user/accueil');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarUser />

      <div className="flex-1 p-6">

        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Signaler un problème</h1>
        <p className="text-gray-400 text-sm mb-6">Alertez le responsable HSE</p>

        <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-2xl">

          {/* Type de problème */}
          <div className="mb-5">
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Type de problème *
            </label>
            <div className="flex flex-wrap gap-2">
              {types.map((t) => (
                <button
                  key={t.label}
                  onClick={() => setTypeProbleme(t.label)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition ${
                    typeProbleme === t.label
                      ? 'bg-green-50 border-green-500 text-green-700'
                      : 'bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <span>{t.icone}</span>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Localisation */}
          <div className="mb-5">
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Localisation *
            </label>
            <select
              value={localisation}
              onChange={(e) => setLocalisation(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500"
            >
              <option>Bâtiment A — Couloir 2e étage</option>
              <option>Bâtiment A — Bureau 201</option>
              <option>Bâtiment B — Couloir</option>
              <option>Cafétéria — RDC</option>
              <option>Local technique</option>
              <option>Entrepôt</option>
            </select>
          </div>

          {/* Niveau d'urgence */}
          <div className="mb-5">
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Niveau d'urgence *
            </label>
            <div className="flex gap-2">
              {urgences.map((u) => (
                <button
                  key={u.label}
                  onClick={() => setUrgence(u.label)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition ${
                    urgence === u.label
                      ? u.couleur
                      : 'bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <span>{u.icone}</span>
                  {u.label}
                </button>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="mb-5">
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Photo du problème
            </label>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center text-gray-400">
              <p className="text-2xl mb-1">📷</p>
              <p className="text-sm">Appuyez pour prendre une photo...</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 block mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500 resize-none"
            />
          </div>

          {/* Bouton */}
          <button
            onClick={handleSubmit}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
          >
            🚨 Envoyer le signalement
          </button>

        </div>
      </div>
    </div>
  );
}

export default Signaler;