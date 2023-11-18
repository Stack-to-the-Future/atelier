import React from 'react';
import axios from 'axios';

const AddAnswer = () => {
  const submitAnswer = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    // build the new Answer from the values onSubmit
    // send it in an axios post req
  };

  return (
    <div>
    <h3>
      Submit Your Answer
    </h3>
      <form onSubmit={submitAnswer}>
        <label>Your Answer (mandatory)</label>
        <div>
          <input type='text'></input>
        </div>
        <label>What is your nickname? (mandatory)</label>
        <div>
          <input type='text' placeholder='Example: jack543!'></input>
        </div>
        <label>Your email (mandatory)</label>
        <div>
          <input type='text' placeholder='Why did you like the product or not?'></input>
        </div>
        <button>Add Photos</button>
        <button>Add Answer</button>
      </form>
    </div>
  );
};

export default AddAnswer;
