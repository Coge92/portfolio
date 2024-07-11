import "./aproposAnimBackground.css";
import "./apropos.css";
import { Radar, PolarArea} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faSass, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import logosvg from "../../Assets/redux.svg"



export default function APropos() {
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
                <h3>A propos de moi</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptates quibusdam cumque, alias saepe aspernatur reprehenderit ratione dolore minima vero. Accusantium quisquam vel molestiae? Ullam suscipit dicta labore molestias nemo.</p>
              </div>
            </div>
          </div>
          <div className="apropos__graph">
              <div className="chart radar">
              <h3>Skills</h3>
                <Radar
                  className="radar"
                  data={{
                    labels: ["Business Development", "Projet Management", "Marketing", "Communication", "Sales representation", "Coordination"],
                    datasets: [
                      {
                        label: "Qualities",
                        data: [10, 10, 10, 10, 10, 10],
                        backgroundColor: ' rgba(2, 2, 2, 0.1) ', // Couleur de remplissage du graphique
                        borderColor: 'white', // Couleur de la bordure du graphique
                        pointBackgroundColor: 'white', // Couleur des points de données
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false // Masque la légende
                      }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      r: {
                        angleLines: {
                          display: true, // Affiche les lignes d'angle
                          color: 'gray', // Couleur des lignes d'angle
                          lineWidth: 1 // Épaisseur des lignes d'angle
                        },
                        suggestedMin: 0, // Valeur minimale suggérée
                        suggestedMax: 10, // Valeur maximale suggérée
                        ticks: {
                          display: false, // Masquer les chiffres sur l'axe radial
                          beginAtZero: true, // Commencer l'axe à 0
                          backdropColor: 'transparent' // Fond transparent pour les étiquettes des ticks
                        },
                        pointLabels: {
                          color: 'white', // Change la couleur du texte des labels
                          padding: 20, // Espacement entre les légendes et le graphique
                          font: {
                            size: 18, // Change la taille du texte des labels
                            weight: 700
                          }
                        },
                        }
                    },
                    elements: {
                      line: {
                        borderWidth: 1
                      }
                    },
                    animations: {
                      tension: {
                        duration: 1000,
                        easing: 'ease',
                        from: 1,
                        to: 0.8,
                        loop: true
                      }
                    },
                  }}
                />
              </div>

              <div className="chart polar">
                <h3>Qualities</h3>
                <PolarArea
                  className="doughnut"
                  data={{
                    labels: ["Adaptable", "Dynamique", "Pugnace", "Team player", "Positif", "Determiné"],
                    datasets: [
                      {
                        label: "Qualities",
                        data: [10, 10, 10, 10, 10, 10],
                        backgroundColor: ["rgba(139, 0, 139, 0.8)","rgba(0, 100, 0, 0.8)","rgba(0, 0, 139, 0.7)","rgba(0, 189, 247, 0.8)","rgba(255, 228, 225, 0.8)","rgba(46, 46, 46, 0.8)"], // Couleur de remplissage du graphique
                        borderColor: "white", // Couleur de la bordure du graphique
                        pointBackgroundColor: 'white', // Couleur des points de données

                      },
                    ]
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: true, // Masque la légende
                        position: 'bottom', // Positionne la légende à droite du graphique
                        labels: {
                          color: 'white', // Couleur des légendes
                          usePointStyle: true, // Utilise le style du point pour les légendes
                          padding: 30, // Espacement entre les légendes et le graphique
                          font: {
                            size: 14 // Taille de la police des légendes
                          }
                        }
                      }
                    },

                    responsive: true,

                    maintainAspectRatio: false,

                    tooltip: {
                      enabled: false // Désactive les tooltips pour masquer les valeurs des données
                    },
                    
                    elements: {
                      line: {
                        backgroundColor: "white",
                      }
                    },
                    
                    scales: {
                      r: {
                        grid: {
                          color: 'rgba(255, 255, 255, 0.5)' // Couleur des lignes de la grille (cercles)
                        },
                        ticks: {
                          display: false // Masquer les ticks (valeurs des axes)
                        },
                        angleLines: {
                          color: 'white' // Couleur des lignes radiales
                        },
                      }
                    },
                    hover: {
                      mode: 'nearest',
                      intersect: true,
                      animationDuration: 400,
                    },
                    animation: {
                      duration: 1000,
                      easing: 'easeInOutBounce',
                      animateRotate: true,
                      animateScale: true,
                    },
                    elements: {
                      arc: {
                        hoverBackgroundColor: (context) => {
                          const backgroundColor = context.dataset.backgroundColor;
                          return backgroundColor;
                        },
                        hoverBorderColor: 'white',
                        hoverBorderWidth: 2,
                        hoverOffset: 15, // Augmente la taille de l'arc au survol
                        borderWidth: 1,
                      }
                    }
                  }}
                />
              </div>
            </div>

          <div className="apropos__bandeau">
            <div>
              <h3>Technologies</h3>
            </div>
            
            <div className="bandeau__container">

              <div className="logos">
                <FontAwesomeIcon className="logo" icon={faHtml5} />
                <FontAwesomeIcon className="logo" icon={faCss3Alt} />
                <FontAwesomeIcon className="logo" icon={faSass} />
                <FontAwesomeIcon className="logo" icon={faJs} />
                <FontAwesomeIcon className="logo" icon={faReact} />
                <img src={logosvg} className="logo" alt="" />
              </div>

              <div className="logos">
                <FontAwesomeIcon className="logo" icon={faHtml5} />
                <FontAwesomeIcon className="logo" icon={faCss3Alt} />
                <FontAwesomeIcon className="logo" icon={faSass} />
                <FontAwesomeIcon className="logo" icon={faJs} />
                <FontAwesomeIcon className="logo" icon={faReact} />
              </div>

              <div className="logos">
                <FontAwesomeIcon className="logo" icon={faHtml5} />
                <FontAwesomeIcon className="logo" icon={faCss3Alt} />
                <FontAwesomeIcon className="logo" icon={faSass} />
                <FontAwesomeIcon className="logo" icon={faJs} />
                <FontAwesomeIcon className="logo" icon={faReact} />
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