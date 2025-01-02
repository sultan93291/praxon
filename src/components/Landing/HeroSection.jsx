import { Link } from "react-router-dom";
import ButtonCommon from "../buttons/ButtonCommon";
import HeroBanner from "../../assets/images/hero-banner.png";
import Container from "../container/Container";
import { Link as ScrollLink } from "react-scroll";

function HeroSection() {
  return (
    <section className="hero-section pt-[150px] 2xl:pt-[193px] pb-[80px] lg:pb-[120px] relative z-[1]">
      <Container>
        <div className="flex flex-col items-center justify-between 3xl:flex-row gap-y-[25px] lg:gap-y-[50px]">
          {/* text  */}
          <div className="2xl:w-[809px] xs:w-[340px] sm:w-[440px] md:w-[536px] lg:w-[700px] ">
            <h1 className="title--xl" data-aos="fade-up">
              Innovative AI, Designed Exclusively for Your Success
            </h1>
            <p
              className=" text-[14px] 2xl:text-[18px] text-paragraphColor lg:w-[500px] 2xl:w-[740px] mt-4 lg:mt-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Hirevision is used by numerous businesses, institutions, and
              recruiters to significantly enhance their screening and
              recruitment procedures.
            </p>
            <div className="flex items-center  gap-8 sm:gap-12 mt-[26px] lg:mt-[55px]">
              <Link
                to={"/industries/healthcare"}
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <ButtonCommon text="Case Studies" />
              </Link>
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                offset={-130}
                className="inline-block font-medium underline cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Our Services
              </ScrollLink>
            </div>
          </div>
          {/* image  */}
          <div className="xl:w-[660px] w-full lg:w-[550px]   h-[300px] lg:h-[400px] xl:h-[500px] 3xl:w-[500px] 3xl:h-[663px]" data-aos="zoom-in">
            <img
              className="w-full h-full rounded-[17px] 2xl:rounded-[34px] object-cover"
              src={HeroBanner}
              alt="HeroBanner"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
