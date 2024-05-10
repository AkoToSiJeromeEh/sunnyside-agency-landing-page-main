import PropTypes from "prop-types";
import { Reveal } from "./Reveal";
export const SecCard = ({ title, content, image , index , mobileImg }) => {
  return (

    <div
      className={` bg-no-repeat bg-cover grid content-end gap-5  bg-center  text-center p-[4rem_1.3rem]   sm:p-[4rem_10rem] ${index === 0 ? 'text-dark-desaturated-cyan ' : 'text-dark-blue'} min-h-[38rem] `}
      style={{ backgroundImage: `url(${image})  ` ,  "@media screen and (max-width: 900px)": {
        backgroundImage: `url(${mobileImg})`
      },}}
    >
      <Reveal direction='top'>
       <h1 className=" font-bold text-3xl  " >{title}</h1>
      </Reveal>
      <Reveal direction='top'>
      <p className=" font-medium leading-[1.5em] tracking-[0.02em] max-w-[40ch]    ">
        {content}
      </p>
      </Reveal>
    </div>

  );
};
SecCard.propTypes = {
  image: PropTypes.string,
  mobileImg : PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  index : PropTypes.number
};
