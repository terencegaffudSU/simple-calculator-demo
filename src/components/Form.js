import { useState } from "react";
import styles from "./Form.module.css";

function Form({ calculate }) {
  //This is to handle the resetting of values.
  //This can be moved to the Container component or the values can be split into separate states
  const defaultValues = {
    one: 0,
    two: 0,
  };
  const [values, setValues] = useState(defaultValues);

  //This is to handle the addition. Once the button has been pressed, the values are sent back to the parent.
  const handleOnSubmit = (e) => {
    calculate(values.one, values.two);
    setValues(defaultValues);
  };

  //This is how a handler function can be used for multiple elements. Note that it tracks the event target's name as well.
  const handleOnChange = (e) => {
    const newValues = { ...values };
    newValues[e.target.name] = e.target.value;
    setValues(newValues);
  };

  return (
    <div className={styles.form}>
        <input
            type="number"
            value={values.one}
            name="one"
            onChange={handleOnChange}
        ></input>
        <span>+</span>
        <input
            type="number"
            value={values.two}
            name="two"
            onChange={handleOnChange}
        ></input>
        <button onClick={handleOnSubmit}>Submit</button>
    </div>
  );
}

export default Form;
