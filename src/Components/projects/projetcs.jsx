import "./projects.css";

import styled from "styled-components";
import { useState } from "react";

import ScreenArgentBank from "../../Assets/ArgentBank-HomePage.webp"
import ScreenEvasionVirtuelle from "../../Assets/EvasionVirtuelle-HomePage.webp"
import Screen724events from "../../Assets/724events-HomePage.webp"
import ScreenNinaCarducci from "../../Assets/NinaCarducci-HomePage.webp"
import ScreenCasa from "../../Assets/Kasa-HomePage.webp"
import ScreenSophieBluel from "../../Assets/SophieBluel-HomePage.webp"

import LogoWordpress from "../../Assets/wordpress-icon-1.svg"
import LogoRedux from "../../Assets/redux.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


const StyledDivProject = styled.div`
    background-color: rgba(149, 9, 82, 0.5);

    position: absolute;
    top: -210px;

    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 500px;
    height: 480px;
    border-radius: 10px;
    transition: left 1s;
    color: white;
    

    @media (max-width: 768px) {
        min-width: 200px;
        width: 200px;
        height: 200px;
        max-height: 200px;
    }
    
    & h5 {
    margin: 10px 0;
    font-size: 1.3em;
    }

    & .couverture {
    width: 500px;
    height: 240px;

        @media (max-width: 768px) {
        min-width: 200px;
        width: 200px;
        height: 200px;
        max-height: 200px;
        }
    }

    & p {
        
        @media (max-width: 768px) {
        text-align: center;
        padding-top: 50px;

        }
    }
`;


export default function Projects() {
  const [left, setLeft] = useState(0);

  function sliderLeft() {
    if ((left <= -535*5)) {
        setLeft(0);
      } else {
    setLeft(left - 535);
    console.log("clique gauche", left);
  }
    }

  function sliderRight() {
    if ((left === 0)) {
      setLeft(0);
    } else {
      setLeft(left + 535);
      console.log("clique droite", left);
    }
  }



  return (
    <>
      <section className="section--projects" id="projects">
        <h2>Personal Web Projects</h2>

        <div className="projects__container">
          <div className="arrow left" onClick={sliderRight} aria-label="Bouton gauche">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>

          <div className="central">
            <Link to={"/projects#argentbank"}>
              <StyledDivProject style={{ left: left }}>
                  <h3>Argent Bank</h3>
                  <img src={ScreenArgentBank} alt="Argent Bank" className="couverture" />
                  <p>Front-End of a Banking Application</p>
                  <div style={{display: "flex", gap: "15px",}}>
                      <FontAwesomeIcon className="logo" icon={faHtml5} alt="logo HTML5" style={{fontSize: "30px"}}></FontAwesomeIcon>
                      <FontAwesomeIcon className="logo" icon={faCss3Alt} alt="logo CSS3" style={{fontSize: "30px"}}></FontAwesomeIcon>
                      <FontAwesomeIcon className="logo" icon={faJs} alt="logo Javascript" style={{fontSize: "30px"}}></FontAwesomeIcon>
                      <FontAwesomeIcon className="logo" icon={faReact} alt="logo React" style={{fontSize: "30px"}}></FontAwesomeIcon>
                      <img src={LogoRedux} className="logo" alt="Logo Redux" style={{width: "28px"}} />
                  </div>
              </StyledDivProject>
            </Link>

            <Link to={"/projects#evasionvirtuelle"}>
              <StyledDivProject style={{ left: left + 535 }}>
                  <h3>Evasion Virtuelle</h3>
                  <img src={ScreenEvasionVirtuelle} alt="Evasion Virtuelle" className="couverture" />
                  <p>Creation of a showcase website</p>
                  <div style={{display: "flex", gap: "15px",}}>
                      <img src={LogoWordpress} className="logo" alt="Logo Wordpress" style={{width: "28px"}} />
                  </div>
              </StyledDivProject>
            </Link>

            <Link to={"/projects#events724"}>
              <StyledDivProject style={{ left: left + 535*2}}>
                  <h3>724 Events</h3>
                  <img src={Screen724events} alt="724 Events" className="couverture" />
                  <p>Debugging a React website</p>
                  <div style={{display: "flex", gap: "15px",}}>
                      <FontAwesomeIcon className="logo" icon={faHtml5} alt="logo HTML5" style={{fontSize: "30px"}}></FontAwesomeIcon>
                      <FontAwesomeIcon className="logo" icon={faCss3Alt} alt="logo CSS3" style={{fontSize: "30px"}}></FontAwesomeIcon>
                      <FontAwesomeIcon className="logo" icon={faJs} alt="logo Javascript" style={{fontSize: "30px"}}></FontAwesomeIcon>
                      <FontAwesomeIcon className="logo" icon={faReact} alt="logo React" style={{fontSize: "30px"}}></FontAwesomeIcon>
                  </div>
              </StyledDivProject>
            </Link>

            <Link to={"/projects#ninacarducci"}>
              <StyledDivProject style={{ left: left + 535*3}}>
                  <h3>Nina Carducci</h3>
                  <img src={ScreenNinaCarducci} alt="Nina Carducci" className="couverture" />
                  <p>SEO Optimisation</p>
                  <div style={{display: "flex", gap: "15px",}}>
                      <FontAwesomeIcon className="logo" icon={faHtml5} alt="logo HTML5" style={{fontSize: "30px"}}></FontAwesomeIcon>
                      <FontAwesomeIcon className="logo" icon={faJs} alt="logo Javascript" style={{fontSize: "30px"}}></FontAwesomeIcon>
                  </div>
              </StyledDivProject>
            </Link>

            <StyledDivProject style={{ left: left + 535*4}}>
                <h3>Kasa</h3>
                <img src={ScreenCasa} alt="Kasa" className="couverture" />
                <p>Hosting platform with React</p>
                <div style={{display: "flex", gap: "15px",}}>
                    <FontAwesomeIcon className="logo" icon={faHtml5} alt="logo HTML5" style={{fontSize: "30px"}}></FontAwesomeIcon>
                    <FontAwesomeIcon className="logo" icon={faCss3Alt} alt="logo CSS3" style={{fontSize: "30px"}}></FontAwesomeIcon>
                    <FontAwesomeIcon className="logo" icon={faJs} alt="logo Javascript" style={{fontSize: "30px"}}></FontAwesomeIcon>
                    <FontAwesomeIcon className="logo" icon={faReact} alt="logo React" style={{fontSize: "30px"}}></FontAwesomeIcon>
                </div>
            </StyledDivProject>

            <StyledDivProject style={{ left: left + 535*5}}>
                <h3>Sophie Bluel</h3>
                <img src={ScreenSophieBluel} alt="Sophie Bluel" className="couverture" />
                <p>Portfolio with JavaScript</p>
                <div style={{display: "flex", gap: "15px",}}>
                    <FontAwesomeIcon className="logo" icon={faHtml5} alt="logo HTML5" style={{fontSize: "30px"}}></FontAwesomeIcon>
                    <FontAwesomeIcon className="logo" icon={faCss3Alt} alt="logo CSS3" style={{fontSize: "30px"}}></FontAwesomeIcon>
                    <FontAwesomeIcon className="logo" icon={faJs} alt="logo Javascript" style={{fontSize: "30px"}}></FontAwesomeIcon>
                </div>
            </StyledDivProject>

           </div>

          <div className="arrow right">
            <FontAwesomeIcon icon={faChevronRight} onClick={sliderLeft} aria-label="Bouton droit" />
          </div>
        </div>
      </section>
    </>
  );
}
