import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [buttonValue, disableButton] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    disableButton(false)
  }; 

  const formSubmitHandler = event => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };
  
  

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" disabled={buttonValue}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
