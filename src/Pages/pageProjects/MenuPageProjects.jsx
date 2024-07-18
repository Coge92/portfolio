import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MenuProjects() {
    
    useEffect(() => {
        const header = document.getElementById("myHeader");
        const page = document.getElementById("main");
        const openMenuButton = document.getElementById("openmenu");
    
        if (header && openMenuButton) {
          console.log("ok");
    
          const handleMenuClick = () => {
            header.classList.remove("sticky");
            page.classList.add("menuopen");
    
            console.log("==> handleMenuClick  ");
          };
    
          const handleLinkClick = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
            }
    
            console.log("==> handleLinkClick  ");
          };
    
          openMenuButton.addEventListener("click", handleMenuClick);
          const links = document.querySelectorAll('a[href^="#"]');
          links.forEach((link) => link.addEventListener("click", handleLinkClick));
    
          document.addEventListener("click", function (e) {
            if (!openMenuButton.contains(e.target)) {
              header.classList.add("sticky");
              page.classList.remove("menuopen");
    
              console.log("test click en dehors");
            }
          });
    
          document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" || e.key === "Esc") {
              header.classList.add("sticky");
              page.classList.remove("menuopen");
    
              console.log("test press Echape");
            }
          });
    
          if (window.innerWidth >= 768) {
            header.classList.remove("sticky");
    
            const handleScroll = () => {
              page.classList.remove("menuopen");
              if (window.scrollY >= 100) {
                header.classList.add("sticky");
              } else {
                header.classList.remove("sticky");
              }
              console.log("==> handleScroll  ");
            };
    
            window.addEventListener("scroll", handleScroll);
    
            return () => {
              window.removeEventListener("scroll", handleScroll);
            };
          } else {
            header.classList.add("sticky");
          }
    
          return () => {
            openMenuButton.removeEventListener("click", handleMenuClick);
            links.forEach((link) =>
              link.removeEventListener("click", handleLinkClick)
            );
          };
        }
      }, []);

    return <>

    <header id="myHeader" className="sticky">
        <nav>
            <Link to={"/"}>Home</Link>
            <a href={"/projects#argentbank"}>Argent Bank</a>
            <a href={"/projects#evasionvirtuelle"}>Evasion Virtuelle</a>
            <a href={"/projects#events724"}>724 Events</a>
            <a href={"/projects#ninacarducci"}>Nina Carducci</a>
          <button id="openmenu" aria-label="Menu">
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>
 
    </>
}