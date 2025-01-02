import Container from "../container/Container";
import AiOne from "../../assets/images/ai1.png";
import AiTwo from "../../assets/images/ai2.png";
import AiThree from "../../assets/images/ai3.png";
import AiFour from "../../assets/images/ai4.png";
import InnovationCard from "./InnovationCard";

const topics = [
  {
    id: 1,
    title: "Applications of Artificial Intelligence in Healthcare",
    points: [
      "Learn AI terminology and the ML pipeline.",
      "Explore AI applications in diagnosis, treatment, and productivity.",
      "Discuss AI career pathways, evaluate ML research, and understand Big Data in healthcare.",
      "Address barriers to AI implementation and future developments.",
    ],
    image: AiOne,
    isReversed:false,
  },
  {
    id: 2,
    title: "Machine Learning Algorithms",
    points: [
      "Learn AI terminology and the ML pipeline.",
      "Explore AI applications in diagnosis, treatment, and productivity.",
      "Discuss AI career pathways, evaluate ML research, and understand Big Data in healthcare.",
      "Address barriers to AI implementation and future developments.",
    ],
    image: AiTwo,
    isReversed:true,
  },
  {
    id: 3,
    title: "Machine Learning Pipelines & Implementation",
    points: [
      "Learn AI terminology and the ML pipeline.",
      "Explore AI applications in diagnosis, treatment, and productivity.",
      "Discuss AI career pathways, evaluate ML research, and understand Big Data in healthcare.",
      "Address barriers to AI implementation and future developments.",
    ],
    image: AiThree,
    isReversed:false,
  },
  {
    id: 4,
    title: "Developing ML Algorithms",
    points: [
      "Learn AI terminology and the ML pipeline.",
      "Explore AI applications in diagnosis, treatment, and productivity.",
      "Discuss AI career pathways, evaluate ML research, and understand Big Data in healthcare.",
      "Address barriers to AI implementation and future developments.",
    ],
    image: AiFour,
    isReversed:true,
  },
];

function AiInnovation() {
  return (
    <section className=" pt-[120px] 2xl:pt-[185px] pb-[135px]">
      <Container>
        {/* title  */}
        <div className="text-center 3xl:w-[1224px] mx-auto">
          <h1 className="mt-4 2xl:mt-8 title--lg" data-aos="fade-up">
            Revolutionizing Healthcare Through AI Innovation
          </h1>
          <p
            className="text-[18px] text-paragraphColor mt-5 xl:mt-7 leading-[30px] 2xl:w-[678px] mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            At Praxon AI, we leverage cutting-edge AI technologies to
            revolutionize industries and drive success.
          </p>
        </div>
        <div className="pt-[30px]">
          {topics.map((item) => (
            <InnovationCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default AiInnovation;
