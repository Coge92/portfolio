import "./home.css";
import HeroNeon from "../Components/hero/HeroNeon";
import APropos from "../Components/apropos/APropos.jsx"
import Menu from "../Components/menu/Menu.jsx";
import Parcours from "../Components/parcours/Parcours.jsx";
import Projects from "../Components/projects/projetcs.jsx";


export function Home() {

  return (
    <>
        <Menu></Menu>

        <div id="main" className="">

            <h1>Mehdi Habibi</h1>
            <HeroNeon></HeroNeon>
            <APropos></APropos>
            <Parcours></Parcours>
            <Projects></Projects>
        </div>
    </>
  );
}
