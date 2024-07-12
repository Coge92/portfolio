
import "./footer.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
 
export function Footer() {

    return (

        <>

        <section className="section__footer">

            <div>
                <p>Mentions légales</p>
            </div>
            <div id="footerIcones">
                
                <a href="wwww.mehdihabibi.fr"><FontAwesomeIcon icon={faLinkedin} /> </a>
                <a href="mailto:contact@mehdihabibi.fr"> <FontAwesomeIcon icon={faEnvelope} /> </a>
                 
               
            </div>
            <div>
                <a href="wwww.mehdihabibi.fr">Mehdi Habibi.fr</a>
            </div>


        </section>
        
        </>
    )
}