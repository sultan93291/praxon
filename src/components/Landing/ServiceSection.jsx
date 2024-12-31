import Container from "../container/Container";
import ServiceCard from "./ServiceCard";
import FeatureIcon from "../../assets/images/icon/fetures-icon.svg";
import { Element } from "react-scroll";

const aiSolutions = [
  {
    id: 1,
    category: "AI technologies",
    title: "Unlock Your Potential with NextMind's AI Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis risus cursus aliquam amet sem. Arcu elementum.",
    features: [
      {
        id: 1,
        name: "Real-Time Analytics",
        description:
          "Vivamus nibh ut ultrices amet quis. Arcu elementum, quis elit ipsum commodo consectetur.",
        icon: FeatureIcon,
      },
      {
        id: 2,
        name: "Computer Vision",
        description:
          "Vivamus nibh ut ultrices amet quis. Arcu elementum, quis elit ipsum commodo consectetur.",
        icon: FeatureIcon,
      },
      {
        id: 3,
        name: "Chatbot Development",
        description:
          "Vivamus nibh ut ultrices amet quis. Arcu elementum, quis elit ipsum commodo consectetur.",
        icon: FeatureIcon,
      },
    ],
    image: "https://i.ibb.co.com/9vTzWzW/service1.png",
    isReversed: false,
  },
  {
    id: 2,
    category: "AI technologies",
    title: "Unlock Your Potential with NextMind's AI Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis risus cursus aliquam amet sem. Arcu elementum.",
    features: [
      {
        id: 1,
        name: "AI Solutions",
        description:
          "Vivamus nibh ut ultrices amet quis. Arcu elementum, quis elit ipsum commodo consectetur.",
        icon: FeatureIcon,
      },
      {
        id: 2,
        name: "Real-Time Analytics",
        description:
          "Vivamus nibh ut ultrices amet quis. Arcu elementum, quis elit ipsum commodo consectetur.",
        icon: FeatureIcon,
      },
      {
        id: 3,
        name: "Real-Time Analytics",
        description:
          "Vivamus nibh ut ultrices amet quis. Arcu elementum, quis elit ipsum commodo consectetur.",
        icon: FeatureIcon,
      },
    ],
    image: "https://i.ibb.co.com/3Wsq3xy/service2.png",
    isReversed: true,
  },
];

function ServiceSection() {
  return (
    <Element name="services">
      <section className="mb-[120px]" id="service">
        <Container>
          {/* title  */}
          <div className="xl:w-[665px] mx-auto text-center">
            <h3 className="title--lg" data-aos="fade-up">
              Our Services
            </h3>
            <p
              className="mt-8 font-medium text-paragraphColor"
              data-aos="fade-up" data-aos-delay="100"
            >
              Harnessing advanced AI technologies and tools, we deliver
              innovative solutions to address your most critical business
              challenges.
            </p>
          </div>
          <div>
            {aiSolutions?.map((item) => (
              <div key={item.id} className="mt-[120px]">
                <ServiceCard item={item} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </Element>
  );
}

export default ServiceSection;
