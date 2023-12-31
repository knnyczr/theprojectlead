import React from "react";
import Navbar from "./nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen p-10 min-h-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
