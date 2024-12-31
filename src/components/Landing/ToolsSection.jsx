import Container from "../container/Container";
import ToolsCard from "./ToolsCard";
import ToolsIcon from "../../assets/images/icon/tools-icon.svg";

const tools = [
  {
    id:1,
    title: "Client Outreach",
    description: "Pretium accumsan in ipsum convallis pellentesque metus",
    icon: ToolsIcon,
  },
  {
    id:2,
    title: "Client Outreach",
    description: "Pretium accumsan in ipsum convallis pellentesque metus",
    icon: ToolsIcon,
  },
  {
    id:3,
    title: "Client Outreach",
    description: "Pretium accumsan in ipsum convallis pellentesque metus",
    icon: ToolsIcon,
  },
];

function ToolsSection() {
  return (
    <section className="pt-[70px] pb-[120px] overflow-hidden">
      <Container>
        {/* title  */}
        <div className="lg:w-[495px] mx-auto mb-10">
          <h2 className="text-center title--lg" data-aos="fade-up">
            Explore Tools for bringing your vision to life
          </h2>
        </div>
        <div className="flex flex-col flex-wrap items-start justify-center 2xl:flex-row md:items-center row-custom">
          {tools.map((item, index) => (
            <div
              key={item.id}
              className="custom-wrap mt-[30px]   "
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ToolsCard item={item} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ToolsSection;
