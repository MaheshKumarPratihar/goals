import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import ButtonCssModule from "../../UI/Button/ButtonCssModule"
import "./CourseInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.inValid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.inValid ? "red" : "#ccc")};
    background: ${(props) => (props.inValid ? "#ffd7d7" : "")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  /* &.invalid input {  used as dynamic styles
    border-color: red;
    background: #ffd7d7;
  }

  &.invalid label {
    color: red;
  } */
`;

const CourseInput = (props) => {
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
      <FormControl inValid={!isValid}>
        {/* <FormControl className={!isValid ? "invalid" : ""}> */}
        {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}> */}
        {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label> */}
        <label>Course Goal</label>
        {/* <input
          style={{
            borderColor: !isValid ? "red" : "black",
            background: !isValid ? "salmon" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        /> */}
        <input type="text" onChange={goalInputChangeHandler} />
        {/* </div> */}
      </FormControl>
      {/* <Button type="submit">Add Goal</Button> */}
      <ButtonCssModule type="submit">Add Goal</ButtonCssModule>
    </form>
  );
};

export default CourseInput;
