import { useEffect, useState } from "react";

type MinecraftVersion =
  | "Bedrock"
  | "1.20.3 - 1.20.4"
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
  | "1.6.1 - 1.8.9"
  | undefined;
type PackReleaseVersion =
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
  | "v1"
  | undefined;
type Link = string;

const downloadsData: Record<
  PackReleaseVersion,
  Record<MinecraftVersion, Link>
> = {
  v13: {
    Bedrock:
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/Bedrock.CapPack.v13.mcpack",
    "1.6.1 - 1.8.9":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.6.1.-.1.8.8.CapPack.v13.zip",
    "1.9 - 1.10.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.9.-.1.10.2.CapPack.v13.zip",
    "1.11 - 1.12.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.11.-.1.12.2.CapPack.v13.zip",
    "1.13 - 1.14.4":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.13.-.1.14.4.CapPack.v13.zip",
    "1.15 - 1.16.1":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.15.-.1.16.1.CapPack.v13.zip",
    "1.16.2 - 1.16.5":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.16.2.-.1.16.5.CapPack.v13.zip",
    "1.17 - 1.17.1":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.17.-.1.17.1.CapPack.v13.zip",
    "1.18 - 1.18.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.18.-.1.18.2.CapPack.v13.zip",
    "1.19 - 1.19.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.19.-.1.19.2.CapPack.v13.zip",
    "1.19.3":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.19.3.CapPack.v13.zip",
    "1.19.4":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.19.4.CapPack.v13.zip",
    "1.20 - 1.20.1":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.20.-.1.20.1.CapPack.v13.zip",
    "1.20.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.20.2.CapPack.v13.zip",
    "1.20.3 - 1.20.4":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v13/1.20.3.-.1.20.4.CapPack.v13.zip",
  },
  v12: {
    Bedrock:
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/Bedrock.CapPack.v12.mcpack",
    "1.6.1 - 1.8.9":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.6.1.-.1.8.9.CapPack.v12.zip",
    "1.9 - 1.10.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.9.-.1.10.2.CapPack.v12.zip",
    "1.11 - 1.12.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.11.-.1.12.2.CapPack.v12.zip",
    "1.13 - 1.14.4":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.13.-.1.14.4.CapPack.v12.zip",
    "1.15 - 1.16.1":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.15.-.1.16.1.CapPack.v12.zip",
    "1.16.2 - 1.16.5":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.16.2.-.1.16.5.CapPack.v12.zip",
    "1.17 - 1.17.1":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.17.-.1.17.1.CapPack.v12.zip",
    "1.18 - 1.18.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.18.-.1.18.2.CapPack.v12.zip",
    "1.19 - 1.19.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.19.-.1.19.2.CapPack.v12.zip",
    "1.19.3":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.19.3.CapPack.v12.zip",
    "1.19.4":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.19.4.CapPack.v12.zip",
    "1.20 - 1.20.1":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.20.-.1.20.1.CapPack.v12.zip",
    "1.20.2":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.20.2.CapPack.v12.zip",
    "1.20.3 - 1.20.4":
      "https://github.com/CapPack/the-captainsparklez-texture-pack/releases/download/v12/1.20.3.-.1.20.4.CapPack.v12.zip",
  },
  // v11: {
  //   "1.6.1 - 1.8.9": "",
  //   "1.9 - 1.10.2": "",
  //   "1.11 - 1.12.2": "",
  //   "1.13 - 1.14.4": "",
  //   "1.15 - 1.16.1": "",
  //   "1.16.2 - 1.16.5": "",
  //   "1.17 - 1.17.1": "",
  //   "1.18 - 1.18.2": "",
  //   "1.19 - 1.19.2": "",
  // },
  // v10: {
  //   "1.6.1 - 1.8.9": "",
  //   "1.9 - 1.10.2": "",
  //   "1.11 - 1.12.2": "",
  //   "1.13 - 1.14.4": "",
  //   "1.15 - 1.16.1": "",
  //   "1.16.2 - 1.16.5": "",
  //   "1.17 - 1.17.1": "",
  //   "1.18 - 1.18.2": "",
  //   "1.19 - 1.19.2": "",
  // },
  // v9: {
  //   "1.9 - 1.10.2": "",
  //   "1.11 - 1.12.2": "",
  //   "1.13 - 1.14.4": "",
  //   "1.15 - 1.16.1": "",
  //   "1.16.2 - 1.16.5": "",
  //   "1.17 - 1.17.1": "",
  //   "1.18 - 1.18.2": "",
  // },
  // v8: {
  //   "1.9 - 1.10.2": "",
  //   "1.11 - 1.12.2": "",
  //   "1.13 - 1.14.4": "",
  //   "1.15 - 1.16.1": "",
  //   "1.16.2 - 1.16.5": "",
  // },
  // v7: {
  //   "1.9 - 1.10.2": "",
  //   "1.11 - 1.12.2": "",
  //   "1.13 - 1.14.4": "",
  //   "1.15 - 1.16.1": "",
  // },
  // v6: {
  //   "1.9 - 1.10.2": "",
  //   "1.11 - 1.12.2": "",
  //   "1.13 - 1.14.4": "",
  //   "1.15 - 1.16.1": "",
  // },
  // v5: {
  //   "1.9 - 1.10.2": "",
  //   "1.11 - 1.12.2": "",
  //   "1.13 - 1.14.4": "",
  //   "1.15 - 1.16.1": "",
  // },
  // v4: {
  //   "1.9 - 1.10.2": "",
  //   "1.11 - 1.12.2": "",
  //   "1.13 - 1.14.4": "",
  //   "1.15 - 1.16.1": "",
  // },
  // v3: {
  //   "1.9 - 1.10.2": "",
  //   "1.11 - 1.12.2": "",
  //   "1.13 - 1.14.4": "",
  //   "1.15 - 1.16.1": "",
  // },
  // v2: {
  //   "1.11 - 1.12.2": "",
  //   "1.13 - 1.14.4": "",
  //   "1.15 - 1.16.1": "",
  // },
  // v1: {
  //   "1.11 - 1.12.2": "",
  //   "1.13 - 1.14.4": "",
  //   "1.15 - 1.16.1": "",
  // },
};

const Downloads = () => {
  useEffect(() => {
    document.title = "Downloads - CapPack";
  }, []);
  const [latestReleaseSelected, setLatestReleaseSelected] = useState(true);

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-4">Downloads</h1>
      <h2 className="text-xl font-semibold mb-10">
        The download buttons not named "Bedrock" are for Java Edition{" "}
        <u>only</u>
      </h2>
      <div className="flex gap-4 my-4 ">
        <button
          className={`px-4 py-2 ${latestReleaseSelected ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setLatestReleaseSelected(true)}
        >
          Latest release
        </button>
        <button
          className={`px-4 py-2 ${!latestReleaseSelected ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setLatestReleaseSelected(false)}
        >
          Past releases
        </button>
      </div>

      {latestReleaseSelected ? (
        <div>
          <p className="text-lg font-bold my-4 text-center">
            Current latest release: v13
          </p>
          <div className="flex justify-center">
            <div className="max-w-4xl w-full flex flex-wrap gap-4 justify-center">
              {Object.entries(downloadsData.v13).map(([version, link]) => (
                <a
                  key={version}
                  href={link}
                  className="px-4 py-2 bg-blue-500 hover:bg-yellow-500 text-white"
                >
                  {version}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          {[...Object.keys(downloadsData)].map((release, index) => (
            <div key={release}>
              <h2
                className={`text-lg font-bold my-4 ${index !== 0 ? "mt-12" : ""} text-center`}
              >
                {release}
              </h2>
              <div className="flex justify-center">
                <div className="max-w-4xl w-full flex flex-wrap gap-4 justify-center">
                  {Object.entries(
                    downloadsData[release as PackReleaseVersion],
                  ).map(([version, link]) => (
                    <a
                      key={version}
                      href={link}
                      className="px-4 py-2 bg-blue-500 hover:bg-yellow-500 text-white"
                    >
                      {version}
                    </a>
                  ))}
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
