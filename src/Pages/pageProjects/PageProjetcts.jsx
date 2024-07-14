import { Footer } from "../../Components/apropos/footer/footer";

import HeroNeon from "../../Components/hero/HeroNeon";
import MenuProjects from "./MenuPageProjects";
import { PresentationProject } from "./PresentationProject";

import ScreenArgentBank from "../../Assets/ArgentBank-HomePage.webp";
import ScreenEvasionVirtuelle from "../../Assets/EvasionVirtuelle-HomePage.webp";
import Screen724events from "../../Assets/724events-HomePage.webp";
import ScreenNinaCarducci from "../../Assets/NinaCarducci-HomePage.webp";
import ScreenCasa from "../../Assets/Kasa-HomePage.webp";
import ScreenSophieBluel from "../../Assets/SophieBluel-HomePage.webp";
import { useEffect } from "react";

export function PageProjects() {
  useEffect(() => {
    // Vérifier s'il y a un hash dans l'URL
    const hash = window.location.hash;
    if (hash) {
      // Trouver l'élément correspondant au hash
      const element = document.querySelector(hash);
      if (element) {
        // Faire défiler jusqu'à cet élément
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);


  return (
    <>
      <MenuProjects></MenuProjects>
      <div id="main" className="">
        <h1>Mehdi Habibi</h1>
        <HeroNeon title="Projects"></HeroNeon>

        <PresentationProject
          id="argentbank"
          h3="Argent Bank"
          imgsource={ScreenArgentBank}
          h5="Developpement d'une application web avec React & Redux"
          html
          css
          sass
          js
          react
          redux
          githublink="https://github.com/Coge92/ArgentBank-Front"
        >
            <p>
            Objectif : Développer le front-end d’une application bancaire en utilisant React et Redux pour créer une expérience utilisateur dynamique et réactive. <br />
                <br />
                Intégration du front-end avec le back-end via des appels API (REST). <br />
                <br />
                Création d'un tableau de bord complet et responsive pour les utilisateurs. <br />
                <br />
                Redux utilisé pour gérer les données de l'application pour maintenir un état global à travers l'application. <br />
                <br />
                Définition des points d'accès de l'API avec Swagger. <br />
                <br />
                Utilisation de Node.js pour exécuter le code JavaScript côté serveur
            </p>
        </PresentationProject>

        <PresentationProject
          id="evasionvirtuelle"
          h3="Evasion Virtuelle"
          imgsource={ScreenEvasionVirtuelle}
          h5="Developpement d'un site web avec Wordpress"
          html
          css
          wordpress
          link="https://evasionvirtuelle.fr/"
        >
            <p>
            Objectif : Créer un site web via le CMS Wordpress pour développer une activité commerciale <br />
                <br />
                Installation et configuration du CMS sur le domaine www.evasionvirtuelle.fr<br />
                <br />
                Ajout et parametrage d'un template attrayant pour developper une activité commerciale personnelle <br />
                <br />
                Modifications des mises en forme initiale du template (CSS) <br />
                <br />
            </p>
        </PresentationProject>

        <PresentationProject
          id="events724"
          h3="724 Events"
          imgsource={Screen724events}
          h5="Debugger un site web React"
          html
          css
          sass
          js
          react
          githublink="https://github.com/Coge92/724events"
        >
            <p>
            Objectif : Débugger et finaliser le développement d'un site one-page. <br />
            <br />
            Utilisation de Chrome DevTools pour examiner, identifier et comprendre les problèmes et bugs signalés. <br />
            <br />
            Resolution des bugs en utilisant React Developer Tools. <br />
            <br /> 
            Réalisation d'un "cahier de recettes" avec l'ensemble des scénari pour que l'App soit fonctionnelle.
            </p>

        </PresentationProject>

        <PresentationProject
          id="ninacarducci"
          h3="Nina Carducci"
          imgsource={ScreenNinaCarducci}
          h5="Optimisation SEO"
          text="Lorem Ipsum rgqet ggeth thze thz thzrt  hzthztehaze t hzthzrth zrthkt ke rterfef retgp  rthkirot ergpe thp ie pthpe thpe thpetppe"
          html
          js
          githublink="https://github.com/Coge92/NinaCarducci"
        >
        <p>
            Objectif : Optimiser le référencement d’un site, en améliorant sa performance et son accessibilité. <br />
            <br />
            Audit de référencement, d'accessibilité et de performance. Identification des problèmes de chargement et de référencement. <br />
            <br />
            Recommandations pour améliorer la vitesse de chargement, la structure du code et le référencement.  <br />
            <br /> 
            Mise en application des recommandations en modifiant le code du site. <br />
            <br />
            Utilisation d'outils tels que Lighthouse et Wave pour analyser les performances de référencement, d'accessibilité et de chargement <br />
            <br />

        </p>
        </PresentationProject>

        <Footer></Footer>
      </div>
    </>
  );
}
