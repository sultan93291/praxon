import CalllBook from "../common/CalllBook";
import SpeakWithExpert from "../common/SpeakWithExpert";
import Container from "../container/Container";

function BookCallSection() {
  return (
    <section className="call-book pb-[120px]">
      <Container>
        {/* title  */}
        <div className=" w-[300px] 2xl:w-[665px] mx-auto text-center pb-[43px]">
          <h3 className="title--lg" data-aos="fade-up">
            Let’s Do It
          </h3>
          <p
            className="mt-8 font-medium text-paragraphColor"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Book a Call Today!
          </p>
        </div>
        <div className="2xl:mt-[-65px]">
          <CalllBook />
        </div>
        <div className="pt-[30px]">
          <SpeakWithExpert />
        </div>
      </Container>
    </section>
  );
}

export default BookCallSection;
