const Home = () => {
  return (
    <div className="text-center">
      <p className="m-10 font-bold text-6xl">CapPack</p>
      <p className="m-10 font-semibold text-2xl">
        The Official CaptainSparklez Texture Pack
      </p>
      <div className="m-10">
        <p className="font-bold">Supported Minecraft Versions:</p>
        <p>Java: 1.6.1 - 1.20.4</p>
        <p>Bedrock: All Versions</p>
      </div>
      <div className="m-10">
        <p className="font-bold">To Enable Custom Item Names:</p>
        <p>
          Java: Open “Options”, then “Language”, and change the language to
          “CaptainSparklez (US)”
        </p>
        <p>
          Bedrock: Open “Settings”, then “Language”, and change the language to
          “English (CaptainSparklez)”
        </p>
      </div>
      <div className="m-10">
        <span className="hover:underline">
          <a
            href="https://www.optifine.net/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            OptiFine
          </a>
        </span>{" "}
        or{" "}
        <span className="hover:underline">
          <a
            href="https://modrinth.com/mod/entity-model-features"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entity Model Features
          </a>
        </span>{" "}
        is recommended for the full experience.
      </div>
    </div>
  );
};

export default Home;
