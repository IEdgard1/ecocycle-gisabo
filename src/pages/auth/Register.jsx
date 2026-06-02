import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    departement: '',
    batiment: '',
    motDePasse: '',
    confirmer: '',
    role: 'employe'
  });
  const [voir, setVoir] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex">

      {/* GAUCHE — vert */}
      <div className="w-2/5 bg-gradient-to-br from-green-800 to-green-500 flex flex-col justify-center px-12 text-white">
        <img src="/logo.png" alt="logo" className="w-36 h-36 object-contain mb-6" />
        <h1 className="text-3xl font-bold mb-2">Rejoignez EcoCycle GISABO</h1>
        <p className="text-green-200 mb-8">Gérez vos déchets, suivez vos performances RSE.</p>

        <div className="space-y-3">
          <div className="bg-white bg-opacity-10 rounded-xl p-3">
            <p className="font-semibold text-sm">✅ Déclaration simplifiée</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-3">
            <p className="font-semibold text-sm">📊 Suivi RSE en temps réel</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-3">
            <p className="font-semibold text-sm">🚛 Gestion prestataires intégrée</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-3">
            <p className="font-semibold text-sm">🔒 Données sécurisées RGPD</p>
          </div>
        </div>

        <p className="mt-8 text-sm text-green-200">
          Déjà un compte ?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-white font-bold cursor-pointer hover:underline"
          >
            Se connecter →
          </span>
        </p>
      </div>

      {/* DROITE — formulaire */}
      <div className="w-3/5 flex flex-col justify-center px-16 bg-gray-50 overflow-y-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-1">Inscription</h2>
        <p className="text-gray-500 mb-6">Remplissez les informations ci-dessous</p>

        {/* Barre de progression */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div className="bg-green-500 h-2 rounded-full w-1/3" />
        </div>
        <p className="text-xs text-green-600 font-semibold mb-6">
          Étape 1 sur 3 — Informations personnelles
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Prénom + Nom */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-semibold text-gray-600 block mb-1">Prénom *</label>
              <input
                name="prenom"
                value={form.prenom}
                onChange={handleChange}
                placeholder=""
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 bg-white"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-semibold text-gray-600 block mb-1">Nom *</label>
              <input
                name="nom"
                value={form.nom}
                onChange={handleChange}
                placeholder=""
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 bg-white"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">Email professionnel *</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="votre@entreprise.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 bg-white"
            />
          </div>

          {/* Département + Bâtiment */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-semibold text-gray-600 block mb-1">Département *</label>
              <select
                name="departement"
                value={form.departement}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 bg-white"
              >
                <option value="">Sélectionner...</option>
                <option>Production</option>
                <option>Administration</option>
                <option>Logistique</option>
                <option>RH</option>
                <option>Informatique</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="text-sm font-semibold text-gray-600 block mb-1">Bâtiment *</label>
              <select
                name="batiment"
                value={form.batiment}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 bg-white"
              >
                <option value="">Sélectionner...</option>
                <option>Bâtiment A</option>
                <option>Bâtiment B</option>
                <option>Cafétéria</option>
                <option>Local technique</option>
              </select>
            </div>
          </div>

          {/* Rôle */}
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">Rôle *</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 bg-white"
            >
              <option value="employe">Employé</option>
              <option value="admin">Responsable HSE</option>
            </select>
          </div>

          {/* Mot de passe */}
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">Mot de passe *</label>
            <div className="relative">
              <input
                name="motDePasse"
                type={voir ? 'text' : 'password'}
                value={form.motDePasse}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 bg-white"
              />
              <button
                type="button"
                onClick={() => setVoir(!voir)}
                className="absolute right-4 top-3 text-gray-400"
              >
                {voir ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {/* Confirmer */}
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">Confirmer le mot de passe *</label>
            <input
              name="confirmer"
              type="password"
              value={form.confirmer}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 bg-white"
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition"
          >
            Créer mon compte →
          </button>

        </form>
      </div>
    </div>
  );
}

export default Register;