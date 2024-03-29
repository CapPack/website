import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isEmbedPage = location.pathname === "/version-compatibility" || location.pathname === "/credits";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className={`flex-grow ${isEmbedPage ? "h-full" : ""}`}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
