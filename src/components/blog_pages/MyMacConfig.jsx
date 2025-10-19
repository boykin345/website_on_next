"use client";
import React from "react";
import Head from "next/head";

function MyMacConfig() {
  return (
    <>
      <Head>My Mac Config</Head>

      <section className="blog-container">
        <h1 className="about-text">My Mac Config</h1>
        <div className="code-container">
          <pre className="code-block">
            {`
brew update

brew install \

\n  apr \
\n  apr-util \a
\n   asciinema \
\n   brotli \
\n   c-ares \
\n   ca-certificates \
\n   gettext \
\n   icu4c@77 \
\n   liblinear \
\n   libnghttp2 \
\n   libssh2 \
\n   libunistring \
\n   libuv \
\n   lua \
\n   lz4 \
\n   mpdecimal \
\n   nmap \
\n   node \
\n   nvm \
\n   openssl@3 \
\n   pcre2 \
\n   python@3.13 \
\n   readline \
\n   sqlite \
\n   subversion \
\n   utf8proc \
\n   xz

brew install --cask \

\n  audacity \
\n  betterdisplay \
\n  linearmouse \
\n  alt-tab \
\n  raycast \
\n  adguard \
\n  docker \

echo "All done!"
`}
          </pre>
        </div>
      </section>
    </>
  );
}

export default MyMacConfig;
