import PropTypes from "prop-types";

export const List = ({ label, isActive }) => {
  return (
    <li className=" font-semibold  ">
      <a
        href="#"
        className={`${
          isActive
            ? " bg-yellow Tablet:bg-white  text-black active p-[1rem_1.8rem] rounded-full font-bold uppercase text-[1rem] "
            : ""
        } `}
      >
        {label}
      </a>
    </li>
  );
};
List.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
};
