import React, { useState } from "react";

export function Navigation() {
      const [isNavOpen, setIsNavOpen] = useState(false);

      const toggleNav = () => {
            setIsNavOpen(!isNavOpen);
      };

      return (
            <>
                  <div id="navigation" className={isNavOpen ? "active" : ""}>
                        <nav>
                              <ul onClick={toggleNav}>
                                    <li>
                                          <a href="#home">Accueil</a>
                                    </li>
                                    <li>
                                          <a href="#clips">Dernier clip</a>
                                    </li>
                                    <li>
                                          <a href="#stream">Streaming</a>
                                    </li>
                                    <li>
                                          <a href="#show">Concerts</a>
                                    </li>
                                    <li>
                                          <a href="#shop">Merch</a>
                                    </li>
                                    <li>
                                          <a href="#contact">Contact</a>
                                    </li>
                              </ul>
                        </nav>
                  </div>
                  <div
                        className={`nav-toggler ${isNavOpen ? "toggle" : ""}`}
                        onClick={toggleNav}>
                        <span className="line l1"></span>
                        <span className="line l2"></span>
                        <span className="line l3"></span>
                  </div>
            </>
      );
}
