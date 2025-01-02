import { useState } from "react";

function MissionSection() {
  const [isHoveredCard1, setIsHoveredCard1] = useState(false);
  const [isHoveredCard2, setIsHoveredCard2] = useState(false);
  const [isHoveredCard3, setIsHoveredCard3] = useState(false);
  return (
    <div>
      <h2
        className="mb-[27.77px] text-[#FFF] text-center text-[28px] 2xl:text-[56px] font-semibold leading-[120%]"
        data-aos="fade-up"
      >
        Our Mission is Simple Helping <br /> You Succeed
      </h2>
      <p
        className=" mb-[60px] 2xl:mb-[80px] text-[#A5ADBA] text-center text-[16px] 2xl:text-[20px] font-normal leading-[150%]"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        At Praxon AI, we aim to provide the support and structure you need to
        achieve <br className="hidden 2xl:block" /> your personal and
        professional goals. Whether you’re an individual looking to{" "}
        <br className="hidden 2xl:block" /> build better praxon or a team
        striving for more productivity, we’re here to help.
      </p>
      <div className="flex flex-col 2xl:flex-row items-center justify-center gap-3 mt-[50px] 2xl:mt-0 2xl:gap-6 mb-[139px]">
        <div
          className="w-full 2xl:w-[517px] h-auto 3xl:h-[317px] bg-[#131023] rounded-3xl p-[16px] 2xl:p-[32px] border border-transparent hover:border-blue-400 hover:shadow-lg transition-all duration-300 ease-in-out"
          onMouseEnter={() => setIsHoveredCard1(true)}
          onMouseLeave={() => setIsHoveredCard1(false)}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            className={`w-[64px] h-[64px] rounded-[320px] text-center text-[22.8px] 2xl:text-[28.8px]  leading-[140%] font-bold flex items-center justify-center transition-colors duration-300 ease-in-out ${
              isHoveredCard1 ? "bg-blue-400" : "bg-[#1A1533]"
            }`}
          >
            01
          </div>
          <h1 className="mt-[26px] text-[#FFF] text-[20.8px] 3xl:text-[28.8px] font-bold leading-[140%]">
            Personalized Coaching
          </h1>
          <p className="mt-[28.8px] text-[#A5ADBA]  text-[14px] 3xl:text-[16px] 4xl:text-[18px] font-normal leading-[160%]">
            Receive AI-driven coaching tailored to your unique{" "}
            <br className="hidden 4xl:block" /> habits and goals, so you can
            stay motivated and on <br className="hidden 4xl:block" /> track.
          </p>
        </div>

        <div
          className="bg-[#131023] w-full 2xl:w-[517px] rounded-3xl p-[16px] 2xl:p-[32px] border border-transparent hover:border-blue-400 hover:shadow-lg transition-all duration-300 ease-in-out"
          onMouseEnter={() => setIsHoveredCard2(true)}
          onMouseLeave={() => setIsHoveredCard2(false)}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            className={`w-[64px] h-[64px] rounded-[320px] text-center text-[22.8px] 3xl:text-[28.8px] font-bold flex items-center justify-center transition-colors duration-300 ease-in-out ${
              isHoveredCard2 ? "bg-blue-400" : "bg-[#1A1533]"
            }`}
          >
            02
          </div>
          <h1 className="mt-[26px] text-[#FFF] text-[20.8px] 3xl:text-[28.8px] font-bold leading-[140%]">
            Track Progress Effortlessly
          </h1>
          <p className="mt-[28.8px] text-[#A5ADBA] text-[14px] 3xl:text-[16px] 4xl:text-[18px] font-normal leading-[160%]">
            Our app makes it easy to visualize your progress, with insights that
            help you make data-driven adjustments to your routine.
          </p>
        </div>

        <div
          className=" w-full 2xl:w-[517px] 3xl:h-[317px] bg-[#131023] rounded-3xl p-[16px] 2xl:p-[32px] border border-transparent hover:border-blue-400 hover:shadow-lg transition-all duration-300 ease-in-out"
          onMouseEnter={() => setIsHoveredCard3(true)}
          onMouseLeave={() => setIsHoveredCard3(false)}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            className={`w-[64px] h-[64px] rounded-[320px] text-center text-[22.8px] 3xl:text-[28.8px] font-bold flex items-center justify-center transition-colors duration-300 ease-in-out ${
              isHoveredCard3 ? "bg-blue-400" : "bg-[#1A1533]"
            }`}
          >
            03
          </div>
          <h1 className="text-[20.8px] 3xl:text-[28.8px] font-bold mt-[26px]">
            For Teams and Individuals
          </h1>
          <p className="mt-[28.8px] text-[#A5ADBA] text-[14px] 3xl:text-[16px] 4xl:text-[18px] font-normal leading-[160%]">
            Whether you’re working alone or with a group, our{" "}
            <br className="hidden 4xl:block" /> platform adapts to suit your
            needs, fostering success on every level.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionSection;
