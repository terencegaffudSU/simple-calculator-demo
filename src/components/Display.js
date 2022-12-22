import styles from "./Display.module.css";
function Display({ answer }) {
  return <div className={styles.display}>Answer: {answer}</div>;
}

export default Display;
