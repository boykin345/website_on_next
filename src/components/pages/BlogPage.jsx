"use client";
import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <>
      <title>Blog</title>
      <div className='content-container blog-container'>
        <div className='blog-element'>
          <span className='about-text'>September 10, 2025</span>
          <div className=' about-text'>
            <Link href='/blog/nginx_arm_problem' className='blog-link'>
              Nginx_ARM_Problem
            </Link>
            <span className='post-author'></span>
          </div>
        </div>
        <div className='blog-element'>
          <span className='about-text'>August 7, 2025</span>
          <div className='about-text'>
            <Link href='/blog/my_mac_config' className='blog-link' >
              My_Mac_Config
            </Link>
            <span className='post-author'></span>
          </div>
        </div>
        <div className='blog-element'>
          <span className='about-text'>August 2, 2025</span>
          <div className='about-text'>
            <Link
              href='https://github.com/boykin345/website_on_next'
              className='blog-link'
            >
              This_website
            </Link>
            <span className='post-author'></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
