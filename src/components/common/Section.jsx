import PropTypes from "prop-types";

export const Section = ({ children, style }) => {
  return (
    <section
      className={`grid  w-full ${
        style
          ? `${style}`
          : "  Tablet:grid-cols-[1fr_1fr] grid-cols-1   "
      } min-h-[35rem]   `}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
};
