import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface LayoutProps {
  fullHeight?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, fullHeight = false }) => {
  return (
    <div className={`flex flex-col min-h-screen ${fullHeight ? 'h-full' : 'flex-grow'}`}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
