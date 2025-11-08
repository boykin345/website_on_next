"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <title>About</title>

      <section className="about-container">
        <div>
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
            Junior{" "}
            <Image
              src="/logo.svg"
              alt="react-logo"
              width={32}
              height={32}
              style={{ verticalAlign: "text-bottom", display: "inline-block" }}
            />{" "}
            React web developer working in fintech. Interested in game
            development, especially of grand strategy games, as well as
            urbanistics and architecture. Also, a <a href="/coshka.jpeg">🐈</a> {" "}
            lives with me.
          </p>
        </div>
      </section>
      <div className="projects-container">
        <Link
          href="https://soundcloud.com/user-735227306"
          target="_blank"
          rel="noopener noreferrer"
          title="SoundCloud"
        >
          <img
            src="/SoundCloud.png"
            alt="SoundCloud"
            className="icon spin-ccw"
          />
        </Link>
        <Link
          href="https://open.spotify.com/user/31lpevsqaz6ftqu23sk2vddr3pdq?si=e4b3c22b1a0147e7"
          target="_blank"
          rel="noopener noreferrer"
          title="Spotify"
        >
          <img src="/Spotify.png" alt="Spotify" className="icon spin-cw" />
        </Link>
        <Link
          href="https://steamcommunity.com/id/juzzyboykin"
          target="_blank"
          rel="noopener noreferrer"
          title="Steam"
        >
          <img src="/Steam.png" alt="Steam" className="icon spin-ccw" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/mikhail-kolyakin-946734259/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <img src="/LinkedIn.png" alt="LinkedIn" className="icon spin-cw" />
        </Link>
        <Link
          href="https://github.com/boykin345"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <img
            src="/github.png"
            alt="GitHub"
            className="icon spin-ccw icon-large"
          />
        </Link>
        <Link
          href="https://x.com/BoyKin345"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <img src="/Twitter.png" alt="Twitter" className="icon spin-cw" />
        </Link>
        <Link
          href="https://www.reddit.com/user/Substantial-Purple60/"
          target="_blank"
          rel="noopener noreferrer"
          title="Reddit"
        >
          <img src="/Reddit.png" alt="Reddit" className="icon spin-ccw" />
        </Link>
      </div>
    </>
  );
};

export default AboutPage;
