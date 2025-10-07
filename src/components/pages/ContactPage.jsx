"use client";
import React from "react";
import ApiTime from "../ApiTime";
import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      <title>Contact</title>
      <section className="about-container-contact">
        <div>
          <h1 className="about-text">
            Email:{" "}
            <Link
              href="mailto:M.Koliakin@me.com"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              M.Koliakin@me.com
            </Link>
          </h1>
        </div>
        <div className="about-text">
          <h3>my local time</h3>
          <ApiTime></ApiTime>
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
          <img src="LinkedIn.png" alt="LinkedIn" className="icon spin-cw" />
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

export default ContactPage;
