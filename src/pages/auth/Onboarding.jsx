import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Onboarding() {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

const slides = [
    {
      titre: "Bienvenue sur EcoCycle GISABO",
      texte: "La solution complète de gestion des déchets et de recyclage pour votre entreprise.",
      emoji: "♻️",
      couleur: "from-green-600 to-green-400"
    },
    {
      titre: "Déclarez en quelques secondes",
      texte: "Signalez vos déchets facilement : type, poids, localisation. Le responsable HSE est notifié instantanément.",
      emoji: "📋",
      couleur: "from-green-500 to-teal-400"
    },
    {
      titre: "Triez facilement et correctement",
      texte: "Accédez aux règles de tri de votre entreprise à tout moment. Chaque type de déchet avec sa benne dédiée.",
      emoji: "🗂️",
      couleur: "from-yellow-500 to-yellow-300"
    },
    {
      titre: "Suivez votre impact écologique",
      texte: "Consultez vos statistiques, débloquez des badges et contribuez aux objectifs RSE de l'entreprise.",
      emoji: "📊",
      couleur: "from-blue-500 to-blue-300"
    }
  ];

  const slideActuel = slides[slide];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${slideActuel.couleur} flex flex-col items-center justify-center p-8 transition-all duration-500`}>
      
      {/* Logo */}
<div className="mb-8">
  <img
    src="/logo.png"
    alt="EcoCycle GISABO"
    className="w-48 h-48 object-contain"
  />
</div>

      {/* Texte */}
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        {slideActuel.titre}
      </h1>
      <p className="text-white text-opacity-80 text-center text-lg mb-12 max-w-lg">
        {slideActuel.texte}
      </p>

      {/* Indicateurs de slides */}
      <div className="flex gap-2 mb-10">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === slide ? 'w-6 h-3 bg-white' : 'w-3 h-3 bg-white opacity-40'
            }`}
          />
        ))}
      </div>

      {/* Boutons */}
      {slide < slides.length - 1 ? (
        <button
          onClick={() => setSlide(slide + 1)}
          className="bg-white text-green-700 font-bold px-10 py-4 rounded-2xl text-lg hover:bg-green-50 transition mb-4"
        >
          Suivant →
        </button>
      ) : (
        <button
          onClick={() => navigate('/login')}
          className="bg-white text-green-700 font-bold px-10 py-4 rounded-2xl text-lg hover:bg-green-50 transition mb-4"
        >
          🚀 Commencer maintenant
        </button>
      )}

      {/* Passer */}
      <button
        onClick={() => navigate('/login')}
        className="text-white opacity-60 text-sm hover:opacity-100 transition"
      >
        Passer l'introduction
      </button>

    </div>
  );
}

export default Onboarding;