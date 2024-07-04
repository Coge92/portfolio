import "./home.css";
import HeroNeon from "../Components/hero/HeroNeon";
import AProposBackground from "../Components/apropos/APropos.jsx"
import Menu from "../Components/menu/Menu.jsx";


export function Home() {

  return (
    <>
        <Menu></Menu>

        <div id="main" className="">

            <h1>Mehdi Habibi</h1>

            <section id="hero-background" className="">
                <HeroNeon></HeroNeon>
            </section>

            <section className="section" id="Apropos">
                <AProposBackground></AProposBackground>
            </section>

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
