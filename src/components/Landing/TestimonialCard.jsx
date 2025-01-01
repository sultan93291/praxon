import QuoteIcon from "../../assets/images/icon/quote.svg";

function TestimonialCard({ item }) {
  return (
    <div className=" mr-[6px] ml-[6px] 2xl:custom-wrap">
      <div className="lg:py-8 py-4 lg:px-6 px-3 lg:w-[545px] bg-faqBg rounded-[24px] border border-cardBorderColor flex items-start gap-4 relative">
        <div className="min-w-[48px] max-w-[48px] h-[48px] rounded-full overflow-hidden border border-white">
          <img
            className="object-cover w-full h-full"
            src={item?.image}
            alt="image"
          />
        </div>
        <div>
          <h3 className=" text-[14px] w-[250px] lg:w-auto lg:text-[20px] font-bold text-white">{item?.title}</h3>
          <p className=" text-xs w-[250px] lg:w-auto lg:text-[18px] text-gray-300 mt-3">
            {item?.feedback}
          </p>
          <p className=" text-[8px] lg:text-[18px] text-[#FFF5EB] mt-2">{item?.author}</p>
        </div>
        <img
          className="absolute w-3 h-3 lg:h-6 lg:w-6 right-3 bottom-4 lg:right-6 lg:bottom-8"
          src={QuoteIcon}
          alt="QuoteIcon"
        />
      </div>
    </div>
  );
}

export default TestimonialCard;
