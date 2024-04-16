import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import CapPackImage from "../assets/CapPack.png";

const Navbar: React.FC = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: "(max-width: 1028px)" });
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? "font-bold" : "hover:font-bold";
  };

  return (
    <div
      className={`flex font-quicksand ${isMobile ? "flex-col" : "flex-row"} w-full`}
    >
      <div
        className={`flex w-full items-center text-2xl ${isMobile ? "bg-gray-200 justify-between" : ""}`}
      >
        <div className="flex items-center text-2xl mr-6">
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
            <p>The CaptainSparklez Texture Pack</p>
          </p>
        </div>
        {isMobile && (
          <button
            className="text-6xl w-12 mr-8"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        )}
      </div>
      {isMobile && (
        <div
          className={`flex flex-col w-full text-center items-center text-4xl ${isOpen ? "" : "hidden"} bg-gray-200`}
        >
          <Link to="/" className={`my-4 ${isActive("/")}`}>
            Home
          </Link>
          <Link to="/downloads" className={`my-4 ${isActive("/downloads")}`}>
            Downloads
          </Link>
          <Link
            to="/version-compatibility"
            className={`my-4 ${isActive("/version-compatibility")}`}
          >
            Version Compatibility
          </Link>
          <Link to="/credits" className={`my-4 ${isActive("/credits")}`}>
            Credits
          </Link>
          <a
            href="https://discord.gg/aDE8TYA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 m-4"
          >
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"
              alt="discord logo"
            />
          </a>
          <a
            href="https://github.com/CapPack/the-captainsparklez-texture-pack"
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 m-4"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="github icon"
            />
          </a>
        </div>
      )}
      {!isMobile && (
        <div className="flex flex-row w-full text-xl items-center justify-end mr-4">
          <Link
            to="/"
            className={`text-center ${isActive("/")}`}
            style={{ width: "5rem" }}
          >
            Home
          </Link>
          <Link
            to="/downloads"
            className={`text-center ${isActive("/downloads")}`}
            style={{ width: "7rem" }}
          >
            Downloads
          </Link>
          <Link
            to="/version-compatibility"
            className={`text-center ${isActive("/version-compatibility")}`}
            style={{ width: "13rem" }}
          >
            Version Compatibility
          </Link>
          <Link
            to="/credits"
            className={`text-center ${isActive("/credits")}`}
            style={{ width: "5rem" }}
          >
            Credits
          </Link>
          <a
            href="https://discord.gg/aDE8TYA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 m-4"
          >
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"
              alt="discord logo"
            />
          </a>
          <a
            href="https://github.com/CapPack/the-captainsparklez-texture-pack"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 m-4"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="github icon"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
