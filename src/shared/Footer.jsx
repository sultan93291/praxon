import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/logo.svg";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Container from "../components/container/Container";

function Footer() {
  return (
    <footer className=" bg-footerBg w-full pt-5 2xl:pt-20 rounded-tl-[30px] 2xl:rounded-tl-[64px] 2xl:rounded-tr-[64px] rounded-tr-[30px] ">
      <Container>
        {/* footer top  */}
        <div className="flex mt-6 2xl:mt-0  px-4 2xl:px-0   flex-col xl:flex-row items-start 2xl:items-center justify-around 3xl:justify-between gap-y-[20px] ">
          {/* logo  */}
          <div
            className="  w-[150px] xl:w-[200px] 2xl:w-[270px] md:h-10"
            data-aos="fade-up"
          >
            <Link to={"/"} className="block">
              <img className="w-full h-full" src={Logo} alt="Logo" />
            </Link>
          </div>
          {/* footer menu  */}
          <ul className="flex  items-start  gap-[10px] 2xl:gap-[40px]   3xl:gap-[85px] menu">
            <li data-aos="fade-up" data-aos-delay="100">
              <Link to={"/"}>Home</Link>
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <Link to={"/"}>Features</Link>
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <Link to={"/about-us"}>About Us</Link>
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <Link to={"/"}>Integrations</Link>
            </li>
          </ul>
          {/* social media  */}
          <ul className="flex items-center gap-3 xl:gap-6 social-icons">
            <li data-aos="zoom-in" data-aos-delay="50">
              <Link to={"/"}>
                <FaWhatsapp />
              </Link>
            </li>
            <li data-aos="zoom-in" data-aos-delay="100">
              <Link to={"/"}>
                {" "}
                <FaInstagram />
              </Link>
            </li>
            <li data-aos="zoom-in" data-aos-delay="200">
              <Link to={"/"}>
                <AiOutlineMail />
              </Link>
            </li>
          </ul>
        </div>
        {/* footer bottom  */}
        <div className="flex flex-col xl:flex-row gap-y-4 items-center justify-between pt-3 xl:pt-6 pb-6 2xl:pb-9 border-t border-[#373737] mt-[45px] 2xl:mt-[95px]">
          <p className="text-[12px] md:text-[13px]" data-aos="fade-up">
            © Copyrights 2024 | All rights reserved by Praxon Ai{" "}
          </p>
          <ul className="footer-bottom-menu w-full xl:w-auto  flex    text-xs  sm:items-center justify-center gap-3 md:gap-6 2xl:gap-[30px]">
            <li data-aos="fade-up" data-aos-delay="100">
              <Link to={"/"}>Privacy Policy</Link>
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <Link to={"/"}>Terms of Service</Link>
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <Link to={"/"}>Cookies Settings</Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
