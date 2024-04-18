import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen font-jost">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
