import { Link, useLocation } from "react-router-dom";
import CapPackImage from "../assets/CapPack.png";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "font-bold" : "hover:font-bold";
  };

  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-row justify-end w-full">
        <img src={CapPackImage} alt="CapPack Logo" className="w-32 mx-4 my-4" />
        <p className="w-full m-auto items-center mx-4 text-2xl">
          <span className="font-bold hover:underline">
            <a
              href="https://cappack.page"
              target="_blank"
              rel="noopener noreferrer"
            >
              CapPack
            </a>
          </span>
          {"  "}Official CaptainSparklez Texture Pack Website
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-end w-full mx-4 items-center">
        <Link to="/" className={`m-4 text-xl ${isActive("/")}`}>
          Home
        </Link>
        <Link
          to="/downloads"
          className={`m-4 text-xl ${isActive("/downloads")}`}
        >
          Downloads
        </Link>
        <Link
          to="/version-compatibility"
          className={`m-4 text-xl ${isActive("/version-compatibility")}`}
        >
          Version Compatibility
        </Link>
        <Link to="/credits" className={`m-4 text-xl ${isActive("/credits")}`}>
          Credits
        </Link>
        <a
          href="https://discord.gg/aDE8TYA"
          target="_blank"
          rel="noopener noreferrer"
          className="link-icon"
        >
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"
            className="w-10 mx-4 my-4 hover:w-11"
            alt="discord logo"
          />
        </a>
        <a
          href="https://github.com/CapPack/the-captainsparklez-texture-pack"
          target="_blank"
          rel="noopener noreferrer"
          className="link-icon"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            className="w-10 mx-4 my-4 hover:w-11"
            alt="github icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
