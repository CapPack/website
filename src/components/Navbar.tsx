import { Link, useLocation } from "react-router-dom";
import CapPackImage from "../assets/CapPack.png";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "font-bold" : "hover:font-bold";
  };

  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-row w-full text-2xl items-center">
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
      <div className="flex flex-row w-full text-xl items-center justify-end mr-4">
        <Link to="/" className={`text-center ${isActive("/")}`} style={{ width: "6rem" }}>
          Home
        </Link>
        <Link to="/downloads" className={`text-center ${isActive("/downloads")}`} style={{ width: "9rem" }}>
          Downloads
        </Link>
        <Link
          to="/version-compatibility"
          className={`text-center ${isActive("/version-compatibility")}`}
          style={{ width: "14rem" }}
        >
          Version Compatibility
        </Link>
        <Link to="/credits" className={`text-center ${isActive("/credits")}`} style={{ width: "7rem" }}>
          Credits
        </Link>
                <a
          href="https://discord.gg/aDE8TYA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 m-4"
          style={{ width: "3.5rem" }}
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
    </div>
  );
};

export default Navbar;
