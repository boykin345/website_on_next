"use client";
import React from "react";
import ApiTime from "../ApiTime";
import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      <title>Contact</title>
      <section className="about-container-contact">
        <h1 className="about-text">Contact Me</h1>
        <div className="about-text">
          <h2>Email</h2>
          <p>
            <Link
              href="mailto:M.Koliakin@me.com"
              className="email-link"
            >
              M.Koliakin@me.com
            </Link>
          </p>
        </div>
        <div className="about-text">
          <h2>My Local Time</h2>
          <p className="timezone-info">YEKT (UTC+5)</p>
          <div className="time-display">
            <ApiTime />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
