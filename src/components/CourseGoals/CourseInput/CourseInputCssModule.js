import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import ButtonCssModule from "../../UI/Button/ButtonCssModule";
import styles from "./CourseInput.module.css";

const CourseInputCssModule = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form_control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>

        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <ButtonCssModule type="submit">Add Goal</ButtonCssModule>
    </form>
  );
};

export default CourseInputCssModule;
