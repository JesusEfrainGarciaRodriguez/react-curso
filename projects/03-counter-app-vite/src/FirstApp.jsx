import PropTypes from "prop-types";

const FirstApp = ({ title, subTitle, number }) => {

  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{number}</p>
    </>
  );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    number: PropTypes.number
}

FirstApp.defaultProps = {
    title: "No hay titulo",
    subTitle: "No hay subTitle",
    number: "No hay number"
}

export default FirstApp;
