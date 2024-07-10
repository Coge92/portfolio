import "./aproposAnimBackground.css";
import "./apropos.css";

export default function AProposBackground() {
  return (
    <>
      <section className="section--apropos" id="Apropos">
        {/* className="base" is dedicated to animations */}
        <div className="base">
          <div className="section--apropos__container">
            <h2>A propos.</h2>
            <div className="apropos__profil">
              <img
                src="https://mehdihabibi.fr/PhotoMH.jpg"
                alt="Profil illustration"
              />

              <div>
                <h3>A propos de moi</h3>
                <p>mon blabla</p>
              </div>
            </div>
            <div className="apropos__graph"></div>
          </div>

          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </section>
    </>
  );
}
