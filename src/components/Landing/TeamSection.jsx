import Container from "../container/Container";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Ibraheem from "../../assets/images/ibraheem.png";
import Azzam from "../../assets/images/azzam.png";
import TeamCard from "./TeamCard";

const teamMembers = [
  {
    name: "Ibraheem Altamimi",
    role: "Founder and CEO of PraxonAI",
    description:
      "An experienced medical researcher specializing in AI applications in healthcare and internal medicine. Additionally, as the founder of Publication Hub, he has demonstrated leadership in bridging technology and clinical practice. His vision positions PraxisAI as a leader in transforming medical diagnostics and patient care.",
    socialLinks: {
      linkedin: <FaLinkedin />,
      twitter: <FaXTwitter />,
      instagram: <FaInstagram />,
    },
    image: Ibraheem,
    isReversed: false,
  },
  {
    name: "Dr. Azzam Ahmad Azzam",
    role: "Co-Founder",
    description:
      "Dr. Azzam is a renowned physician-scientist-engineer with expertise in clinical research, specializing in evidence-based medicine, epidemiology, global burden of disease, global health, and public health. Their groundbreaking work has led to novel diagnostic techniques, targeted interventions, and personalized treatment strategies. With a strong publication record and a passion for addressing health disparities.",
    socialLinks: {
      linkedin: <FaLinkedin />,
      twitter: <FaXTwitter />,
      instagram: <FaInstagram />,
    },
    image: Azzam,
    isReversed: true,
  },
];

function TeamSection() {
  return (
    <section className=" pb-[100px] 2xl:pb-[130px]">
      <Container>
        {/* title  */}
        <div className="xl:w-[665px] mx-auto text-center  2xl:pb-[30px]">
          <h3 className="title--lg" data-aos="fade-up">
            Who we are Team
          </h3>
        </div>
        <div>
          {teamMembers.map((item) => (
            <div key={item.name}>
              <TeamCard item={item} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TeamSection;
