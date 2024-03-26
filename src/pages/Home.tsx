import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Home = () => {
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
            style={{ color: "#1E40AF" }}
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
            style={{ color: "#1E40AF" }}
          >
            Entity Model Features
          </a>
        </span>{" "}
        is <b>recommended</b> for the full experience.
      </div>
      <hr className="w-80 mx-auto" />
      <div className="my-10 flex">
        <div className="w-1/2">
          <div className="slide-container h-full mx-10">
            <Slide>
              <div className="each-slide h-full">
                <div
                  className="h-full"
                  style={{
                    backgroundImage: `url('slide1.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span>Slide 1</span>
                </div>
              </div>
              <div className="each-slide h-full">
                <div
                  className="h-full"
                  style={{
                    backgroundImage: `url('slide2.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span>Slide 2</span>
                </div>
              </div>
              <div className="each-slide h-full">
                <div
                  className="h-full"
                  style={{
                    backgroundImage: `url('slide3.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span>Slide 3</span>
                </div>
              </div>
            </Slide>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div>Right Content</div>
        </div>
      </div>
      <hr className="w-80 mx-auto" />
      <div className="my-10 flex">
        <div className="w-1/2 flex justify-center items-center">
          <div>Left Content</div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div>
            <iframe
              width="701"
              height="394"
              src="https://www.youtube.com/embed/bzWLMkoM9ks"
              title="Captain Approved Texture Pack"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
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
          <div>Right Content</div>
        </div>
      </div>
      <hr className="w-80 mx-auto" />
    </div>
  );
};

export default Home;
