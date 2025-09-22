const BonusBadge = () => {
  return (
    <div className="absolute z-50 -rotate-12 top-[26rem] sm:top-[44rem] lg:top-[37rem] right-4 sm:right-18 h-25 w-25 sm:h-40 lg:h-70 sm:w-40 lg:w-70 flex items-center justify-center rounded-full bg-teal-600 text-white">
      <h3 className="text-center sm:text-2xl lg:text-5xl font-bold">
        Get your welcome Bonus! <span className="text-md font-sans">*</span>
      </h3>
    </div>
  );
};

export default BonusBadge;
