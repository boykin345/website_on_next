import "@/app/globals.scss";
import Navbar from "@/components/common/Navbar";
import React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
