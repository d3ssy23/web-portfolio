import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="flex flex-col text-2xl md:text-3xl gap-8 max-w-7xl mx-auto px-3">
      <div className="w-full flex justify-end">
        <h2 className="text-9xl text-white">contact</h2>
      </div>
      <div className="w-full flex md:flex-row flex-col">
        <div className="w-full flex flex-col gap-6 p-3 ">
          <div className="flex items-center gap-4 text-2xl">
            <img src="/email.svg" alt="email" className="w-20" />
            <a href="dessy@daudio.dev" className="text-4xl text-lightgray-300">
              dessy@daudio.dev
            </a>
          </div>
          <div className="flex items-center gap-4 text-2xl">
            <img src="/github.svg" alt="github" className="w-20" />
            <a
              href="https://github.com/d3ssy23"
              target="blanc"
              className="text-4xl text-greenish-200 underline underline-offset-6"
            >
              Github
            </a>
          </div>
          <div className="flex items-center gap-4 text-2xl">
            <img src="/linkedin.svg" alt="email" className="w-20" />
            <a
              href="https://www.linkedin.com/in/desislava-ilieva-482747158/"
              target="blanc"
              className="text-4xl text-greenish-200 underline underline-offset-6"
            >
              Linkedin
            </a>
          </div>
          <div className="flex items-center gap-4 text-2xl">
            <img src="/link.svg" alt="github" className="w-20" />
            <a
              href="daudio.dev"
              target="blanc"
              className="text-4xl text-lightgray-300"
            >
              daudio.dev
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
export default Contact;
