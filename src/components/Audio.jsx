const Audio = () => {
  return (
    <section className="flex flex-col text-2xl md:text-3xl gap-8 max-w-7xl mx-auto px-3 py-10">
      <h2 className="text-9xl w-full flex justify-end text-right text-white">
        audio
      </h2>
      <div className="w-full flex md:flex-row flex-col gap-8 text-3xl">
        <div className="md:w-1/2 ">
          <p className="text-white mb-10 pl-10 p-3 bg-darkergray">
            <div className="text-greenish-200 text-3xl">
              <h2>
                Skills & Concepts: <br />
              </h2>
            </div>
            <ul>
              <li className="list-disc">Studio/Live Recordings </li>
              <li className="list-disc"> FoH engineering</li>
              <li className="list-disc"> Field recording mic arrangements</li>
              <li className="list-disc">
                On-stage signal routing and cable management
              </li>
              <li className="list-disc">
                {" "}
                On-stage signal routing and cable management
              </li>
              <li className="list-disc">Post-production </li>
              <li className="list-disc"> FX processing </li>
              <li className="list-disc">Dante Certification</li>
              <li className="list-disc"> PA system Calibration (Sonarworks)</li>
              <li className="list-disc"> FX chains, sub groups, bus routing</li>
              <li className="list-disc"> Analog/digital routing </li>
            </ul>
          </p>
        </div>
        <div className="md:w-1/2 mb-10 pl-10 bg-darkergray p-3 text-3xl">
          <p className="text-whiteish text-2xl pl-10">
            <div className="text-greenish-200 text-3xl">
              <h2>
                Audio Technologies & Tools: <br />
              </h2>
            </div>
            <ul className="text-3xl">
              <li className="list-disc">
                {" "}
                DAWs (Ableton, Logic X, Reaper, Studio One)
              </li>
              <li className="list-disc">VS3,AU,AAX</li>
              <li className="list-disc"> Digital/Analog Mixers</li>
              <li className="list-disc">Amps/DI/Cabinets</li>
              <li className="list-disc"> Sonarworks SoundID</li>
              <li className="list-disc">Clocking BNC </li>
              <li className="list-disc"> Matlab (filter Designer)</li>
              <li className="list-disc">JUCE(in progress..) </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Audio;
