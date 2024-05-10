import PropTypes from "prop-types";
import { Reveal } from "./Reveal";
export const SecCont = ({ styleColor, image, content, title, index }) => {
  const direction = index === 1 ? "right" : "left";
  return (
    <>
      <div
        className={` p-[5rem_2rem] sm:p-[8rem] flex flex-col gap-7 self-center  Tablet:text-start text-center ${
          index === 1 && " Tablet:order-1"
        }`}
      >
        <Reveal direction={direction}>
          <h1 className="font-bold leading-[1.3em] " style={{ fontSize : 'clamp(2rem, -1.5rem + 3.8095vw, 3rem)'}}>{title}</h1>
        </Reveal>
        <Reveal direction={direction}>
          <p className=" font-semibold leading-[1.5em] max-w-[54ch]   text-very-dark-grayish-blue   ">
            {content}
          </p>
        </Reveal>
        <Reveal direction={direction}>
          <button className="w-fit uppercase font-bold relative isolate text-[0.954rem]  ">
            Learn More
            <div
              className={`absolute  -left-3 -right-3 -z-10 p-[0.3rem] rounded-full top-[0.9rem] opacity-45  ${styleColor}`}
            ></div>
          </button>
        </Reveal>
      </div>
      <Reveal direction={direction}>
        <picture>
          <img
            className=" align-bottom h-full w-full  object-cover"
            src={image}
            alt="my-eggs"
          />
        </picture>
      </Reveal>
    </>
  );
};

SecCont.propTypes = {
  styleColor: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  index: PropTypes.number,
};
