import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import ButtonCommon from "../components/buttons/ButtonCommon";
import { useEffect, useRef, useState } from "react";
import Container from "../components/container/Container";

function Navbar() {
  const [isDropdownShow, setIsDropDownShow] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSideBar, setisSideBar] = useState(false);
  const location = useLocation();
  const isDropdownActive = location.pathname.startsWith("/industries");
  const dropdownRef = useRef(null);

  console.log(isSideBar);

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropDownShow(false); 
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", function () {
      var scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);
  console.log(isSticky);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[50]   duration-200 ease-in-out ${
        isSticky ? "bg-primaryBg py-[26px]" : "bg-transparent py-[26px] xl:py-[44px]"
      }`}
    >
      <Container>
        <div className="flex flex-row items-center justify-between ">
          {/* logo */}
          <Link
            to={"/"}
            className="block w-[150px] 2xl:w-[200px]  3xl:w-[270px] h-10"
            data-aos="fade-in"
          >
            <img className="w-full h-full" src={Logo} alt="logo" />
          </Link>
          {/* menus & button */}
          {/* for bigger device */}
          <div className="hidden 2xl:flex items-center gap-[50px]  4xl:gap-[250px]">
            {/* menu */}
            <ul className="menu flex items-center gap-[70px]">
              <li data-aos="fade-in" data-aos-delay="100">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li
                className="relative dropdown"
                onMouseEnter={() => setIsDropDownShow(true)}
                onMouseLeave={() => setIsDropDownShow(false)}
                data-aos="fade-in"
                data-aos-delay="200"
              >
                <p
                  className={`trigger flex items-center gap-2 cursor-pointer ${
                    isDropdownActive ? "active" : ""
                  }`}
                >
                  Industries
                  <IoIosArrowDown />
                </p>
                <ul
                  className={`dropdown-menu absolute ${
                    isDropdownShow
                      ? "opacity-100 visible top-9"
                      : "opacity-0 invisible top-10"
                  }`}
                >
                  <li>
                    <NavLink to={"/industries/healthcare"}>Health Care</NavLink>
                  </li>
                </ul>
              </li>
              <li data-aos="fade-in" data-aos-delay="300">
                <NavLink to={"/ai-training"}>AI Training</NavLink>
              </li>
              <li data-aos="fade-in" data-aos-delay="400">
                <NavLink to={"/about-us"}>About Us</NavLink>
              </li>
            </ul>
            {/* button */}
            <Link to={"/schedule-call"} data-aos="fade-in" data-aos-delay="300">
              <ButtonCommon text="Schedule a call" />
            </Link>
          </div>

          {/* for smaller device */}
          {/* side bar trigger */}
          <div
            onClick={() => {
              setisSideBar(!isSideBar);
            }}
            className="h-[35px] relative w-[35px] border-[1px] border-solid border-white rounded-[8px] flex 2xl:hidden cursor-pointer flex-col gap-y-[6px] items-center justify-center z-[999] "
          >
            <span className=" h-[1px] w-[70%] bg-white "></span>
            <span className=" h-[1px] w-[70%] bg-white "></span>
            <span className=" h-[1px] w-[70%] bg-white "></span>
          </div>

          {/* Sidebar for smaller devices */}
          <div
            className={`${
              isSideBar ? "flex" : "hidden"
            } bg-primaryBg absolute top-0 left-0 h-[100vh] w-[100vw] overflow-y-hidden flex 2xl:hidden  flex-col items-center justify-center gap-[35px] z-50`}
          >
            {/* Menu */}
            <ul className="menu flex flex-col items-center justify-center gap-[25px] ">
              <li
                onClick={() => {
                  setisSideBar(!isSideBar);
                }}
                data-aos="fade-in"
                data-aos-delay="100"
              >
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li
                className="relative dropdown"
                onClick={() => {
                  setIsDropDownShow(!isDropdownShow);
                }}
                data-aos="fade-in"
                data-aos-delay="200"
              >
                <p
                  className={`trigger text-[8px]    flex items-center gap-2 cursor-pointer ${
                    isDropdownActive ? "active" : ""
                  }`}
                >
                  <span className=" flex items-center gap-1 text-[14px] sm:text-[16px] lg:text-[18px]">
                    Industries
                    <IoIosArrowDown />
                  </span>
                </p>
                <ul
                  ref={dropdownRef}
                  className={` bg-primaryBlack py-3 w-[110px] flex  justify-center rounded-[12px] overflow-hidden min-h-[100px] duration-200 ease-in-out absolute  ${
                    isDropdownShow
                      ? "opacity-100 visible top-0 left-[-125px]"
                      : "opacity-0 invisible top-0"
                  }`}
                >
                  <li
                    onClick={() => {
                      setisSideBar(!isSideBar);
                    }}
                    className="z-[11111] "
                  >
                    <NavLink to={"/industries/healthcare"}>
                      {" "}
                      <span className="text-sm"> Health Care </span>{" "}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li data-aos="fade-in" data-aos-delay="300">
                <NavLink
                  onClick={() => {
                    setisSideBar(!isSideBar);
                  }}
                  to={"/ai-training"}
                >
                  AI Training
                </NavLink>
              </li>
              <li data-aos="fade-in" data-aos-delay="400">
                <NavLink
                  onClick={() => {
                    setisSideBar(!isSideBar);
                  }}
                  to={"/about-us"}
                >
                  About Us
                </NavLink>
              </li>
            </ul>
            {/* Button */}
            <Link
              onClick={() => {
                setisSideBar(!isSideBar);
              }}
              to={"/schedule-call"}
              data-aos="fade-in"
              data-aos-delay="300"
            >
              <ButtonCommon text="Schedule a call" />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
