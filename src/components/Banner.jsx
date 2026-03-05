import bannerLeftImg from "../assets/vector1.png";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-6 text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT DIV */}
        <div className="relative rounded-xl p-8 text-white overflow-hidden shadow-lg bg-gradient-to-br from-[#2f20d0] to-[#5749c6]">
          {/* Left PNG */}
          <img
            src={bannerLeftImg}
            alt="Left Background"
            className="absolute left-0 bottom-0 w-36 opacity-100 mix-blend-lighten pointer-events-none"
          />

          {/* Right PNG */}
          <img
            src={bannerLeftImg} // left PNG reuse
            alt="Right Background"
            className="absolute right-0 top-0 w-36 opacity-100 mix-blend-lighten pointer-events-none scale-x-[-1]"
          />

          {/* Soft Glow Effect */}
          <div className="absolute inset-0 bg-white/10 blur-xl pointer-events-none"></div>

          {/* Content */}
          <h2 className="text-2xl font-bold mb-2 relative z-10">In-Progress</h2>
          <p className="text-4xl font-extrabold relative z-10">
            {inProgressCount}
          </p>
          {/* <p className="text-sm mt-2 opacity-90 relative z-10">
            বর্তমানে সমাধান প্রক্রিয়াধীন
          </p> */}
        </div>

        {/* RIGHT DIV */}
          {/* LEFT DIV */}
        <div className="relative rounded-xl p-8 text-white overflow-hidden shadow-lg bg-gradient-to-br from-[#54CF68] to-[#00827A] text-center">
          {/* Left PNG */}
          <img
            src={bannerLeftImg}
            alt="Left Background"
            className="absolute left-0 bottom-0 w-36 opacity-100 mix-blend-lighten pointer-events-none"
          />

          {/* Right PNG */}
          <img
            src={bannerLeftImg} // left PNG reuse
            alt="Right Background"
            className="absolute right-0 top-0 w-36 opacity-100 mix-blend-lighten pointer-events-none scale-x-[-1]"
          />

          {/* Soft Glow Effect */}
          <div className="absolute inset-0 bg-white/10 blur-xl pointer-events-none"></div>

          {/* Content */}
          <h2 className="text-2xl font-bold mb-2 relative z-10">Resolved</h2>
          <p className="text-4xl font-extrabold relative z-10">
            {resolvedCount}
          </p>
          {/* <p className="text-sm mt-2 opacity-90 relative z-10">
            বর্তমানে সমাধান প্রক্রিয়াধীন
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
