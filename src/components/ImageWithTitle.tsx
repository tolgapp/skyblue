const ImageWithTitle = () => {
  return (
    <div className="relative overflow-hidden w-full h-[23rem] sm:h-[44rem] flex items-center justify-center mb-5">
      <div className="w-full h-full">
        <img
          src="/images/windrad.jpg"
          alt="snowed area with wind turbines"
          className="w-full h-96 sm:h-[46rem] object-cover "
        />
        <div className="absolute text-white top-[14rem] sm:top-[30rem] pb-16 sm:pb-8 z-20 text-left max-w-[51rem] flex gap-1 sm:gap-2 flex-col mx-4 sm:mx-18">
          <h2 className="text-4xl sm:text-7xl font-bold text-shadow">
            <span className="text-blue-700 font-black pr-4 text-shadow-light">
              LOVE
            </span>
            NATURE.
          </h2>
          <p className="text-2xl sm:text-3xl text-shadow z-10">
            Clean, renewable energy from Mother Nature.
          </p>
          <div className="h-11 sm:h-18 bg-blue-700 -translate-y-15 sm:-translate-y-21 md:-translate-y-12 z-0 -rotate-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithTitle;
