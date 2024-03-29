import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children, fullHeight }: { children: React.ReactNode; fullHeight?: boolean }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className={`flex-grow ${fullHeight ? 'h-full' : ''}`}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
