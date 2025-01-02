import Container from "../container/Container";
import JourneyCard from "./JourneyCard";
import Shape from "../../assets/images/pattern/linear-shape.png";

function JourneySection() {
  return (
    <section
      className=" pt-[40px] 2xl:pt-[160px] pb-[60px] relative z-[1]"
      data-aos="fade-in"
    >
      <Container>
        <div>
          <div>
            <JourneyCard />
          </div>
          <div>
            <img
              className="absolute top-[10px]  2xl:top-[100px] left-1/2 translate-x-[-50%] z-[-1]"
              src={Shape}
              alt=""
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default JourneySection;
