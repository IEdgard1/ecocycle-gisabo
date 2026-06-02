import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';

const declarations = [
  { type: 'Papier/Carton', poids: '400 kg', lieu: 'Bâtiment A • PaperCycle', date: '20/05/2026', statut: 'Terminée', couleur: 'border-green-500' },
  { type: 'DEEE', poids: '150 kg', lieu: 'Local technique • EcoRecycleurs', date: '26/05/2026', statut: 'En attente', couleur: 'border-yellow-500' },
  { type: 'Plastique', poids: '280 kg', lieu: 'Cafétéria • PlastiRec', date: '15/05/2026', statut: 'Terminée', couleur: 'border-blue-500' },
  { type: 'Déchets org.', poids: '190 kg', lieu: 'RDC • Compost+', date: '10/05/2026', statut: 'Terminée', couleur: 'border-yellow-400' },
];

function Declaration() {
  const [form, setForm] = useState({
    type: 'Papier / Carton',
    poids: '',
    zone: 'Bâtiment A',
    date: '2026-05-26',
    prestataire: 'EcoRecycleurs',
    frequence: 'Mensuelle',
    urgence: 'Normal',
    observations: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Déclaration soumise avec succès ! ✓');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar titre="Nouvelle déclaration de déchets" />

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-3 gap-6">

            {/* FORMULAIRE */}
            <div className="col-span-2 bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-sm font-semibold text-gray-700 mb-4">
                Informations générales
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Type + Poids */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1">
                      Type de déchet *
                    </label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500"
                    >
                      <option>Papier / Carton</option>
                      <option>Plastique</option>
                      <option>Verre</option>
                      <option>Déchets organiques</option>
                      <option>DEEE</option>
                      <option>DIB</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1">
                      Poids estimé (kg) *
                    </label>
                    <input
                      name="poids"
                      value={form.poids}
                      onChange={handleChange}
                      placeholder="ex: 150"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500"
                    />
                  </div>
                </div>

                {/* Zone + Date */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1">
                      Zone / Bâtiment *
                    </label>
                    <select
                      name="zone"
                      value={form.zone}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500"
                    >
                      <option>Bâtiment A</option>
                      <option>Bâtiment B</option>
                      <option>Cafétéria</option>
                      <option>Local technique</option>
                      <option>Entrepôt</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1">
                      Date de collecte souhaitée *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500"
                    />
                  </div>
                </div>

                {/* Prestataire */}
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-1">
                    Prestataire
                  </label>
                  <select
                    name="prestataire"
                    value={form.prestataire}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500"
                  >
                    <option>EcoRecycleurs</option>
                    <option>PaperCycle</option>
                    <option>PlastiRec</option>
                    <option>Compost+</option>
                    <option>VerrePro</option>
                  </select>
                </div>

                {/* Fréquence + Urgence */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1">
                      Fréquence de collecte
                    </label>
                    <select
                      name="frequence"
                      value={form.frequence}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500"
                    >
                      <option>Manuelle</option>
                      <option>Hebdomadaire</option>
                      <option>Mensuelle</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1">
                      Niveau d'urgence
                    </label>
                    <select
                      name="urgence"
                      value={form.urgence}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500"
                    >
                      <option>Normal</option>
                      <option>Urgent</option>
                      <option>Critique</option>
                    </select>
                  </div>
                </div>

                {/* Observations */}
                <div>
                  <label className="text-xs font-semibold text-gray-500 block mb-1">
                    Observations
                  </label>
                  <textarea
                    name="observations"
                    value={form.observations}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Informations complémentaires sur ce lot de déchets..."
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500 resize-none"
                  />
                </div>

                {/* Pièce jointe */}
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center text-gray-400 text-sm">
                  📎 Glissez un fichier ou cliquez pour parcourir
                </div>

                {/* Bouton */}
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
                >
                  ✓ Soumettre la déclaration
                </button>

              </form>
            </div>

            {/* SIDEBAR DROITE */}
            <div className="space-y-4">

              {/* Déclarations récentes */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <h2 className="text-sm font-semibold text-gray-700 mb-3">
                  Déclarations récentes
                </h2>
                <div className="space-y-2">
                  {declarations.map((d, i) => (
                    <div
                      key={i}
                      className={`border-l-4 ${d.couleur} pl-3 py-2`}
                    >
                      <div className="flex justify-between items-start">
                        <p className="text-xs font-semibold text-gray-700">
                          {d.type} — {d.poids}
                        </p>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          d.statut === 'Terminée'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {d.statut}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">{d.lieu}</p>
                      <p className="text-xs text-gray-400">{d.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conseils */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h2 className="text-sm font-semibold text-green-700 mb-2">
                  💡 Conseils de déclaration
                </h2>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Peser les déchets avant déclaration</li>
                  <li>• Indiquer le bon type pour le bon prestataire</li>
                  <li>• Délai de collecte : 48h minimum</li>
                  <li>• Joindre le bordereau de suivi si disponible</li>
                  <li>• Contacter le responsable HSE pour DEEE</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Declaration;