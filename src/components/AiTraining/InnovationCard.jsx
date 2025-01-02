function InnovationCard({ item }) {
  return (
    <div
      className={` mt-[60px] 2xl:mt-[120px] flex flex-col-reverse xl:flex-row items-center gap-[20px] xl:gap-[40px] 2xl:gap-[105px] ${
        item.isReversed ? "xl:flex-row-reverse" : ""
      }`}
    >
      <div className="3xl:w-[720px]">
        <h2
          className=" text-[22px] 2xl:text-[32px] text-white font-semibold mb-[20px]"
          data-aos="fade-up"
        >
          {item?.title}
        </h2>
        <ul>
          {item?.points?.map((point, index) => (
            <li
              key={point}
              className="flex items-start gap-3 mt-2 2xl:mt-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <p className="h-2 mt-2 rounded-full min-w-2 bg-paragraphColor"></p>
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div data-aos={item.isReversed ? "fade-right" : "fade-left"}>
        <img
          className=" h-[300px] 2xl:h-[510px] object-cover rounded-[12px] 2xl:rounded-[24px]"
          src={item?.image}
          alt="image"
        />
      </div>
    </div>
  );
}

export default InnovationCard;
