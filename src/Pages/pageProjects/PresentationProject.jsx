
import "./PresentationProject.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faSass, faJs, faReact, faFigma, faGithub, faGit } from "@fortawesome/free-brands-svg-icons";

import LogoWordpress from "../../Assets/wordpress-icon-1.svg"
import LogoRedux from "../../Assets/redux.svg"

import { faLink } from "@fortawesome/free-solid-svg-icons";

export function PresentationProject(props) {

    return (

        <>
        <section className="presentation__projet" id={props.id}>
            <h3>{props.h3}</h3>
            <div className="container">
                <img src={props.imgsource} alt={props.h3} />
                <h5>{props.h5}</h5>
                <div className="container--content">
                    <div className="container--text">
                        
                        {props.children}
                    </div>
                    <div className="container--right">
                        <div className="logo__container">
                            {props.html ? <FontAwesomeIcon icon={faHtml5} className="logo"></FontAwesomeIcon> : ""}
                            {props.css ?  <FontAwesomeIcon icon={faCss3Alt} className="logo"></FontAwesomeIcon> : ""}
                            {props.sass ? <FontAwesomeIcon icon={faSass} className="logo"></FontAwesomeIcon> : ""}
                            {props.js ? <FontAwesomeIcon icon={faJs} className="logo"></FontAwesomeIcon> : ""}
                            {props.react ? <FontAwesomeIcon icon={faReact} className="logo"></FontAwesomeIcon> : ""}
                            {props.redux ? <img src={LogoRedux} className="logo" alt="Redux"></img> : ""}
                            {props.wordpress ? <img src={LogoWordpress} className="logo" alt="Wordpress"></img> : ""}

                        </div>
                        

                        {props.githublink &&     
                            <a href={props.githublink}>                        
                                <div className="githubLink">
                                
                                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                                    <p>Repository Link</p>
                    
                                </div>
                            </a>
                        }

                        {props.link &&    
                            <a href={props.link}>                           
                                <div className="githubLink">
                                
                                    <FontAwesomeIcon icon={faLink} />
                                    <p>Web Link</p>
                    
                                </div>
                            </a>
                        }
                        
                    </div>
                </div>
                <div className="separator"></div>
            </div>
            
        </section>
        
        </>
    )
}