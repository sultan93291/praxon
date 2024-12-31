function InnovationCard({ item }) {
  return (
    <div
      className={`mt-[120px] flex flex-col xl:flex-row items-center gap-[105px] ${
        item.isReversed ? "flex-row-reverse" : ""
      }`}
    >
      <div className="3xl:w-[720px]">
        <h2
          className="text-[32px] text-white font-semibold mb-[20px]"
          data-aos="fade-up"
        >
          {item?.title}
        </h2>
        <ul>
          {item?.points?.map((point, index) => (
            <li
              key={point}
              className="flex items-start gap-3 mt-4"
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
          className="h-[510px] object-cover rounded-[24px]"
          src={item?.image}
          alt="image"
        />
      </div>
    </div>
  );
}

export default InnovationCard;
