import { Link } from "react-router-dom";

function RevolutionCard({ item }) {
  return (
    <div
      className={`flex flex-col 3xl:flex-row items-center gap-[74px] revolution-card mt-[72px] ${
        item.isReversed ? "3xl:flex-row-reverse" : ""
      }`}
    >
      <div className="xl:w-[722px]">
        <p className="text-[18px] capitalize" data-aos="fade-up">
          {item?.category}
        </p>
        <h2
          className="mt-5 capitalize title--sm"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          {item?.title}
        </h2>
        <p
          className="mt-5 text-paragraphColor"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="text-[20px] text-white font-medium">Challenge:</span>
          {item?.challenge}
        </p>
        <div className="mt-5" data-aos="fade-up" data-aos-delay="150">
          <h3 className="text-[20px] text-white font-medium">Solution:</h3>
          <ul>
            {item?.solutions.map((solution) => (
              <li
                key={solution}
                className="flex items-start gap-2 mt-2 text-paragraphColor"
              >
                <p className="h-2 mt-2 rounded-full min-w-2 bg-paragraphColor"></p>
                {solution}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-[20px] text-white font-medium">Results:</h3>
          <ul>
            {item?.results.map((result) => (
              <li
                key={result}
                className="flex items-start gap-2 mt-2 text-paragraphColor"
              >
                <p className="h-2 mt-2 rounded-full min-w-2 bg-paragraphColor"></p>
                {result}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 2xl:mt-8" data-aos="fade-up" data-aos-delay="250">
          <Link
            to={`${item?.actionLink}`}
            className="inline-block py-[10px] 2xl:py-[15px] px-[30px] 2xl:px-[66px] border-[2px] border-white rounded-[70px] duration-200 ease-in-out hover:bg-btnBg hover:text-white hover:border-btnBg"
          >
            {item?.actionLabel}
          </Link>
        </div>
      </div>
      <div className="flex items-start gap-8">
        <div>
          {item?.images.slice(0, 2).map((image, index) => (
            <img
              className={`img-${index} mt-8`}
              src={image}
              key={`first-${index}`}
              alt=""
              data-aos="zoom-in"
            />
          ))}
        </div>
        <div className="mt-[46px]">
          {item?.images.slice(-2).map((image, index) => (
            <img
              className={`img-${index} mt-8`}
              src={image}
              key={`first-${index}`}
              alt=""
              data-aos="zoom-in"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RevolutionCard;
