import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FaqSingle({ item }) {
  return (
    <AccordionItem
      value={`item-${item.id}`}
      className="bg-faqBg border border-cardBorderColor rounded-[8px] mt-3 2xl:mt-6 p-3 lg:p-6 faq-accordion"
    >
      <AccordionTrigger className=" text-[14.1px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-medium text-white">
        {item?.question}
      </AccordionTrigger>
      <AccordionContent className="text-[13px] 2xl:text-base text-paragraphColor mt-4 leading-[20px] 2xl:leading-[28px]">
        {item?.answer}
      </AccordionContent>
    </AccordionItem>
  );
}

export default FaqSingle;
