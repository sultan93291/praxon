import { Link } from "react-router-dom";
import ButtonCommon from "../buttons/ButtonCommon";

function SpeakWithExpert() {
  return (
    <div
      className="bg-[#05060A] py-[20px] px-4 sm:px-8 lg:px-0 2xl:py-[85px] rounded-[20px] md:rounded-[40px] flex flex-col items-center "
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <h2 className="text-center font-semibold text-[16px] sm:text-[20px] xl:text-[40px] mb-[55px] text-[#FFF] leading-[150%] xl:tracking-[-1.2px]">
        Our Success Story Could Be Next. Let’s <br className="hidden lg:block" /> Make It Happen.
      </h2>
      <Link to={"/schedule-call"} >
        <ButtonCommon text={"Speak with our Experts"} />
      </Link>
    </div>
  );
}

export default SpeakWithExpert;
