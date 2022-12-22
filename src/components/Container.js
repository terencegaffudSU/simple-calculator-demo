import Form from "./Form";
import Display from "./Display";
import { useState } from "react";
import styles from "./Container.module.css";

function Container() {
  const [answer, setAnswer] = useState(0);

  //Need the parseInt because the value taken is read as a String.
  const add = (x, y) => {
    const sum = parseInt(x) + parseInt(y);
    setAnswer(sum);
  };

  return (
    <div className="calculation-page">
      <h1 className={styles.header}>Simple adder app</h1>
      <Form calculate={add} />
      <Display answer={answer} />
    </div>
  );
}

export default Container;
