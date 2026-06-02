import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarUser from '../../components/SidebarUser';

function Profil() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [langue, setLangue] = useState('Français');

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarUser />

      <div className="flex-1 p-6">

        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Mon profil</h1>

        <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-2xl">

          {/* Avatar + Infos */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xl">
              EI
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800">Edgard Ishimwe</p>
              <p className="text-sm text-gray-400">Département IT</p>
              <p className="text-sm text-gray-400">ishedgard@gmail.com</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-100">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-400 mb-1">Déclarations</p>
              <p className="text-xl font-bold text-gray-800">3</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-400 mb-1">Déchets déposés</p>
              <p className="text-xl font-bold text-gray-800">240 kg</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-400 mb-1">Signalements</p>
              <p className="text-xl font-bold text-gray-800">2</p>
            </div>
          </div>

          {/* Informations */}
          <div className="mb-6 pb-6 border-b border-gray-100">
            <h2 className="text-sm font-bold text-gray-700 mb-4">Informations</h2>
            <div className="space-y-3">
              {[
                { label: 'Nom complet', valeur: 'Edgard ISHIMWE' },
                { label: 'Email', valeur: 'ishedgard@gmail.com' },
                { label: 'Département', valeur: 'IT' },
                { label: 'Bâtiment principal', valeur: 'Bâtiment A' },
                { label: 'Rôle', valeur: 'Employé' },
              ].map((info, i) => (
                <div key={i} className="flex justify-between py-2 border-b border-gray-50">
                  <span className="text-sm text-gray-400">{info.label}</span>
                  <span className="text-sm font-medium text-gray-800">{info.valeur}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Paramètres */}
          <div className="mb-6">
            <h2 className="text-sm font-bold text-gray-700 mb-4">Paramètres</h2>
            <div className="space-y-3">

              {/* Notifications */}
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-sm text-gray-700">🔔 Notifications</span>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`w-12 h-6 rounded-full transition-all ${
                    notifications ? 'bg-green-500' : 'bg-gray-300'
                  } relative`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${
                    notifications ? 'right-0.5' : 'left-0.5'
                  }`} />
                </button>
              </div>

              {/* Langue */}
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-sm text-gray-700">🌍 Langue</span>
                <select
                  value={langue}
                  onChange={(e) => setLangue(e.target.value)}
                  className="text-sm text-gray-500 border border-gray-200 rounded-lg px-2 py-1 focus:outline-none"
                >
                  <option>Français</option>
                  <option>English</option>
                  <option>Kirundi</option>
                </select>
              </div>

              {/* Mot de passe */}
              <div className="flex justify-between items-center py-2 border-b border-gray-50 cursor-pointer hover:bg-gray-50">
                <span className="text-sm text-gray-700">🔒 Changer mot de passe</span>
                <span className="text-gray-400 text-sm">→</span>
              </div>

              {/* À propos */}
              <div className="flex justify-between items-center py-2 cursor-pointer hover:bg-gray-50">
                <span className="text-sm text-gray-700">ℹ️ À propos</span>
                <span className="text-gray-400 text-sm">v1.0.0 →</span>
              </div>

            </div>
          </div>

          {/* Bouton déconnexion */}
          <button
            onClick={() => navigate('/login')}
            className="w-full border border-red-200 bg-red-50 text-red-500 font-semibold py-3 rounded-lg hover:bg-red-100 transition"
          >
            Se déconnecter
          </button>

        </div>
      </div>
    </div>
  );
}

export default Profil;