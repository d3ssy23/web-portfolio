const Dev = () => {
  return (
    <section className="flex flex-col text-2xl md:text-3xl gap-8 max-w-7xl mx-auto px-3">
      <div className="w-full flex justify-end">
        <h2 className="text-9xl text-white">dev</h2>
      </div>

      <div className="w-full flex md:flex-row flex-col gap-8 text-3xl">
        <div className=" text-right text-whiteish md:w-1/2">
          <ul className="text-left">
            <div className=" mb-10 pl-10 bg-darkergray p-3">
              <h2 className="text-greenish-200">
                Stack: <br />
              </h2>
              <li className="list-disc"> C (C99)</li>
              <li className="list-disc"> C++ (modern C++/11/14/17/20)</li>
              <li className="list-disc">Bash scripts</li>
              <li className="list-disc">
                {" "}
                Matlab (scripting, signal plotting)
              </li>
              <li className="list-disc"> OpenGL </li>
              <br />
            </div>
            <div className=" mb-10 pl-10 bg-darkergray p-3">
              <h2 className="text-greenish-200">
                Tools: <br />
              </h2>
              <li className="list-disc"> GCC</li>
              <li className="list-disc">Valgrind</li>
              <li className="list-disc"> Make</li>
              <li className="list-disc">CMake</li>
              <li className="list-disc"> Git & Github</li>
            </div>
          </ul>
        </div>

        <div className="md:w-1/2 text-white">
          <ul className="text-left mb-10 pl-10 bg-darkergray p-3">
            <h2 className="text-greenish-200">
              Platforms: <br />
            </h2>
            <li className="list-disc">Linux (Ubuntu, Arch, Fedora)/Unix</li>
            <li className="list-disc">Windows (VM)</li>
            Skills & Concept:
            <li className="list-disc">Memory management</li>
            <li className="list-disc">System calls</li>
            <li className="list-disc">Data structures & Algorithms OOP</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Dev;
