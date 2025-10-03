"use client";
import React, { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
      <meta name="viewport" content="initial-scale=1.0" />
      <meta charSet="utf-8" />
      <title>About</title>

      <section className="about-container">
        <div className="mb-8">
          <img src="/Star.png" alt="main-photo-page" className="main-photo" />
        </div>
        <h1 className="about-text">Mikhail Y. Kolyakin</h1>
        <div>
          <p className="about-text">
            {" "}
            <img
              src="/logo.svg"
              alt="Logo"
              style={{ width: "30px", height: "30px", verticalAlign: "middle" }}
            />{" "}
            Junior React web developer working in fintech. Interested in game
            development, especially of grand strategy games, as well as
            urbanistics and architecture. Also, a <a href="/coshka.jpeg">🐈</a>{" "}
            lives with me.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
