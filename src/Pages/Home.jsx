import "./home.css";
import HeroNeon from "../Components/hero/HeroNeon";
import APropos from "../Components/apropos/APropos.jsx"
import Menu from "../Components/menu/Menu.jsx";
import Parcours from "../Components/parcours/Parcours.jsx";


export function Home() {

  return (
    <>
        <Menu></Menu>

        <div id="main" className="">

            <h1>Mehdi Habibi</h1>
            <HeroNeon></HeroNeon>
            <APropos></APropos>
            <Parcours></Parcours>
     

            <section
            className="section"
            id="space"
            style={{
                backgroundImage: "url(https://assets.codepen.io/214624/vision.jpg)",
            }}
            >
            <h2>Space.</h2>
            </section>

            <section
            className="section"
            id="future"
            style={{
                backgroundImage: "url(https://assets.codepen.io/214624/vision.jpg)",
            }}
            >
            <h2>Future.</h2>
            </section>
      </div>
    </>
  );
}
