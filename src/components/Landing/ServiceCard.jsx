function ServiceCard({ item }) {
  return (
    <div
      className={`flex flex-col 2xl:flex-row border-[1px] border-solid border-cardBorderColor px-3 lg:px-5 xl:py-16 lg:py-8 py-4 rounded-[15px] 2xl:border-transparent 2xl:px-0 2xl:py-0  items-center justify-between gap-20 ${
        item.isReversed ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className="xl:w-[630px] xl:h-[720px] overflow-hidden rounded-[34px]"
        data-aos="fade-up"
      >
        <img
          className="object-cover w-full h-full"
          src={item?.image}
          alt="image"
        />
      </div>
      <div className="2xl:w-[850px] flex flex-col items-center 2xl:items-start  ">
        <p
          className="py-2 px-[44px] border border-white text-[18px] rounded-[60px] inline-block"
          data-aos="fade-up"
        >
          {item?.category}
        </p>
        <h3
          className=" text-[22px] pl-[30px] 2xl:pl-0 md:text-[32px]   font-semibold mt-10"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          {item?.title}
        </h3>
        <p
          className="text-[18px] 2xl:pl-0 pl-[30px]  text-paragraphColor mt-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {item?.description}
        </p>
        <ul>
          {item?.features?.map((item, index) => (
            <li
              key={item?.id}
              className="flex items-start gap-3 mt-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img className="w-6 h-6 mt-2" src={item?.icon} alt="" />
              <div>
                <h3 className="text-[24px] font-medium text-white">
                  {item?.name}
                </h3>
                <p className="text-[18px] mt-3 text-paragraphColor">
                  {item?.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceCard;
