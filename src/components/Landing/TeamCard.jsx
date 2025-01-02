import { Link } from "react-router-dom";

function TeamCard({ item }) {
  return (
    <div
      className={`flex flex-col xl:flex-row items-center justify-center gap-[25px] 2xl:gap-[52px] mt-[50px] 2xl:mt-[88px]   py-4 lg:py-10 rounded-[15px]  2xl:px-0 2xl:py-0   ${
        item?.isReversed ? "xl:flex-row-reverse" : ""
      }`}
    >
      <div
        className="xl:w-[540px] lg:w-[400px] w-[300px] md:w-[350px] lg:h-[400px]  h-[300px] md:h-[350px] 3xl:h-[536px]"
        data-aos={item.isReversed ? "fade-left" : "fade-right"}
      >
        <img
          className="w-full h-full object-cover rounded-[10px] 2xl:rounded-[16px]"
          src={item?.image}
          alt="team-img"
        />
      </div>
      <div className="lg:w-[630px]">
        <h4
          className=" title--sm"
          data-aos={item.isReversed ? "fade-right" : "fade-left"}
        >
          {item?.name}
        </h4>
        <p
          className="mt-2 text-sm 2xl:mt-4"
          data-aos={item.isReversed ? "fade-right" : "fade-left"}
          data-aos-delay="50"
        >
          {item?.role}
        </p>
        <p
          className="mt-6   leading-[26px]"
          data-aos={item.isReversed ? "fade-right" : "fade-left"}
          data-aos-delay="150"
        >
          {item?.description}
        </p>
        <ul className="flex items-center gap-6 mt-6 lg:gap-8">
          <li data-aos="zoom-in" data-aos-delay="300">
            <Link to={"/"}>{item?.socialLinks?.linkedin}</Link>
          </li>
          <li data-aos="zoom-in" data-aos-delay="350">
            <Link to={"/"}>{item?.socialLinks?.twitter}</Link>
          </li>
          <li data-aos="zoom-in" data-aos-delay="400">
            <Link to={"/"}>{item?.socialLinks?.instagram}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TeamCard;
