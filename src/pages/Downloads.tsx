import React, { useEffect, useState } from "react";
import DownloadModrinth from "../assets/DlOnModrinth.png";
import DownloadCurseforge from "../assets/DlOnCurseforge.png";
import DownloadGitHub from "../assets/DlOnGitHub.png";
import DownloadPlanetMinecraft from "../assets/DlOnPlanetMinecraft.png";

type MinecraftVersion =
  | "Bedrock"
  | "1.21.6 - 1.21.8"
  | "1.20.5 - 1.21.5"
  | "1.20.3 - 1.20.4"
  | "1.20.2 - 1.20.4"
  | "1.20.2"
  | "1.20 - 1.20.1"
  | "1.19.4"
  | "1.19.3"
  | "1.19 - 1.19.2"
  | "1.18 - 1.18.2"
  | "1.17 - 1.17.1"
  | "1.16.2 - 1.16.5"
  | "1.15 - 1.16.1"
  | "1.13 - 1.14.4"
  | "1.11 - 1.12.2"
  | "1.9 - 1.10.2"
  | "1.8.9"
  | "1.6.1 - 1.8.9"
  | "1.6.1 - 1.8.8";
type PackReleaseVersion =
  | "v14"
  | "v13"
  | "v12"
  | "v11"
  | "v10"
  | "v9"
  | "v8"
  | "v7"
  | "v6"
  | "v5"
  | "v4"
  | "v3"
  | "v2"
  | "v1";
type Link = string;

const downloadsData: Partial<
  Record<PackReleaseVersion, Partial<Record<MinecraftVersion, Link>>>
> = {
  v14: {
    Bedrock: 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v14/Bedrock.1.21.101.CapPack.v14.mcpack",
    "1.21.6 - 1.21.8":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v14/1.21.6.-.1.21.8.CapPack.v14.zip",
    "1.20.5 - 1.21.5":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v14/1.20.5.-.1.21.5.CapPack.v14.zip",
    "1.20.2 - 1.20.4":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v14/1.20.2.-.1.20.4.CapPack.v14.zip",
    "1.20 - 1.20.1":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v14/1.20.-.1.20.1.CapPack.v14.zip",
    "1.19.4":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v14/1.19.4.CapPack.v14.zip",
    "1.19.3":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v14/1.19.3.CapPack.v14.zip",
    "1.19 - 1.19.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v14/1.19.-.1.19.2.CapPack.v14.zip",
    "1.18 - 1.18.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v14/1.18.-.1.18.2.CapPack.v14.zip",
    "1.17 - 1.17.1":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v14/1.17.-.1.17.1.CapPack.v14.zip",
    "1.16.2 - 1.16.5":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v14/1.16.2.-.1.16.5.CapPack.v14.zip",
    "1.15 - 1.16.1":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v14/1.15.-.1.16.1.CapPack.v14.zip",
    "1.13 - 1.14.4":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v14/1.13.-.1.14.4.CapPack.v14.zip",
    "1.11 - 1.12.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v14/1.11.-.1.12.2.CapPack.v14.zip",
    "1.9 - 1.10.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v14/1.9.-.1.10.2.CapPack.v14.zip",
    "1.6.1 - 1.8.9":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v14/1.6.1.-.1.8.9.CapPack.v14.zip",
  },
  v13: {
    Bedrock:
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/Bedrock.1.20.51.CapPack.v13.mcpack",
    "1.20.3 - 1.20.4":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.20.3.-.1.20.4.CapPack.v13.zip",
    "1.20.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.20.2.CapPack.v13.zip",
    "1.20 - 1.20.1":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.20.-.1.20.1.CapPack.v13.zip",
    "1.19.4":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.19.4.CapPack.v13.zip",
    "1.19.3":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.19.3.CapPack.v13.zip",
    "1.19 - 1.19.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.19.-.1.19.2.CapPack.v13.zip",
    "1.18 - 1.18.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.18.-.1.18.2.CapPack.v13.zip",
    "1.17 - 1.17.1":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.17.-.1.17.1.CapPack.v13.zip",
    "1.16.2 - 1.16.5":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.16.2.-.1.16.5.CapPack.v13.zip",
    "1.15 - 1.16.1":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.15.-.1.16.1.CapPack.v13.zip",
    "1.13 - 1.14.4":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.13.-.1.14.4.CapPack.v13.zip",
    "1.11 - 1.12.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.11.-.1.12.2.CapPack.v13.zip",
    "1.9 - 1.10.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.9.-.1.10.2.CapPack.v13.zip",
    "1.8.9":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.8.9.CapPack.v13.zip",
    "1.6.1 - 1.8.8":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.6.1.-.1.8.8.CapPack.v13.zip",
  },
  v12: {
    Bedrock:
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/Bedrock.1.20.31.CapPack.v12.mcpack",
    "1.20.3 - 1.20.4":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.20.3.-.1.20.4.CapPack.v12.zip",
    "1.20.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.20.2.CapPack.v12.zip",
    "1.20 - 1.20.1":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.20.-.1.20.1.CapPack.v12.zip",
    "1.19.4":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.19.4.CapPack.v12.zip",
    "1.19.3":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.19.3.CapPack.v12.zip",
    "1.19 - 1.19.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.19.-.1.19.2.CapPack.v12.zip",
    "1.18 - 1.18.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.18.-.1.18.2.CapPack.v12.zip",
    "1.17 - 1.17.1":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.17.-.1.17.1.CapPack.v12.zip",
    "1.16.2 - 1.16.5":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.16.2.-.1.16.5.CapPack.v12.zip",
    "1.15 - 1.16.1":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.15.-.1.16.1.CapPack.v12.zip",
    "1.13 - 1.14.4":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.13.-.1.14.4.CapPack.v12.zip",
    "1.11 - 1.12.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.11.-.1.12.2.CapPack.v12.zip",
    "1.9 - 1.10.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.9.-.1.10.2.CapPack.v12.zip",
    "1.6.1 - 1.8.9":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.6.1.-.1.8.9.CapPack.v12.zip",
  },
  v11: {
    Bedrock: 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v11/Bedrock.1.19.22.CapPack.v11.mcpack",
    "1.19 - 1.19.2": 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v11/1.19.-1.19.2.CapPack.v11.zip",
    "1.18 - 1.18.2": 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v11/1.18.-.1.18.2.CapPack.v11.zip",
    "1.17 - 1.17.1": 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v11/1.17.-.1.17.1.CapPack.v11.zip",
    "1.16.2 - 1.16.5": 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v11/1.16.2.-.1.16.5.CapPack.v11.zip",
    "1.15 - 1.16.1": 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v11/1.15.-.1.16.1.CapPack.v11.zip",
    "1.13 - 1.14.4": 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v11/1.13.-.1.14.4.CapPack.v11.zip",
    "1.11 - 1.12.2": 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v11/1.11.-.1.12.2.CapPack.v11.zip",
    "1.9 - 1.10.2": 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v11/1.9.-.1.10.2.CapPack.v11.zip",
    "1.6.1 - 1.8.9": 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v11/1.6.1.-.1.8.9.CapPack.v11.zip",
  },
  v10: {
    Bedrock: 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v10/Bedrock.1.19.0.CapPack.v10.mcpack",
    "1.19 - 1.19.2": 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v10/1.19.-.1.19.2.CapPack.v10.zip",
    "1.18 - 1.18.2": 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v10/1.18.-.1.18.2.CapPack.v10.zip",
    "1.17 - 1.17.1": 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v10/1.17.-.1.17.1.CapPack.v10.zip",
    "1.16.2 - 1.16.5": 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v10/1.16.2.-.1.16.5.CapPack.v10.zip",
    "1.15 - 1.16.1": 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v10/1.15.-.1.16.1.CapPack.v10.zip",
    "1.13 - 1.14.4": 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v10/1.13.-.1.14.4.CapPack.v10.zip",
    "1.11 - 1.12.2": 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v10/1.11.-.1.12.2.CapPack.v10.zip",
    "1.9 - 1.10.2": 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v10/1.9.-.1.10.2.CapPack.v10.zip",
    "1.6.1 - 1.8.9": 
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v10/1.6.1.-.1.8.9.CapPack.v10.zip",
  // },
  // v9: {
  //   Bedrock: "",
  //   "1.18 - 1.18.2": "",
  //   "1.17 - 1.17.1": "",
  //   "1.16.2 - 1.16.5": "",
  //   "1.15 - 1.16.1": "",
  //   "1.13 - 1.14.4": "",
  //   "1.11 - 1.12.2": "",
  //   "1.9 - 1.10.2": "",
  // },
  // v8: {
  //   Bedrock: "",
  //   "1.16.2 - 1.16.5": "",
  //   "1.15 - 1.16.1": "",
  //   "1.13 - 1.14.4": "",
  //   "1.11 - 1.12.2": "",
  //   "1.9 - 1.10.2": "",
  // },
  // v7: {
  //   Bedrock: "",
  //   "1.15 - 1.16.1": "",
  //   "1.13 - 1.14.4": "",
  //   "1.11 - 1.12.2": "",
  //   "1.9 - 1.10.2": "",
  // },
  // v6: {
  //   Bedrock: "",
  //   "1.15 - 1.16.1": "",
  //   "1.13 - 1.14.4": "",
  //   "1.11 - 1.12.2": "",
  //   "1.9 - 1.10.2": "",
  // },
  // v5: {
  //   Bedrock: "",
  //   "1.15 - 1.16.1": "",
  //   "1.13 - 1.14.4": "",
  //   "1.11 - 1.12.2": "",
  //   "1.9 - 1.10.2": "",
  // },
  // v4: {
  //   Bedrock: "",
  //   "1.15 - 1.16.1": "",
  //   "1.13 - 1.14.4": "",
  //   "1.11 - 1.12.2": "",
  //   "1.9 - 1.10.2": "",
  // },
  // v3: {
  //   Bedrock: "",
  //   "1.15 - 1.16.1": "",
  //   "1.13 - 1.14.4": "",
  //   "1.11 - 1.12.2": "",
  //   "1.9 - 1.10.2": "",
  // },
  // v2: {
  //   Bedrock: "",
  //   "1.15 - 1.16.1": "",
  //   "1.13 - 1.14.4": "",
  //   "1.11 - 1.12.2": "",
  // },
  // v1: {
  //   Bedrock: "",
  //   "1.15 - 1.16.1": "",
  //   "1.13 - 1.14.4": "",
  //   "1.11 - 1.12.2": "",
  // },
};

const Downloads: React.FC = () => {
  useEffect(() => {
    document.title = "Downloads - CapPack";
  }, []);
  const [latestReleaseSelected, setLatestReleaseSelected] = useState(true);

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mt-10 mb-4">Downloads</h1>
      <h2 className="text-xl font-semibold">
        The download buttons not named "Bedrock" are for Java Edition{" "}
        <u>only</u>
      </h2>
      <div className="flex flex-row flex-wrap justify-center my-8">
        <a
          href="https://github.com/CapPack/the-captainsparklez-texture-pack/releases"
          className="m-2"
        >
          <img
            alt="GitHub Downloads (all assets, all releases)"
            src="https://img.shields.io/github/downloads/CapPack/the-captainsparklez-texture-pack/total?style=for-the-badge&logo=github&label=all%20releases"
          />
        </a>
        <a
          href="https://github.com/CapPack/the-captainsparklez-texture-pack/releases/tag/v14"
          className="m-2"
        >
          <img
            alt="GitHub Downloads (all assets, latest release)"
            src="https://img.shields.io/github/downloads/CapPack/the-captainsparklez-texture-pack/latest/total?sort=date&style=for-the-badge&logo=github&label=latest%20release"
          />
        </a>
        <a
          href="https://www.curseforge.com/minecraft/texture-packs/the-captainsparklez-texture-pack/files/all?page=1&pageSize=20"
          className="m-2"
        >
          <img
            alt="CurseForge Downloads (Java Edition)"
            src="https://img.shields.io/curseforge/dt/546646?style=for-the-badge&logo=curseforge&label=Java%20Edition"
          />
        </a>
        <a
          href="https://www.curseforge.com/minecraft-bedrock/addons/the-captainsparklez-texture-pack/files/all?page=1&pageSize=20"
          className="m-2"
        >
          <img
            alt="CurseForge Downloads (Bedrock Edition)"
            src="https://img.shields.io/curseforge/dt/634015?style=for-the-badge&logo=curseforge&label=Bedrock%20Edition"
          />
        </a>
        <a
          href="https://modrinth.com/resourcepack/the-captainsparklez-texture-pack/versions"
          className="m-2"
        >
          <img
            alt="Modrinth Downloads"
            src="https://img.shields.io/modrinth/dt/ARED1l1P?style=for-the-badge&logo=modrinth&label=Java%20Edition"
          />
        </a>
      </div>
      <div className="flex gap-4 my-4 ">
        <button
          className={`px-4 py-2 text-2xl ${latestReleaseSelected ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setLatestReleaseSelected(true)}
        >
          Latest release
        </button>
        <button
          className={`px-4 py-2 text-2xl ${!latestReleaseSelected ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setLatestReleaseSelected(false)}
        >
          All releases
        </button>
      </div>

      {latestReleaseSelected ? (
        <div>
          <p className="text-lg font-bold my-4 text-center">
            Current latest release: v14
          </p>
          <div className="flex justify-center">
            <div className="max-w-4xl w-full flex flex-wrap gap-4 justify-center">
              {Object.entries(downloadsData.v14!).map(([version, link]) => (
                <a
                  key={version}
                  href={link}
                  className="px-4 py-2 bg-blue-500 hover:bg-yellow-500 text-white text-2xl"
                >
                  {version}
                </a>
              ))}
            </div>
          </div>
          <div className="bg-white py-4 flex justify-center">
            <div className="flex flex-wrap justify-center max-w-screen-xl mx-auto">
              <a
                href="https://www.curseforge.com/minecraft/texture-packs/the-captainsparklez-texture-pack"
                target="_blank"
                rel="noopener noreferrer"
                className="m-4"
              >
                <img
                  src={DownloadCurseforge}
                  alt="Download on Curseforge"
                  className="w-56"
                />
              </a>
              <a
                href="https://github.com/CapPack/the-captainsparklez-texture-pack/releases/tag/v14"
                target="_blank"
                rel="noopener noreferrer"
                className="m-4"
              >
                <img
                  src={DownloadGitHub}
                  alt="Download on GitHub"
                  className="w-56"
                />
              </a>
              <a
                href="https://modrinth.com/resourcepack/the-captainsparklez-texture-pack"
                target="_blank"
                rel="noopener noreferrer"
                className="m-4"
              >
                <img
                  src={DownloadModrinth}
                  alt="Download on Modrinth"
                  className="w-56"
                />
              </a>
              <a
                href="https://www.planetminecraft.com/texture-pack/the-captainsparklez-texture-pack/"
                target="_blank"
                rel="noopener noreferrer"
                className="m-4"
              >
                <img
                  src={DownloadPlanetMinecraft}
                  alt="Download on Planet Minecraft"
                  className="w-56"
                />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {[...Object.keys(downloadsData)].map((release, index) => (
            <div key={release}>
              <div>
                <h2
                  className={`text-lg font-bold my-4 ${index !== 0 ? "mt-12" : ""} text-center`}
                >
                  {release}
                </h2>
                <div className="flex justify-center">
                  <div className="max-w-4xl w-full flex flex-wrap gap-4 justify-center">
                    {Object.entries(
                      downloadsData[release as PackReleaseVersion]!,
                    ).map(([version, link]) => (
                      <a
                        key={version}
                        href={link}
                        className="px-4 py-2 bg-blue-500 hover:bg-yellow-500 text-white text-2xl"
                      >
                        {version}
                      </a>
                    ))}
                  </div>
                </div>
                {/* Show GitHub download image under each past release */}
                <div className="bg-white py-4 flex justify-center">
                  <div className="flex flex-wrap justify-center max-w-screen-xl mx-auto">
                    <a
                      href={`https://github.com/CapPack/the-captainsparklez-texture-pack/releases/tag/${release}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-4"
                    >
                      <img
                        src={DownloadGitHub}
                        alt="Download on GitHub"
                        className="w-56"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Downloads;
