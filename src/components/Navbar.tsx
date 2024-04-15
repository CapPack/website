import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import CapPackImage from "../assets/CapPack.png";

const Navbar: React.FC = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? "font-bold" : "hover:font-bold";
  };

  return (
    <div className={`flex w-full ${isMobile ? "flex-col" : "flex-row"}`}>
      {isMobile ? (
        <div className="w-full flex justify-between items-center">
          <button
            className="text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          <div>
            <img src={CapPackImage} alt="CapPack Logo" className="w-32 m-4" />
            <p>
              <span className="font-bold hover:underline">
                <a
                  href="https://cappack.page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CapPack
                </a>
              </span>
              {"  "}The CaptainSparklez Texture Pack
            </p>
          </div>
        </div>
      ) : (
        <div className="flex w-full text-2xl items-center">
          <img src={CapPackImage} alt="CapPack Logo" className="w-32 m-4" />
          <p>
            <span className="font-bold hover:underline">
              <a
                href="https://cappack.page"
                target="_blank"
                rel="noopener noreferrer"
              >
                CapPack
              </a>
            </span>
            {"  "}The CaptainSparklez Texture Pack
          </p>
        </div>
      )}

      {isMobile && isOpen && (
        <div className="w-full">
          <Link to="/" className={`text-center mx-2 ${isActive("/")}`}>
            Home
          </Link>
          <Link
            to="/downloads"
            className={`text-center mx-2 ${isActive("/downloads")}`}
          >
            Downloads
          </Link>
          <Link
            to="/version-compatibility"
            className={`text-center mx-2 ${isActive("/version-compatibility")}`}
          >
            Version Compatibility
          </Link>
          <Link
            to="/credits"
            className={`text-center mx-2 ${isActive("/credits")}`}
          >
            Credits
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
