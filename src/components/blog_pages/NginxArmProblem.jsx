"use client";
import React from "react";

function NginxARMProblem() {
  return (
    <>
      <title>Nginx ARM Problem</title>

      <div className='blog-container'>
        <h1 className='about-text'>Nginx Compatibility Issue</h1>
        <p className='about-text'>
          This issue comes from Apple implementing ARM chips in their somewhat
          new Macbooks. This issue is especially critical for all web developers
          working with big corporate projects (such as me) and I think this
          small <strong>symlink</strong> is going to help you.
        </p>
        <h1 className='about-text'>Just put it in your zsh:</h1>
        <div className='code-container'>
          <pre className='code-block'>
            {`ln -s /opt/homebrew/etc/nginx/nginx.conf /usr/local/etc/nginx/nginx.conf`}
          </pre>
        </div>
        <h1 className='about-text'>Or just use brew stow</h1>
      </div>
    </>
  );
}

export default NginxARMProblem;
