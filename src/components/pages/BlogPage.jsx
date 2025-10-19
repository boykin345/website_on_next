"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const BlogPage = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
      <title>Blog</title>
      <section className="blog-container">
        <div className="post-row">
          <span className="post-date about-text">September 10, 2025</span>
          <div className="post-info about-text">
            <Link href="/blog/nginx_arm_problem" className="post-link">
              Nginx_ARM_Problem
            </Link>
            <span className="post-author"></span>
          </div>
        </div>
        <div className="post-row">
          <span className="post-date about-text">August 7, 2025</span>
          <div className="post-info about-text">
            <Link href="/blog/my_mac_config" className="post-link">
              My_Mac_Config
            </Link>
            <span className="post-author"></span>
          </div>
        </div>
        <div className="post-row">
          <span className="post-date about-text">August 2, 2025</span>
          <div className="post-info about-text">
            <Link
              href="https://github.com/boykin345/website_on_next"
              className="post-link"
            >
              This_website
            </Link>
            <span className="post-author"></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
