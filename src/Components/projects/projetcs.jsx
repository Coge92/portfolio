import "./projects.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {

    

    return (

        <>
        <section className="section--projects" id="projects">

            <h2>IT Projects</h2>

            <div className="projects__container">

                <div className="arrow left">

                 <FontAwesomeIcon icon={faChevronLeft} />

                </div>

                <div className="central">

                    <div className="projet argentbank">

                    </div>

                    <div className="projet argentbank">

                    </div>

                    <div className="projet argentbank">

                    </div>


                </div>

                <div className="arrow right">

                 <FontAwesomeIcon icon={faChevronRight} />

                </div>


            </div>

        </section>


        </>
    )
}