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
          <h3>my local time - YEKT (UTC+5)</h3>
          <ApiTime></ApiTime>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
