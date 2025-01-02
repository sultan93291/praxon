import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";
import clientOne from "../../assets/images/c1.png";
import clientTwo from "../../assets/images/c2.png";
import clientThree from "../../assets/images/c3.png";
import clientFour from "../../assets/images/c4.png";
import Starts from "../../assets/images/icon/stars.svg"

const testimonials = [
  {
    id: 1,
    title: "It's like having a personal coach!",
    feedback:
      "I've tried many wellbeing apps, but this one stands out. The AI really understands my needs and offers tailored advice.",
    author: "Ibraheen, Founder (Publication Hub)",
    image: clientOne,
  },
  {
    id: 2,
    title: "Fantastic app!",
    feedback:
      "The user interface is intuitive, and the insights I gain from it are invaluable. I feel more in control of my wellbeing than ever before.",
    author: "Ibraheen, Founder (Publication Hub)",
    image: clientTwo,
  },
  {
    id: 3,
    title: "Highly effective!",
    feedback:
      "I'm impressed with how this app adapts to my preferences. The AI really helps me focus on what matters most for my wellbeing.",
    author: "Ibraheen, Founder (Publication Hub)",
    image: clientThree,
  },
  {
    id: 4,
    title: "It's like having a personal coach!",
    feedback:
      "I've tried many wellbeing apps, but this one stands out. The AI really understands my needs and offers tailored advice.",
    author: "Ibraheen, Founder (Publication Hub)",
    image: clientFour,
  },
];

function TestimonialSection() {
  return (
    <section className=" mt-[50px] pb-[50px] 2xl:pb-[68px] overflow-x-hidden">
      {/* title  */}
      <div className="xl:w-[665px] mx-auto text-center pb-[20px] 2xl:pb-[30px]">
        <h3 className="title--lg" data-aos="fade-up">
          What Our Users Say
        </h3>
        <p
          className="mt-6 font-medium text-paragraphColor"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          See what our users have to say about their experience with our AI
          habit-training app.
        </p>
      </div>
      <p
        className="mx-auto w-[96px] h-[16px] mt-0 2xl:mt-5 mb-8 2xl:mb-12"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <img src={Starts} alt="stars" />
      </p>
      <div className="testimonial-marquee mt-[60px] 2xl:mt-0 " data-aos="fade-left">
        <Marquee>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} item={testimonial} />
          ))}
        </Marquee>
      </div>
      <div className="mt-3 testimonial-marquee xl:mt-9" data-aos="fade-right">
        <Marquee direction="right">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} item={testimonial} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default TestimonialSection;
