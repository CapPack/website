const Footer = () => {
  return (
    <div className="text-center text-xl">
      <div className="mx-10">
        <p className="mt-10">
          <b>Buy us a coffee!</b>
        </p>
        <p>
          Please{" "}
          <a
            href="https://buymeacoffee.com/thermicwaffle"
            className="font-bold underline hover:no-underline"
          >
            leave us a tip
          </a>
          , if you are able, to support our work. We're in university, so
          anything means a lot! Thanks!
        </p>
      </div>
      <div className="text-4xl text-center items-center p-6 font-semibold">
        <p>
          Made by{" "}
          <a
            href="https://thermic.icu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-thermic-orange hover:no-underline underline"
          >
            ThermicWaffle
          </a>{" "}
          &{" "}
          <a
            href="https://linktr.ee/muddyCookie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-greenish hover:no-underline underline"
          >
            muddyCookie
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
