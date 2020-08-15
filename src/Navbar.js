import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [showNav, setShowNav] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav__container ${showNav && "nav__container--fill"}`}>
      <img
        src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
        alt="netflix"
        className="nflx__logo"
      />
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="user"
        className="nflx__user"
      />
    </div>
  );
}

export default Navbar;
