
import "./footer.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
 
export function Footer() {

    return (

        <>

        <section className="section__footer">

            <div>
                <Link to={"/mentionslegales"}>Mentions légales</Link>
            </div>
            <div id="footerIcones">
                
                <a href="https://www.linkedin.com/in/mehdi-habibi/" aria-label="Découvrez le profil Linked'In de Mehdi Habibi"><FontAwesomeIcon icon={faLinkedin} /> </a>
                <a href="mailto:contact@mehdihabibi.fr" aria-label="Envoyer un mail à Mehdi Habibi"> <FontAwesomeIcon icon={faEnvelope} /> </a>
                 
               
            </div>
            <div>
                <a href="wwww.mehdihabibi.fr">Mehdi Habibi.fr</a>
            </div>


        </section>
        
        </>
    )
}