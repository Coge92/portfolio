import "./aproposAnimBackground.css";
import "./apropos.css";
import { Radar, PolarArea } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJs,
  faReact,
  faFigma,
  faGithub,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import LogoRedux from "../../Assets/redux.svg";
import LogoVSC from "../../Assets/vsc.svg";
import LogoGoogleAdManager from "../../Assets/google-ad-manager-2.svg";
import LogoGoogleAnalytics from "../../Assets/google-analytics-4.svg";
import LogoGoogleSearch from "../../Assets/google-search-console.svg";
import LogoMonday from "../../Assets/monday-1.svg";
import LogoNotion from "../../Assets/notion-2.svg";
import LogoOffice from "../../Assets/office-1.svg";
import LogoSalesforce from "../../Assets/salesforce-2.svg";
import LogoSellsy from "../../Assets/sellsy-svgrepo-com.svg";
import LogoSlack from "../../Assets/slack-1.svg";
import LogoTrello from "../../Assets/trello.svg";
import LogoWordpress from "../../Assets/wordpress-icon-1.svg";
import LogoBrevo from "../../Assets/brevo.svg";
import { useEffect, useState } from "react";

export default function APropos() {

  const [fontGraph, setFontGraph] = useState(14)
  const [paddingGraphRight, setPaddingGraphRight] = useState(0)
  const [paddingGraphLeft, setPaddingGraphLeft] = useState(0)
  
  useEffect(() => {

    if (window.innerWidth < 768) {

      setFontGraph(10)
      setPaddingGraphLeft(50)
      setPaddingGraphRight(20)
      
    }
   
  }, [])




  return (
    <>
      <section className="section--apropos" id="Apropos">
        {/* className="base" is dedicated to animations */}
        <div className="base">
          <div className="section--apropos__container">
            <h2>About me.</h2>
            <div className="apropos__profil">
              <img
                src="https://mehdihabibi.fr/PhotoMH.jpg"
                alt="Profil illustration"
              />
              <div className="apropos__profil--text">
                <p>
                  I am naturally enthusiastic and curious. I enjoy creating solutions that generate value and have positive impacts. <br /><br />
                  I have a strong interest in media advertising, web development, and digital marketing. 
                  My experience covers everything from selling and managing advertising projects to digital communication strategies, event sponsorship, and direct marketing. <br /><br />
                  Recently, I have developed my web development skills by learning JavaScript and React.
                </p>
              </div>
            </div>
          </div>
          <div className="apropos__graph">
            <div className="chart radar">
              <h3>Skills</h3>
              <Radar
                className="radar"
                data={{
                  labels: [
                    "Business Development",
                    "Projet Management",
                    "Marketing",
                    "Communication",
                    "Sales Rep",
                    "Coordination",
                  ],
                  datasets: [
                    {
                      label: "Qualities",
                      data: [10, 10, 10, 10, 10, 10],
                      backgroundColor: " rgba(2, 2, 2, 0.1) ", // Couleur de remplissage du graphique
                      borderColor: "white", // Couleur de la bordure du graphique
                      pointBackgroundColor: "white", // Couleur des points de données
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false, 
                    },
                  },
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    r: {
                      angleLines: {
                        display: true, // Affiche les lignes d'angle
                        color: "gray", // Couleur des lignes d'angle
                        lineWidth: 1, // Épaisseur des lignes d'angle
                      },
                      suggestedMin: 0, // Valeur minimale 
                      suggestedMax: 10, // Valeur maximale 
                      ticks: {
                        display: false, // Masquer les chiffres sur l'axe radial
                        beginAtZero: true, // Commencer l'axe à 0
                        backdropColor: "transparent", // Fond transparent pour les étiquettes des ticks
                      },
                      pointLabels: {
                        color: "white", // Change la couleur du texte des labels
                        padding: 20, // Espacement entre les légendes et le graphique
                        font: {
                          size: fontGraph, // Change la taille du texte des labels
                          weight: 700,
                        },
                      },
                    },
                  },
                  layout: {
                    padding: {
                      top: 0,
                      bottom: 0,
                      left: paddingGraphLeft,
                      right: paddingGraphRight,
                   },
                  },
                  elements: {
                    line: {
                      borderWidth: 1,
                    },
                  },
                  animations: {
                    tension: {
                      duration: 1000,
                      easing: "ease",
                      from: 1,
                      to: 0.8,
                      loop: true,
                    },
                  },
                }}
                
              />
            </div>

            <div className="chart polar">
              <h3>Qualities</h3>
              <PolarArea
                className="doughnut"
                data={{
                  labels: [
                    "Adaptable",
                    "Dynamic",
                    "Pugnacious",
                    "Team player",
                    "Positive",
                    "Determined",
                  ],
                  datasets: [
                    {
                      label: "Qualities",
                      data: [10, 10, 10, 10, 10, 10],
                      backgroundColor: [
                        "rgba(139, 0, 139, 0.8)",
                        "rgba(0, 100, 0, 0.8)",
                        "rgba(0, 0, 139, 0.7)",
                        "rgba(0, 189, 247, 0.8)",
                        "rgba(255, 228, 225, 0.8)",
                        "rgba(46, 46, 46, 0.8)",
                      ], // Couleur de remplissage du graphique
                      borderColor: "white", // Couleur de la bordure du graphique
                      pointBackgroundColor: "white", // Couleur des points de données
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: true, // Masque la légende
                      position: "bottom", // Positionne la légende à droite du graphique
                      labels: {
                        color: "white", // Couleur des légendes
                        usePointStyle: true, // Utilise le style du point pour les légendes
                        padding: 30, // Espacement entre les légendes et le graphique
                        font: {
                          size: 14, // Taille de la police des légendes
                        },
                      },
                    },
                  },

                  responsive: true,

                  maintainAspectRatio: false,

                  tooltip: {
                    enabled: false, // Désactive les tooltips pour masquer les valeurs des données
                  },

                  elements: {
                    line: {
                      backgroundColor: "white",
                    },
                    arc: {
                      hoverBackgroundColor: (context) => {
                        const backgroundColor = context.dataset.backgroundColor;
                        return backgroundColor;
                      },
                      hoverBorderColor: "white",
                      hoverBorderWidth: 2,
                      hoverOffset: 15, // Augmente la taille de l'arc au survol
                      borderWidth: 1,
                    },
                  },

                  scales: {
                    r: {
                      grid: {
                        color: "rgba(255, 255, 255, 0.5)", // Couleur des lignes de la grille (cercles)
                      },
                      ticks: {
                        display: false, // Masquer les ticks (valeurs des axes)
                      },
                      angleLines: {
                        color: "white", // Couleur des lignes radiales
                      },
                    },
                  },
                  hover: {
                    mode: "nearest",
                    intersect: true,
                    animationDuration: 400,
                  },
                  animation: {
                    duration: 1000,
                    easing: "easeInOutBounce",
                    animateRotate: true,
                    animateScale: true,
                  },
                }}
              />
            </div>
          </div>

          <div className="apropos__bandeau">
            <div>
              <h3>Technologies & Tools</h3>
            </div>

            <div className="bandeau__container">
              <div className="logos">
                <div className="logos__container">
                  <FontAwesomeIcon
                    className="logo"
                    icon={faHtml5}
                  ></FontAwesomeIcon>
                  <p>HTML5</p>
                </div>

                <div className="logos__container">
                  <FontAwesomeIcon
                    className="logo"
                    icon={faCss3Alt}
                  ></FontAwesomeIcon>
                  <p>CSS3</p>
                </div>

                <div className="logos__container">
                  <FontAwesomeIcon
                    className="logo"
                    icon={faSass}
                  ></FontAwesomeIcon>
                  <p>SASS</p>
                </div>

                <div className="logos__container">
                  <FontAwesomeIcon
                    className="logo"
                    icon={faJs}
                  ></FontAwesomeIcon>
                  <p>JavasScript</p>
                </div>

                <div className="logos__container">
                  <FontAwesomeIcon
                    className="logo"
                    icon={faReact}
                  ></FontAwesomeIcon>
                  <p>React</p>
                </div>

                <div className="logos__container">
                  <img src={LogoRedux} className="logo" alt="" />
                  <p>Redux</p>
                </div>

                <div className="logos__container">
                  <FontAwesomeIcon
                    className="logo"
                    icon={faGit}
                  ></FontAwesomeIcon>
                  <p>Git</p>
                </div>

                <div className="logos__container">
                  <FontAwesomeIcon
                    className="logo"
                    icon={faGithub}
                  ></FontAwesomeIcon>
                  <p>Github</p>
                </div>

                <div className="logos__container">
                  <FontAwesomeIcon
                    className="logo"
                    icon={faFigma}
                  ></FontAwesomeIcon>
                  <p>Figma</p>
                </div>

                <div className="logos__container">
                  <img src={LogoVSC} className="logo" alt="" />
                  <p>Visual Studio Code</p>
                </div>
              </div>
            </div>

            <div>
              <h3>Sales - Marketing & Productivity</h3>
            </div>

            <div className="bandeau__container">
              <div className="logos">
                <div className="logos__container">
                  <img src={LogoOffice} className="logo" alt="" />
                  <p>Office</p>
                </div>

                <div className="logos__container">
                  <img src={LogoSalesforce} className="logo" alt="" />
                  <p>Salesforce</p>
                </div>

                <div className="logos__container">
                  <img src={LogoSellsy} className="logo" alt="" />
                  <p>Sellsy</p>
                </div>

                <div className="logos__container">
                  <img src={LogoBrevo} className="logo" alt="" />
                  <p>Brevo</p>
                </div>

                <div className="logos__container">
                  <img src={LogoMonday} className="logo" alt="" />
                  <p>Monday</p>
                </div>

                <div className="logos__container">
                  <img src={LogoSlack} className="logo" alt="" />
                  <p>Slack</p>
                </div>

                <div className="logos__container">
                  <img src={LogoNotion} className="logo" alt="" />
                  <p>Notion</p>
                </div>

                <div className="logos__container">
                  <img src={LogoTrello} className="logo" alt="" />
                  <p>Trello</p>
                </div>

                <div className="logos__container">
                  <img src={LogoWordpress} className="logo" alt="" />
                  <p>Wordpress</p>
                </div>

                <div className="logos__container">
                  <img src={LogoGoogleAnalytics} className="logo" alt="" />
                  <p>Google Analytics</p>
                </div>

                <div className="logos__container">
                  <img src={LogoGoogleAdManager} className="logo" alt="" />
                  <p>Google Ad Manager</p>
                </div>

                <div className="logos__container">
                  <img src={LogoGoogleSearch} className="logo" alt="" />
                  <p>Google Search Console</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </section>
    </>
  );
}

//["Adaptable", "Dynamique", "Pugnace", "Team player", "Compétence2", "Compétence3"],
