import CalllBook from "@/components/common/CalllBook";
import Container from "@/components/container/Container";
import ElipsOne from "../assets/images/elips1.png";

function ScheduleCallPage() {
  return (
    <section className="pt-[185px] pb-[165px] relative z-[1]">
      <Container>
        {/* title  */}
        <div className="3xl:w-[1224px] mx-auto text-center pb-[70px]">
          <h3 className="title--lg" data-aos="fade-up">
            Discover the Power of AI with Praxon.
          </h3>
          <p
            className="mt-6 font-medium text-paragraphColor"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Ready to Transform?
          </p>
        </div>
        <div className="mt-[-65px]">
          <CalllBook />
        </div>
      </Container>
      {/* shapes  */}
      <div>
        <img className="absolute top-0 left-0 z-[-1]" src={ElipsOne} alt="" data-aos="fade-in" />
      </div>
    </section>
  );
}

export default ScheduleCallPage;
