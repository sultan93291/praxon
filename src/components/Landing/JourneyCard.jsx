import { Link } from "react-router-dom";
import ButtonCommon from "../buttons/ButtonCommon";

function JourneyCard() {
  return (
    <div
      className="py-[116px] px-[20px] 2xl:px-[316px] bg-faqBg rounded-[48px] text-center"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h3 className=" text-[28px] md:text-[36px] lg:title--xl">Ready to dive in? Start your journey today</h3>
      <p className=" text-xs lg:text-[18px] text-paragraphColor mt-6">
        Schedule posts, launch cold DMs, and track performance with seamless
        automation.
      </p>
      <div className="mt-[72px]">
        <Link to={"/schedule-call"}>
          <ButtonCommon text="Schedule a call" />
        </Link>
      </div>
    </div>
  );
}

export default JourneyCard;
