import { useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useMediaQuery } from "react-responsive";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import Button from "../components/Button";

const Home = () => {
  useEffect(() => {
    document.title = "Home - CapPack";
  }, []);

  const slideshowAspectRatio = 16 / 9;
  const maxSlideshowWidth = 800;
  const maxSlideshowHeight = maxSlideshowWidth / slideshowAspectRatio;
  const maxVideoWidth = 800;
  const maxVideoHeight = maxVideoWidth / (16 / 9);
  const isMobile = useMediaQuery({ query: "(max-width: 1028px)" });

  return (
    <div className="text-center text-xl">
      <p className="m-10 font-bold text-6xl">CapPack</p>
      <p className="m-10 font-semibold text-2xl">
        The Official CaptainSparklez Texture Pack
      </p>
      <Button text="Download Here" link="https://cappack.page/downloads" />
      <div className="m-10">
        <p className="font-bold">Supported Minecraft Versions:</p>
        <p>
          <b>Java:</b> 1.6.1 - 1.21.10
        </p>
        <p>
          <b>Bedrock:</b> 1.21.113
        </p>
      </div>
      <div className="m-10">
        <p className="font-bold">To Enable Custom Item Names:</p>
        <p>
          <b>Java:</b> Open “Options”, then “Language”, and change the language
          to “CaptainSparklez (US)”
        </p>
        <p>
          <b>Bedrock:</b> Open “Settings”, then “Language”, and change the
          language to “English (CaptainSparklez)”
        </p>
      </div>
      <div className="m-10">
        <span className="underline hover:no-underline text-blue-600">
          <a
            href="https://www.optifine.net/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            OptiFine
          </a>
        </span>{" "}
        or{" "}
        <span className="underline hover:no-underline text-blue-600">
          <a
            href="https://modrinth.com/mod/entity-model-features"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entity Model Features
          </a>
        </span>{" "}
        is <b>recommended</b> for the full experience.
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
              alt="Modrinth Downloads (Both editions)"
              src="https://img.shields.io/modrinth/dt/ARED1l1P?style=for-the-badge&logo=modrinth&label=Java%20Edition"
            />
          </a>
        </div>
      </div>
      <hr className="w-80 mx-auto" />

      {/* Slideshow and Text Block */}
      {isMobile ? (
        <>
          <div className="my-8 mx-4">
            <div
              className="mx-auto"
              style={{
                maxWidth: `${maxSlideshowWidth}px`,
                maxHeight: `${maxSlideshowHeight}px`,
              }}
            >
              <Slide>
                {[image1, image2, image3, image4, image5, image6].map(
                  (image, index) => (
                    <div key={index} className="each-slide">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                  ),
                )}
              </Slide>
            </div>
          </div>
          <div className="my-8 mx-4 font-semibold text-4xl p-6">
            Plenty of custom textures, custom models, and splash texts you won’t
            find anywhere else. Oh, and it reduces rain particles without
            needing OptiFine :P
          </div>
          <hr className="w-80 mx-auto" />
          <div className="my-8 mx-4 font-semibold text-4xl p-6">
            The Official CaptainSparklez Texture Pack, used and approved by
            CaptainSparklez himself.
          </div>
        </>
      ) : (
        <div className="my-8 mx-4 flex">
          <div className="w-1/2">
            <div
              className="mx-auto"
              style={{
                maxWidth: `${maxSlideshowWidth}px`,
                maxHeight: `${maxSlideshowHeight}px`,
              }}
            >
              <Slide>
                {[image1, image2, image3, image4, image5, image6].map(
                  (image, index) => (
                    <div key={index} className="each-slide">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                  ),
                )}
              </Slide>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center font-semibold text-center text-4xl p-6">
            Plenty of custom textures, custom models, and splash texts you won’t
            find anywhere else. Oh, and it reduces rain particles without
            needing OptiFine :P
          </div>
        </div>
      )}

      <hr className="w-80 mx-auto" />

      {/* Video Block */}
      {isMobile ? (
        <div className="my-8 mx-4">
          <div
            className="mx-auto"
            style={{
              maxWidth: `${maxVideoWidth}px`,
              maxHeight: `${maxVideoHeight}px`,
            }}
          >
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/bzWLMkoM9ks?si=DB0xzmiPg2ry2iv5"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      ) : (
        <div className="my-8 mx-4 flex">
          <div className="w-1/2 flex justify-center items-center font-semibold text-center text-4xl p-6">
            The Official CaptainSparklez Texture Pack, used and approved by
            CaptainSparklez himself.
          </div>
          <div className="w-1/2">
            <div
              className="mx-auto"
              style={{
                maxWidth: `${maxVideoWidth}px`,
                maxHeight: `${maxVideoHeight}px`,
              }}
            >
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/bzWLMkoM9ks?si=DB0xzmiPg2ry2iv5"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}

      <hr className="w-80 mx-auto" />

      {/* Button Block */}
      {isMobile ? (
        <div className="my-8 mx-4 flex flex-col">
          <div className="w-full flex justify-center items-center font-semibold text-center text-4xl p-6">
            Community inspired and made. The perfect texture pack for any
            CaptainSparklez fan, loved by all.
          </div>
          <hr className="w-80 mx-auto" />
          <div className="flex justify-center items-center font-semibold text-center text-4xl p-6">
            <Button
              text="Download Here"
              link="https://cappack.page/downloads"
            />
          </div>
        </div>
      ) : (
        <div className="my-8 mx-4 flex">
          <div className="w-1/2 flex justify-center items-center font-semibold text-center text-4xl p-6">
            <Button
              text="Download Here"
              link="https://cappack.page/downloads"
            />
          </div>
          <div className="w-1/2 flex justify-center items-center font-semibold text-center text-4xl p-6">
            Community inspired and made. The perfect texture pack for any
            CaptainSparklez fan, loved by all.
          </div>
        </div>
      )}
      <hr className="w-80 mx-auto" />
      <div className="mx-10">
        <p className="mt-10">
          <b>License:</b>
        </p>
        <p>
          You have the right to share and adapt this work, however, you{" "}
          <b>must</b> provide the name of the creator (ThermicWaffle), a
          copyright notice, a license notice, and a link to this work. You must{" "}
          <b>also</b> distribute your adaptations under the same license as the
          original. You <b>may not</b> use this work for commercial purposes or
          make a profit off of it.{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            className="font-bold underline hover:no-underline"
          >
            (CC BY-NC-SA 4.0)
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
