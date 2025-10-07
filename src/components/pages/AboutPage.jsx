"use client";
import Image from "next/image";
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
      <title>About</title>

      <section className="about-container">
        <div className="mb-8">
          <Image
            src="/favicon.ico"
            alt="main-photo-page"
            className="main-photo"
            width={200}
            height={200}
          />
        </div>
        <h1 className="about-text">Mikhail Y. Kolyakin</h1>
        <div>
          <p className="about-text">
            {" "}
            Junior
            <Image
              src="/logo.svg"
              alt="react-logo"
              width={32}
              height={32}
              className="inline-block align-middle"
            />
            React web developer working in fintech. Interested in game
            development, especially of grand strategy games, as well as
            urbanistics and architecture. Also, a <a href="/coshka.jpeg">🐈</a>
            lives with me.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
