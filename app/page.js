"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
// 4th Edition imports
import Logo from "../public/Logo.svg";
import Img2CF from "../public/Img2cf.png";
import SG from "../public/SG.png";
import kaddi from "../public/kaddi.png";
import Aatek from "../public/Aatek.png";
import Logos from "../public/Logos.png";
import comp from "../public/comp.png";
// 5th Edition imports
import Logo5 from "../public/5th/logo5.png";
import Philogo from "../public/5th/Philogo.png";
import conf1_5th from "../public/5th/conf1.png";
import conf3_5th from "../public/5th/conf3.png";
import conf4_5th from "../public/5th/conf4.png";
import sponsors5 from "../public/5th/sponsors5.png";
import link from "../public/link.svg";

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date()); // Store current time
  const [showPreviousEdition, setShowPreviousEdition] = useState(false); // Toggle between 4th and 5th edition

  // Update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const programme4th = [
    {
      time: "10:00",
      title: "Ouverture de la journée",
      details: [
        "Lecture de quelques versets du Coran par l’étudiant Mouad Sehlaoui",
        "Mot d'ouverture par le Directeur de l'ENSA-A, M. Hassan Hamdi",
        "Mot du coordinateur de la journée, M. Bou Mhamed Abdelhamid",
      ],
      image: "",
    },
    {
      time: "10:30",
      title: "Conférence 1",
      details: [
        "L’Analyse quantitative dans la gestion des risques en Private equity",
      ],
      image: Img2CF,
    },
    {
      time: "11:25",
      title: "Conférence 2",
      details: [
        "Gestion des actifs : Un moteur pour le développement économique du Maroc",
      ],
      image: Aatek,
    },
    { time: "12:25", title: "Pause-Café", image: "" },
    {
      time: "12:50",
      title: "Conférence 3",
      details: ["Commando Front Office et les nouveaux horizons de la finance"],
      image: kaddi,
    },
    {
      time: "13:45",
      title: "Conférence 4",
      details: ["Les Métiers de la Banque d’Investissement"],
      image: SG,
    },
    { time: "14:15", title: "Pause Déjeuner" },
    {
      time: "16:30",
      title: "Présentation Étudiante (FID3)",
      details: [
        "Fatima Zahra Koukou",
        "Financial Toolkit platform : Dynamique, Efficacité et Inclusivité. Des projets académiques visionnaire pour la finance de demain",
      ],
      image: "",
    },
    {
      time: "16:05",
      title: "Présentations Étudiants (FID2)",
      details: [
        "Bou Mhamed Abdelhamid",
        "( L'Ordre dans le Désordre : Le K-Means et la Quête de Structure dans la Finance de Marché )",
        "Daniel Anonwodji",
        "( Simulation Monte Carlo vs Optimisation quadratique : Minimisation du Tracking Error dans la gestion indicielle )",
        "Wassim Kerdoun",
        "( Monte Carlo Pricing of European Options with Volatility Surface and Greeks Analysis )",
      ],
      image: "",
    },
    { time: "16:40", title: "Compétition", details: [], image: comp },
    {
      time: "17:00",
      title: "Animation musicale",
      details: ["Gnaoua"],
    },
    { time: "18:00", title: "Clôture de la Journée", details: [], image: "" },
  ];

  const programme5th = [
    {
      time: "09:00",
      title: "Ouverture de la journée",
      details: [],
      image: "",
    },
    {
      time: "09:30",
      title: "Conférence 1",
      details: [
        "Régulation bancaire et gestion des risques financiers : enjeux, défis et perspectives",
      ],
      image: conf1_5th,
    },
    {
      time: "10:25",
      title: "Conférence 2",
      details: ["Evolution des Métiers de Quant"],
      image: Philogo,
    },
    { time: "11:05", title: "Pause-Café", image: "" },
    {
      time: "11:35",
      title: "Conférence 3",
      details: ["Les métiers de la banque de financement et d'investissement"],
      image: conf3_5th,
    },
    {
      time: "12:10",
      title: "Conférence 4",
      details: [
        "Connecter les Métiers : Quand la Finance Quantitative rencontre la Stratégie",
      ],
      image: conf4_5th,
    },
    { time: "13:00", title: "Pause Déjeuner" },
    {
      time: "14:30",
      title: "Présentations des projets des étudiants",
      details: [],
      image: "",
    },
    {
      time: "15:35",
      title: "Compétition (Gestion de portfeuille)",
      details: [],
      image: "",
    },
    { time: "16:00", title: "Animation musicale", details: [] },
    {
      time: "17:00",
      title: "Pause-Café de fin de journée",
      details: [],
      image: "",
    },
  ];

  const currentEdition = showPreviousEdition ? 4 : 5;
  const currentProgramme = showPreviousEdition ? programme4th : programme5th;
  const currentLogo = showPreviousEdition ? Logo : Logo5;
  const currentSponsors = showPreviousEdition ? Logos : sponsors5;

  return (
    <div
      id="Programme"
      className="h-auto flex flex-col justify-center items-center text-center gap-14 px-[2vw] pt-20"
    >
      <div>
        <p className="text-[4rem] font-bold text-[#ffa92c] leading-none">
          Welcome
        </p>
        <p className="text-lg font-light">
          to the {currentEdition}th Edition of Financial Day
        </p>
      </div>

      <Image src={currentLogo} alt="Logo" className="w-[230px]" />

      {!showPreviousEdition && (
        <div className="text-2xl font-semibold text-[#ffa92c]">
          Samedi 29 Novembre
        </div>
      )}

      <div className="leading-none flex flex-col items-center justify-center">
        <p className="text-xl pb-0.5">Thème</p>
        <div className="w-[68px] opacity-65 border border-white h-0 mb-6"></div>
        {showPreviousEdition ? (
          <>
            <p className="text-xl">Les Nouveaux Horizons de</p>
            <p className="text-[3.5rem] font-semibold text-[#ffa92c] pb-2">
              La Finance
            </p>
            <div className="w-[290px] opacity-65 border border-white h-0 mb-2"></div>
            <p className="text-xl">Tendances, Technologies et</p>
            <p className="text-xl">Opportunités de Marché</p>
          </>
        ) : (
          <>
            <p className="text-2xl">Exploration Stratégique des</p>
            <p className="text-[2.5rem] font-semibold text-[#ffa92c] pb-3 pt-1">
              Marchés Financiers
            </p>
            <div className="w-[290px] opacity-65 border border-white h-0 mb-2"></div>
            <p className="text-2xl">Entre Modèles Quantitatifs</p>
            <p className="text-2xl">et Décision Managériale</p>
          </>
        )}
      </div>
      <div>
        <p className="text-[3rem] font-semibold pb-8 pt-16">Planning</p>
        {currentProgramme.map((item, index) => {
          return (
            <div
              className={`flex flex-col gap-4 text-center items-center justify-center ${
                item.status === "past" ? "opacity-50" : ""
              }`}
              key={index}
            >
              <div
                className={`flex flex-col gap-4 text-center items-center justify-center relative ${
                  item.status === "current"
                    ? "rounded-xl border-2 border-[#ffa92c] p-4 bg-[#ffa92c] bg-opacity-15"
                    : ""
                }`}
              >
                <div className="text-5xl font-semibold relative z-10">
                  {item.time}
                </div>
                <div className="text-3xl font-medium px-6 text-[#ffa92c] relative z-10">
                  {item.title}
                </div>
                {item.details && (
                  <div className="text-lg font-thin px-6 relative z-10">
                    {item.details.map((detail, index) => (
                      <p key={index}>{detail}</p>
                    ))}
                  </div>
                )}
                {item.image && (
                  <Image
                    src={item.image}
                    alt="Conférence"
                    width={600}
                    height={600}
                    key={index}
                    className={`rounded-lg ${
                      item.image === Philogo
                        ? "w-[200px] h-auto relative z-10"
                        : "-mt-16 -mb-16 relative z-0"
                    }`}
                  />
                )}
              </div>
              {index !== currentProgramme.length - 1 && (
                <div className="w-[0px] border border-white h-28 mb-4 relative z-10"></div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-4 mt-8">
        <p className="text-xl font-light text-gray-300">Merci à nos sponsors</p>
        <Image
          src={currentSponsors}
          alt="Logos"
          className="max-w-full sm:w-[50%] lg:w-[30%] px-3"
        />
      </div>

      <button
        onClick={() => setShowPreviousEdition(!showPreviousEdition)}
        className="px-6 py-3 mt-8 bg-[#ffa92c] hover:bg-[#ff9a0d] text-white font-semibold rounded-lg transition-colors duration-200"
      >
        {showPreviousEdition
          ? "Voir la 5ème Édition (Actuelle)"
          : "Voir la 4ème Édition (Précédente)"}
      </button>

      <p className="pt-4 pb-10">
        {" "}
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/el-qadi/"
          className="text-[#ffa92c]"
        >
          El Qadi Hassan
          <Image src={link} alt="LinkedIn" className="w-6 ml-1 inline mb-1" />
        </a>
      </p>
    </div>
  );
}
