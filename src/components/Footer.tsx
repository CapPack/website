const Footer = () => {
  return (
    <div className="text-4xl text-center items-center p-6">
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
  );
};

export default Footer;
