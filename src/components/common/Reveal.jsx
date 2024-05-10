import { useInView, useAnimation, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const Reveal = ({ children , direction }) => {
  const ref = useRef();
  const currView = useInView(ref, { once: true });
  const mainControls = useAnimation();


  useEffect(() => {
    if (currView) {
      mainControls.start("show");
    }
  }, [currView]);

  const variants = {

    hidden: {
      opacity: 0,
      x: direction === "left" ? -75 : direction === "right" ? 75 : 0,
      y: direction === "top" ? -75 : direction === "bottom" ? 75 : 0,
    },
    show: { opacity: 1, x: 0 , y:0 },
  };

  return (
    <div ref={ref}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node,
  direction : PropTypes.string
};
