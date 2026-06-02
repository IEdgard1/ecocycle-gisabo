import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [voir, setVoir] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Pour l'instant on redirige directement
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen flex">

      {/* GAUCHE — vert */}
      <div className="w-1/2 bg-gradient-to-br from-green-600 to-green-400 flex flex-col justify-center px-16 text-white">
        <img src="/logo.png" alt="logo" className="w-60 h-60 object-contain mb-6" />
        <h1 className="text-4xl font-bold mb-2">EcoCycle GISABO</h1>
        <p className="text-green-200 mb-10">Gestion des déchets en entreprise</p>

        <div className="space-y-4">
          <div className="bg-white bg-opacity-10 rounded-xl p-4">
            <p className="font-semibold">✅ Déclaration simplifiée</p>
            <p className="text-sm text-green-200">En quelques clics depuis n'importe où</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-4">
            <p className="font-semibold">📊 Suivi RSE en temps réel</p>
            <p className="text-sm text-green-200">Tableaux de bord automatiques</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-4">
            <p className="font-semibold">🔒 Données sécurisées</p>
            <p className="text-sm text-green-200">Chiffrement de bout en bout</p>
          </div>
        </div>
      </div>

      {/* DROITE — formulaire */}
      <div className="w-1/2 flex flex-col justify-center px-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Connexion</h2>
        <p className="text-gray-500 mb-8">Bienvenue ! Connectez-vous à votre compte.</p>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">
              Adresse email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 bg-white"
            />
          </div>

          {/* Mot de passe */}
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">
              Mot de passe
            </label>
            <div className="relative">
              <input
                type={voir ? 'text' : 'password'}
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
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
            <p
              onClick={() => {}}
              className="text-right text-sm text-green-600 mt-1 cursor-pointer hover:underline"
            >
              Mot de passe oublié ?
            </p>
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition"
          >
            Se connecter
          </button>

          {/* Séparateur */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-gray-400 text-sm">ou</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Bouton entreprise */}
          <button
            type="button"
            className="w-full border border-gray-300 rounded-xl py-3 text-gray-600 hover:bg-gray-100 transition"
          >
            🏢 Connexion via compte entreprise
          </button>

        </form>

        {/* Lien inscription */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          Pas encore de compte ?{' '}
          <span
            onClick={() => navigate('/register')}
            className="text-green-600 font-semibold cursor-pointer hover:underline"
          >
            S'inscrire
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;