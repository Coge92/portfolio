import "./projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";
import ScreenArgentBank from "../../Assets/ArgentBank-HomePage.webp"
import ScreenEvasionVirtuelle from "../../Assets/EvasionVirtuelle-HomePage.webp"
import LogoWordpress from "../../Assets/wordpress-icon-1.svg"

import { faHtml5, faCss3Alt, faSass, faJs, faReact, faFigma, faGithub, faGit } from "@fortawesome/free-brands-svg-icons";

import LogoRedux from "../../Assets/redux.svg"

const StyledDivProject = styled.div`
    background-color: rgba(149, 9, 82, 0.5);

    position: absolute;
    top: -200px;

    display: flex ;
    flex-direction: column;
    align-items: center;

    min-width: 500px;
    height: 400px;
    border-radius: 10px;
    transition: left 1s;

    & h5 {
    margin: 10px 0;
    font-size: 1.3em;
    }

    & img {

    width: 500px;

    }


`;


export default function Projects() {
  const [left, setLeft] = useState(0);

  function sliderLeft() {
    setLeft(left - 535);
    console.log("clique gauche", left);
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
          <div className="arrow left" onClick={sliderRight}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>

          <div className="central">
            <StyledDivProject style={{ left: left }}>
                <h5>Argent Bank</h5>
                <img src={ScreenArgentBank} alt="" />
                <p>Front-end d'une application bancaire</p>
                <div style={{display: "flex", gap: "15px",}}>
                    <FontAwesomeIcon className="logo" icon={faHtml5} style={{fontSize: "30px"}}></FontAwesomeIcon>
                    <FontAwesomeIcon className="logo" icon={faCss3Alt} style={{fontSize: "30px"}}></FontAwesomeIcon>
                    <FontAwesomeIcon className="logo" icon={faJs} style={{fontSize: "30px"}}></FontAwesomeIcon>
                    <FontAwesomeIcon className="logo" icon={faReact} style={{fontSize: "30px"}}></FontAwesomeIcon>
                    <img src={LogoRedux} className="logo" alt="" style={{width: "28px"}} />
                </div>
            </StyledDivProject>

            <StyledDivProject style={{ left: left + 535 }}>
                <h5>Evasion Virtuelle</h5>
                <img src={ScreenEvasionVirtuelle} alt="" />
                <p>Création d'un site vitrine</p>
                <div style={{display: "flex", gap: "15px",}}>
                    <img src={LogoWordpress} className="logo" alt="" style={{width: "28px"}} />
                </div>



            </StyledDivProject>
            <StyledDivProject style={{ left: left + 535 * 2 }}></StyledDivProject>
            <StyledDivProject style={{ left: left + 535 * 3 }}></StyledDivProject>
            <StyledDivProject style={{ left: left + 535 * 4 }}></StyledDivProject>
           </div>

          <div className="arrow right">
            <FontAwesomeIcon icon={faChevronRight} onClick={sliderLeft} />
          </div>
        </div>
      </section>
    </>
  );
}
