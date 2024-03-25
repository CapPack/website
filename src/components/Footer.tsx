const Footer = () => {
  return (
    <div className="text-4xl w-screen text-center flex-auto">
      <p className="">
        Made by{" "}
        <span className="text-thermic-orange decoration-black underline hover:no-underline">
          <a href="https://thermic.icu" target="_blank">
            ThermicWaffle
          </a>
        </span>{" "}
        &{" "}
        <span className="text-greenish underline hover:no-underline decoration-black">
          <a href="https://linktr.ee/muddyCookie" target="_blank">
            muddyCookie
          </a>
        </span>
      </p>
    </div>
  );
};

export default Footer;
