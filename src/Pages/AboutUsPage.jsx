

import MissionSection from "@/components/AboutUs/MissionSection";
import bannerPic from "../assets/images/about-us-banner.png";
import Container from "../components/container/Container";
import ContactSection from "@/components/AboutUs/ContactSection";

function AboutUsPage() {

  return (
    <section className="relative overflow-x-hidden ">
      <Container>
        <h2
          className=" mt-[135px] md:mt-[185px] text-[28px] 2xl:text-[40px] font-semibold mb-[27px] text-white text-center leading-[132%]"
          data-aos="fade-up"
        >
          Who We Are
        </h2>
        <p
          className=" mb-[50px] 2xl:mb-[116px] text-[16px] 2xl:text-[18px] text-paragraphColor text-center font-normal leading-[172%]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          At Praxon AI, we are passionate about empowering individuals and teams
          to build better habits. Our goal is to provide simple, <br />{" "}
          effective tools that help users track, monitor, and improve their
          daily routines
        </p>
        {/* banner  */}
        <div
          className="mx-auto 2xl:max-w-[1560px] h-[350px] md:h-[450px] 2xl:h-[713px] mb-[60px] 2xl:mb-[160px] rounded-[18px]   2xl:rounded-[32px] overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            className="object-cover w-full h-full"
            src={bannerPic}
            alt="About Us"
          />
        </div>
        {/* {/ This is the div section /} */}
        <div className="flex flex-col 3xl:flex-row 4xl:w-[1560px] gap-[20px] 2xl:gap-[80px] mb-[120px] 2xl:mb-[178.87px]">
          <div>
            <h2
              className="text-[#FFF] text-center 3xl:text-left text-[28px] 2xl:text-[40px]  3xl:text-[56px] font-semibold leading-[120%]"
              data-aos="fade-right"
            >
              Transforming the Way You Build <br /> Praxon AI
            </h2>
            {/* {/ 4+ Years Expericed Card /} */}
            <div className="flex flex-wrap items-center justify-center 3xl:items-start 3xl:justify-start   2xl:gap-6 gap-3 mx-auto mt-[30px] 2xl:mt-[75px]">
              <div
                className=" w-[422px] bg-[#131023] h-[190px] rounded-3xl pt-[32px] pb-[24px] pr-[24px] pl-[24px]"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="mb-[5.58px] text-[#FFF] text-[28px] 2xl:text-[56px]  font-bold leading-[120%]">
                  4+
                </h2>
                <p className="text-[#A5ADBA] text-[18px] font-normal leading-[160%]">
                  Years of experience
                </p>
              </div>
              {/* {/ 90% of teams experienced Card /} */}
              <div
                className="w-[422px] bg-[#131023] h-[190px] rounded-3xl pt-[32px] pb-[24px] pr-[24px] pl-[24px]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2 className="mb-[13.58px] text-[#FFF] text-[28px] 2xl:text-[56px] font-extrabold leading-[120%]">
                  90%
                </h2>
                <p className="text-[#A5ADBA] text-[18px] font-normal leading-[160%]">
                  of teams experience enhanced productivity with our tools.
                </p>
              </div>
            </div>
          </div>
          {/* {/ This is the second div /} */}
          <div className="" data-aos="fade-left">
            <p className="text-[#A5ADBA] text-center 3xl:text-left text-[16px] 2xl:text-[20px] font-normal leading-[150%]">
              We believe that small, consistent actions lead to significant{" "}
              <br className="hidden 2xl:block" />
              change. That’s why we designed Praxon AI to offer personalized{" "}
              <br className="hidden 2xl:block" />
              insights, tailoredcoaching, and easy-to-use tracking tools to{" "}
              <br className="hidden 2xl:block" />
              guideyou toward lasting improvement.
            </p>
          </div>
        </div>
        <MissionSection />
        {/* {/ Company Values Section start /} */}
        <div className="flex flex-col gap-y-12  justify-center  3xl:flex-row 3xl:gap-[150px] 4xl:gap-[96px] mt-[320px] mb-[320px] 2xl:mb-[443.84px] sm:mb-[243px] 3xl:mb-[100px] 4xl:w-[1600px] h-[523px] ">
          {/* {/ This is the first div /} */}
          <div className="flex flex-col items-center ">
            <h1
              className="mb-[27.58px] w-[320px] xl:w-[501px] text-center 2xl:text-left text-[#FFF] text-[28px] 2xl:text-[56px] font-semibold leading-[120%]"
              data-aos="fade-up"
            >
              Company Values
            </h1>
            <p
              className="text-[#A5ADBA] text-center 2xl:text-left  text-[14px] 2xl:text-[20px] font-normal leading-[150%]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              At Praxon AI, we believe that our collective{" "}
              <br className="hidden 2xl:block" /> strength lies in shared
              values. These core principles <br className="hidden 2xl:block" />{" "}
              guide how we work and collaborate every day.
            </p>
          </div>
          {/* {/ This is the second div /} */}
          <div className="relative flex flex-col w-full 2xl:justify-center 2xl:items-center ">
            {/* {/ Innovation Section has been done /} */}
            <div
              className="2xl:w-[1018.6px] 3xl:w-[800px] 4xl:w-[1018.6px]  h-auto 2xl:h-[135px] bg-[#131023] rounded-3xl mb-3 2xl:mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex flex-col 2xl:flex-row pt-[24px] pb-[24px] pl-[32px] pr-[32px] gap-2 2xl:gap-4 flex-1">
                <h2 className="2xl:w-[469px] 3xl:w-[200px] 4xl:w-[469px] text-[#FFF] text-[22px] 2xl:text-[24px] font-semibold leading-[168%]">
                  Innovation
                </h2>
                <p className="2xl:w-[469px] h-auto 2xl:h-[87px] text-[#A5ADBA] text-[14px] 2xl:text-[18px] font-normal leading-[160%]">
                  We empower individuals to work autonomously, driving <br />
                  creativity and innovation through trust and <br />{" "}
                  independence.
                </p>
              </div>
            </div>

            {/* {/ Integrity Section has been done /} */}
            <div
              className="2xl:w-[1018.6px] 3xl:w-[800px] 4xl:w-[1018.6px] h-auto 2xl:h-[105.59px] bg-[#3C365F] rounded-3xl mb-3 2xl:mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-col 2xl:flex-row pt-[24px] pb-[24px] pl-[32px] pr-[32px] gap-4 flex-1">
                <h2 className="2xl:w-[469px] 3xl:w-[200px] 4xl:w-[469px] text-[#FFF]  text-[22px] 2xl:text-[24px] font-semibold leading-[168%]">
                  Integrity
                </h2>
                <p className="2xl:w-[469px] h-auto 2xl:h-[87px] text-[#A5ADBA] text-[14px] 2xl:text-[18px] font-normal leading-[160%]">
                  Our adaptive approach allows us to evolve and meet the needs
                  of our users, ensuring continuous progress.
                </p>
              </div>
            </div>

            {/* {/ Client-Centricity Section has been done /} */}
            <div
              className="2xl:w-[1018.6px] 3xl:w-[800px] 4xl:w-[1018.6px] h-auto 2xl:h-[105.59px] bg-[#1D1935] rounded-3xl mb-3 2xl:mb-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex flex-col 2xl:flex-row pt-[24px] pb-[24px] pl-[32px] pr-[32px] gap-4 flex-1">
                <h2 className="2xl:w-[469px] 3xl:w-[200px] 4xl:w-[469px] text-[#FFF] text-[22px]  2xl:text-[24px] font-semibold leading-[168%]">
                  Client-Centricity
                </h2>
                <p className="2xl:w-[469px] h-auto 2xl:h-[87px] text-[#A5ADBA] text-[14px] 2xl:text-[18px] font-normal leading-[160%]">
                  Every team member is responsible for their role, <br />{" "}
                  ensuring mutual trust and excellence in every task.
                </p>
              </div>
            </div>

            {/* {/ Excellence Section has been done /} */}
            <div
              className="2xl:w-[1018.6px] 3xl:w-[800px] 4xl:w-[1018.6px] 2xl:h-[105.59px] bg-[#1D1935] rounded-3xl mb-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex flex-col 2xl:flex-row pt-[24px] pb-[24px] pl-[32px] pr-[32px] gap-4 flex-1">
                <h2 className="2xl:w-[469px] 3xl:w-[200px] 4xl:w-[469px] text-[#FFF] text-[22px]  2xl:text-[24px] font-semibold leading-[168%]">
                  Excellence
                </h2>
                <p className="2xl:w-[469px] h-auto 2xl:h-[87px] text-[#A5ADBA] text-[14px] 2xl:text-[18px] font-normal leading-[160%]">
                  Every team member is responsible for their role, <br />{" "}
                  ensuring mutual trust and excellence in every task.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <ContactSection />
    </section>
  );
}

export default AboutUsPage;
