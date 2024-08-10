import PropTypes from "prop-types";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return <div className={styles.ErrorMessage}>{message}</div>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
