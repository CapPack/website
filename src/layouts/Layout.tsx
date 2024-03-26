import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="h-full">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
