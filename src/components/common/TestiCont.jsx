import PropTypes from "prop-types";
import { Reveal } from "./Reveal";
export const TestiCont = ({ image, user, comment, role , index}) => {
  const animDirection = index === 0 ? 'left' : index === 1 ? 'top' : index === 2 ? 'right' : ''
  return (
    <div className=" flex flex-col items-center text-center gap-10 text-dark-grayish-blue hover:bg-dark-grayish-blue hover:text-white cursor-pointer  transition-all  hover:rounded-md hover:p-5  ">
      <Reveal direction={animDirection}>
        <picture>
          <img className="w-14 h-14 rounded-full" src={image} alt="user-pic" />
        </picture>
      </Reveal>
      <Reveal direction={animDirection}>
        <p className="  leading-[1.5em]  font-semibold max-w-[40ch]  ">
          {comment}
        </p>
      </Reveal>
      <div>
        <Reveal direction={animDirection}>
          <h2 className=" font-bold mb-2 text-very-dark-desaturated-blue">
            {user}
          </h2>
        </Reveal>
        <Reveal direction={animDirection}>
          <p className=" font-semibold">{role}</p>
        </Reveal>
      </div>
    </div>
  );
};

TestiCont.propTypes = {
  image: PropTypes.string,
  user: PropTypes.string,
  comment: PropTypes.string,
  role: PropTypes.string,
  index : PropTypes.number
};
