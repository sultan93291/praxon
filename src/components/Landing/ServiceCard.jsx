function ServiceCard({ item }) {
  return (
    <div
      className={`flex flex-col 2xl:flex-row  lg:px-5 xl:py-16 lg:py-8 py-4 rounded-[15px]  2xl:px-0 2xl:py-0  items-center justify-between  gap-6 md:gap-10 2xl:gap-20 ${
        item.isReversed ? "2xl:flex-row-reverse" : ""
      }`}
    >
      <div
        className="2xl:w-[630px] xl:w-[500px] h-[350px] md:h-[450px] 2xl:h-[720px] overflow-hidden rounded-[10px] 2xl:rounded-[34px]"
        data-aos="fade-up"
      >
        <img
          className="object-cover w-full h-full"
          src={item?.image}
          alt="image"
        />
      </div>
      <div className=" md:w-[500px] lg:w-[700px] 2xl:w-[850px] flex flex-col items-center 2xl:items-start  ">
        <p
          className="py-2 px-[44px] border   border-white text-[18px] rounded-[60px] inline-block"
          data-aos="fade-up"
        >
          {item?.category}
        </p>
        <h3
          className=" text-[20px] text-center  md:text-[24px] 2xl:text-left 2xl:pl-0 2xl:text-[32px]   font-semibold mt-6 xl:mt-10"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          {item?.title}
        </h3>
        <p
          className=" text-[14px]  2xl:text-[18px] 2xl:pl-0  text-center 2xl:text-left  text-paragraphColor mt-3 2xl:mt-6"
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
                <h3 className=" text-[19px] xl:text-[20px] 2xl:text-[24px] font-medium text-white">
                  {item?.name}
                </h3>
                <p className=" text-[15px] 2xl:text-[18px] mt-3 text-paragraphColor">
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
