const Experience = () => {
  return (
    <section className="flex flex-col text-2xl md:text-3xl gap-4 max-w-7xl mx-auto px-3 py-10">
      <h2 className="text-9xl lg:w-full flex justify-end text-right text-white">
        experience
      </h2>
      <div className=" flex flex-col md:flex-row gap-4 w-full">
        <div className="flex flex-col gap-4 bg-darkergray p-3">
          <div className=" p-3 h-full flex justify-center">
            <p className="text-white lg:text-3xl text-2xl text-center ">
              <h2 className="text-greenish-200">Education:</h2> <br />
              Bachelor “Audio engineering” NBU, Sofia, Bulgaria <br /> 42 coding
              school Berlin, Germany
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-darkergray p-3">
          <div className=" p-3  h-full flex justify-center">
            <p className="text-white lg:text-3xl text-2xl text-center ">
              <h2 className="text-greenish-200">Work Experience:</h2>
              <br /> Technical Support Specialist <br />
              Antelope Audio.ltd <br />
              Audio production Assistant Antelope Audio.ltd
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full bg-darkergray p-3">
        <div className=" p-3 px-5 flex justify-center">
          <p className="text-white lg:text-3xl text-2xl text-center ">
            <h2 className="text-greenish-200">Work Projects:</h2>
            <br />
            FoH Audio Engineer (freelance & HALE3)
            <br /> Personal studio project (freelance & event place) <br />
            Event organiser (freelance)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
