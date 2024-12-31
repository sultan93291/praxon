import AiInnovation from "@/components/AiTraining/AiInnovation";
import BookCallSection from "@/components/AiTraining/BookCallSection";
import FaqSection from "@/components/AiTraining/FaqSection";
import ElipsOne from "../assets/images/elips1.png";
import ElipsTwo from "../assets/images/elips2.png";
import ElipsThree from "../assets/images/elips3.png";

function AITrainingPage() {
  return (
    <div className="relative z-[1] overflow-x-hidden  ">
      <AiInnovation />
      <FaqSection />
      <BookCallSection />
      {/* shapes  */}
      <div>
        <img
          className="absolute top-0 left-0 z-[-1]"
          src={ElipsOne}
          alt=""
          data-aos="fade-in"
        />
        <img
          className="absolute top-[17%] right-[0] z-[-1]"
          src={ElipsTwo}
          alt=""
          data-aos="fade-in"
        />
        <img
          className="absolute top-[35%] left-0 z-[-1]"
          src={ElipsThree}
          alt=""
          data-aos="fade-in"
        />
      </div>
    </div>
  );
}

export default AITrainingPage;
