import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

const Home = () => {
  useEffect(() => {
    document.title = "Home - CapPack";
  }, []);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="text-center">
      <p className="m-10 font-bold text-6xl">CapPack</p>
      <p className="m-10 font-semibold text-2xl">
        The Official CaptainSparklez Texture Pack
      </p>
      <div className="m-10">
        <p className="font-bold">Supported Minecraft Versions:</p>
        <p>
          <b>Java:</b> 1.6.1 - 1.20.4
        </p>
        <p>
          <b>Bedrock:</b> All Versions
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
        <span className="underline hover:no-underline">
          <a
            href="https://www.optifine.net/home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            OptiFine
          </a>
        </span>{" "}
        or{" "}
        <span className="underline hover:no-underline">
          <a
            href="https://modrinth.com/mod/entity-model-features"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Entity Model Features
          </a>
        </span>{" "}
        is <b>recommended</b> for the full experience.
      </div>
      <hr className="w-80 mx-auto" />
      <div className="my-10 flex">
        <div className="w-1/2">
          <div className="slide-container h-full mx-10" >
            <Slide>
              <div className="each-slide">
                <div
                  className="h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image1})`,
                    width: "100%",
                    paddingTop: "56.25%",
                  }}
                >
                  <span className="hidden">Slide 1</span>
                </div>
              </div>
              <div className="each-slide">
                <div
                  className="h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image2})`,
                    width: "100%",
                    paddingTop: "56.25%",
                  }}
                >
                  <span className="hidden">Slide 2</span>
                </div>
              </div>
              <div className="each-slide">
                <div
                  className="h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image3})`,
                    width: "100%",
                    paddingTop: "56.25%",
                  }}
                >
                  <span className="hidden">Slide 3</span>
                </div>
              </div>
              <div className="each-slide">
                <div
                  className="h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image4})`,
                    width: "100%",
                    paddingTop: "56.25%",
                  }}
                >
                  <span className="hidden">Slide 4</span>
                </div>
              </div>
              <div className="each-slide">
                <div
                  className="h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image5})`,
                    width: "100%",
                    paddingTop: "56.25%",
                  }}
                >
                  <span className="hidden">Slide 5</span>
                </div>
              </div>
              <div className="each-slide">
                <div
                  className="h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image6})`,
                    width: "100%",
                    paddingTop: "56.25%",
                  }}
                >
                  <span className="hidden">Slide 6</span>
                </div>
              </div>
            </Slide>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="font-semibold text-center text-4xl">
            Plenty of custom textures, custom models, and splash texts you won’t
            find anywhere else. Oh, and it reduces rain particles without
            needing OptiFine :P
          </div>
        </div>
      </div>
      <hr className="w-80 mx-auto" />
      <div className="my-10 flex">
        <div className="w-1/2 flex justify-center items-center">
          <div className="font-semibold text-center text-4xl">
            The Official CaptainSparklez Texture Pack, used and approved by
            CaptainSparklez himself.
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div>
            <iframe
              width={windowWidth > 701 ? 701 : windowWidth}
              height={(windowWidth > 701 ? 701 : windowWidth) * (394 / 701)}
              src="https://www.youtube.com/embed/bzWLMkoM9ks"
              title="Captain Approved Texture Pack"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <hr className="w-80 mx-auto" />
      <div className="my-10 flex">
        <div className="w-1/2">
          <div>Left Buttons</div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="font-semibold text-center text-4xl">
            Community inspired and made. The perfect texture pack for any
            CaptainSparklez fan, loved by all.
          </div>
        </div>
      </div>
      <hr className="w-80 mx-auto" />
    </div>
  );
};

export default Home;
