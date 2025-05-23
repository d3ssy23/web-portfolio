function Header() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden mask-l-from-97% mask-r-from-97% mask-b-from-96% mask-t-from-96%  bg-[url(/header.jpg)]  bg-darkestgray px-1 py-4">
      {/* circle */}
      <div className="matrix-bg relative border-40 md:w-11/12 lg:w-2/3 border-darkergray rounded-full aspect-square ml-auto overflow-hidden">
        <img src="/header.jpg" className="w-full h-full object-cover" />
        <div className=" border-20 text-5xl bg-darkestgray/80 text-lightgray-300 text-center border-lightgray-300 w-2/3 p-5 absolute left-1/2 top-1/2 -translate-1/2 z-50">
          <h1 className=" matrix- container matrix-text text-5xl text-lightgray-300 font-bold">
            Hi, I'm Dessy
          </h1>
          <div className="rain"></div>
        </div>
      </div>
      {/* rect */}
    </section>
  );
}

export default Header;
