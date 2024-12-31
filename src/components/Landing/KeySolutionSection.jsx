import Container from "../container/Container"
import ToolsCard from "./ToolsCard";
import solutionIcon from "../../assets/images/icon/tools-icon.svg"

const aiFeatures = [
  {
    title: "Lead Scoring Models",
    description:
      "Expense tracking is taking control of your finances by monitoring where your money goes. It involves recording daily purchases.",
    icon: solutionIcon,
    layout: "half",
  },
  {
    title: "Campaign Automation",
    description:
      "Expense tracking is taking control of your finances by monitoring where your money goes. It involves recording daily purchases.",
    icon: solutionIcon,
    layout: "half",
  },
  {
    title: "HR Agents",
    description:
      "Expense tracking is taking control of your finances by monitoring where your money goes. It involves recording daily purchases.",
    icon: solutionIcon,
    layout: "half",
  },
  {
    title: "Customers Service AI",
    description:
      "Expense tracking is taking control of your finances by monitoring where your money goes. It involves recording daily purchases.",
    icon: solutionIcon,
    layout: "full",
  },
  {
    title: "Process Automation",
    description:
      "Expense tracking is taking control of your finances by monitoring where your money goes. It involves recording daily purchases.",
    icon: solutionIcon,
    layout: "full",
  },
  {
    title: "AI Strategy Development",
    description:
      "Expense tracking is taking control of your finances by monitoring where your money goes. It involves recording daily purchases.",
    icon: solutionIcon,
    layout: "half",
  },
  {
    title: "AI Training",
    description:
      "Expense tracking is taking control of your finances by monitoring where your money goes. It involves recording daily purchases.",
    icon: solutionIcon,
    layout: "half",
  },
  {
    title: "Client Outreach",
    description:
      "Expense tracking is taking control of your finances by monitoring where your money goes. It involves recording daily purchases.",
    icon: solutionIcon,
    layout: "half",
  },
];


function KeySolutionSection() {
  return (
    <section className="pb-[120px] overflow-hidden">
      <Container>
        {/* title  */}
        <div className="xl:w-[665px] mx-auto text-center pb-[90px]">
          <h3 className="title--lg" data-aos="fade-up">
            Our Key solutions
          </h3>
          <p
            className="mt-8 font-medium text-paragraphColor"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Harnessing advanced AI technologies and tools, we deliver innovative
            solutions to address your most critical business challenges.
          </p>
        </div>
        <div className="flex flex-wrap items-start row-custom">
          {aiFeatures.map((item, index) => (
            <div
              className={`custom-wrap mt-8 ${
                item.layout === "half" ? " w-[100%] 2xl:w-[33.33%]" : " w-[100%] 2xl:w-[50%]"
              }`}
              key={item?.title}
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

export default KeySolutionSection