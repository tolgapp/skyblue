const ImageWithTitle = () => {
  return (
    <div className="relative overflow-hidden w-full h-[30rem] sm:h-[40rem] flex items-center justify-center mb-5">
      <div className="w-full h-full">
        <img
          src="/images/windrad.jpg"
          alt="snowed area with wind turbines"
          className="w-full h-96 sm:h-[46rem] object-cover "
        />
        <div className="absolute text-white top-1/2 pb-16 sm:pb-8 z-20 text-left max-w-[51rem] flex gap-2 flex-col mx-18">
          <h2 className="text-4xl sm:text-7xl font-bold">
            <span className="text-blue-700 font-black pr-4">
            LOVE 
            </span>
            NATURE.
          </h2>
          <p className="text-2xl sm:text-3xl text-shadow z-10">
            Clean and renewable energy from wind turbines.
          </p>
          <div className="h-11 bg-blue-700 -translate-y-11 z-0 -rotate-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithTitle;
