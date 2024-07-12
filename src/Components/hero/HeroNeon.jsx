import { Link } from "react-router-dom";
import "../../Components/hero/heroNeon.css";

export default function HeroNeon(props) {

  return (
    
    <>
      <section className="section__hero">
      <h2>{props.title}</h2>
      <div id="left" className="barre"></div>
      <div id="right" className="barre"></div>
      {props.title === "404" ? <Link to={"/"} style={{color: "black", backgroundColor: "white", textDecoration: "none"}}>Back to HomePage</Link> : ""}

      </section>
    </>
   
  )
}
