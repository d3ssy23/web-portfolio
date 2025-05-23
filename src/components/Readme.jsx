const Readme = () => {
  return (
    <section className="px-3 py-24 max-w-7xl  mx-auto  flex md:flex-row flex-col justify-around gap-16 text-3xl">
      {/* rect below image */}
      <div className="md:w-1/2 flex flex-col gap-3">
        {/* circle */}
        <div className=" box border-4 border-greenish-200 rounded-full aspect-square overflow-hidden">
          <img src="/dilieva.jpg" className="w-full h-full object-cover" />
        </div>
        {/* rect below image */}
        <div className=" p-2 ">
          <h2 className="text-3xl text-center text-white">
            Desislava Ilieva <br /> <br /> Software engineer/ Audio Engineer
          </h2>
        </div>
      </div>

      {/* /rect */}
      <div className="flex flex-col gap-4 md:w-1/2">
        <img src="/README.md.svg" alt="readme" />
        <div
          className=" p-2 px-5 h-full flex items-center "
          style={{ boxShadow: "0px 0px 10px 5px #1d1d1e" }}
        >
          <p className="text-white lg:text-3xl text-2xl">
            {" "}
            A passionate traveller and geek,an audio engineer and C/ C++
            developer. <br />
            <br /> With 10 years experience in audio engineering, and
            exploration of digital/analogue technology. <br />
            <br />I enjoy working close to the hardware, understanding how
            things work under the hood, and solving problems.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Readme;
