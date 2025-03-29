import { useState } from "react";
import "./Nav_bar.css";
import Button from "@mui/material/Button";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

export function Top_Bar({ mode, setMode, sty }) {
  function Close() {
    if (window.innerWidth < 768) {
      document.getElementById("navbarNavAltMarkup").classList.remove("show");
    }
  }

  function toggleTheme(e) {
    e.preventDefault();
    setMode(mode === "light" ? "dark" : "light");
    Close();
  }

  return (
    <div className="nav-bar">
      <nav
        className={`navbar navbar-expand-md ${
          mode === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
        } fixed-top`}
      >
        <div id="navbar" className="container-fluid">
          <img className="logo" src="./img/logo1.png" alt="logo" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav" style={sty}>
              <a className="nav-link js-scroll-trigger" href="#home" onClick={Close}>
                HOME
              </a>
              <a className="nav-link js-scroll-trigger" href="#about" onClick={Close}>
                ABOUT
              </a>
              <a className="nav-link js-scroll-trigger" href="#service" onClick={Close}>
                SERVICE
              </a>
              <a className="nav-link js-scroll-trigger" href="#skill" onClick={Close}>
                SKILLS
              </a>
              <a className="nav-link js-scroll-trigger" href="#work" onClick={Close}>
                MY WORK
              </a>
              <a className="nav-link js-scroll-trigger" href="#contact" onClick={Close}>
                CONTACT
              </a>
              <a href="https://github.com/suryamsp/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github" style={sty}></i>
              </a>

              <Button id="theme" onClick={toggleTheme} color="inherit">
                {mode === "light" ? (
                  <Brightness7Icon sx={{ fontSize: "30px" }} />
                ) : (
                  <Brightness4Icon sx={{ fontSize: "30px" }} style={sty} />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}


