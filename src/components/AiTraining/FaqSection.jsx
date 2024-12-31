import { Accordion } from "@/components/ui/accordion";
import Container from "../container/Container";
import FaqSingle from "../Landing/FaqSingle";

const faqData = [
  {
    id: 1,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 2,
    question: "Can I change my plan later?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 4,
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

function FaqSection() {
  return (
    <section className="pb-[130px]">
      <Container>
        {/* title  */}
        <div className=" w-auto 2xl:w-[665px] mx-auto text-center pb-[30px]">
          <h3 className="title--lg" data-aos="fade-up">
            Frequently asked questions
          </h3>
          <p
            className="mt-8 font-medium text-paragraphColor"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="2xl:w-[1034px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <div key={faq.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <FaqSingle item={faq} />
              </div>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}

export default FaqSection;
