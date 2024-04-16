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

  const slideshowAspectRatio = 16 / 9;
  const maxSlideshowWidth = 800;
  const maxSlideshowHeight = maxSlideshowWidth / slideshowAspectRatio;
  const maxVideoWidth = 800;
  const maxVideoHeight = maxVideoWidth / (16 / 9);

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
      </div>
      <hr className="w-80 mx-auto" />
      <div className="my-8 mx-4 flex">
        <div
          className="w-1/2"
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
        <div className="w-1/2 flex justify-center items-center font-semibold text-center text-4xl p-6">
          Plenty of custom textures, custom models, and splash texts you won’t
          find anywhere else. Oh, and it reduces rain particles without needing
          OptiFine :P
        </div>
      </div>
      <hr className="w-80 mx-auto" />
      <div className="my-8 mx-4 flex">
        <div className="w-1/2 flex justify-center items-center font-semibold text-center text-4xl p-6">
          The Official CaptainSparklez Texture Pack, used and approved by
          CaptainSparklez himself.
        </div>
        <div
          className="w-1/2"
          style={{
            maxWidth: `${maxVideoWidth}px`,
            maxHeight: `${maxVideoHeight}px`,
          }}
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
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
      <hr className="w-80 mx-auto" />
      <div className="my-8 mx-4 flex">
        <div className="w-1/2 flex justify-center items-center font-semibold text-center text-4xl p-6">
          <div>Left Buttons</div>
        </div>
        <div className="w-1/2 flex justify-center items-center font-semibold text-center text-4xl p-6">
          Community inspired and made. The perfect texture pack for any
          CaptainSparklez fan, loved by all.
        </div>
      </div>
      <hr className="w-80 mx-auto" />
    </div>
  );
};

export default Home;
