import PropTypes from "prop-types";
import { logo } from "../assets";
import { useState, useEffect } from "react";
import { List } from "./common";
import { menu } from "../assets";
export const Navbar = ({ MenuItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <header
      className={` fixed w-full text-white ${
        isScrolled
          ? " shadow-[0px_2px_15px] shadow-very-dark-grayish-blue p-[1.9rem_2.1rem] bg-[#3cbdfd] "
          : " p-[1.2rem]  Mobile:p-8   Tablet:p-[2.7rem_3.1rem]  "
      } transition-[0.5s] z-10 `}
    >
      <nav className=" flex flex-row justify-between items-center gap-5 Mobile:gap-0">
        <a href="#">
          <img className=" w-[8rem]  Mobile:w-full h-auto sm:h-8  " src={logo} alt="logo" />
        </a>
        <button
          className=" block Tablet:hidden"
          onClick={() => setOpenMenu((preval) => !preval)}
        >
          <img src={menu} alt="menu" />
        </button>
        <div

          className={`${
            openMenu
              ? " p-8 m-12 top-16  absolute bg-white text-dark-grayish-blue left-0 right-0 Tablet:static Tablet:bg-transparent Tablet:text-white Tablet:p-0 Tablet:m-0 "
              : "hidden"
          }  Tablet:block transition-all`}
        >
          <div className="arrow Tablet:hidden block"></div>
          <ul
            className={`flex flex-col Tablet:items-start items-center Tablet:flex-row  gap-12`}
          >
            {MenuItems?.map((data, index) => (
              <List key={index} label={data.label} isActive={data.isActive} />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
Navbar.propTypes = {
  MenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ).isRequired,
};
