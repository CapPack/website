import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isEmbedPage = location.pathname === "/version-compatibility" || location.pathname === "/credits";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className={`${isEmbedPage ? "h-full" : "flex-grow"}`}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
