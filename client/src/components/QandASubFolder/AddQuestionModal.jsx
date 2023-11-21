import React from 'react';
import axios from 'axios';
import './QandA.css';

const AddQuestion = () => {
  const headers = { headers: { Authorization: `${process.env.TOKEN}` } };
  const submitQuestion = (e) => {
    e.preventDefault();
    const body = {
      body: e.target[0].value,
      name: e.target[1].value,
      email: e.target[2].value,
      // at the moment hardcoded!!
      product_id: 40348,
    };
    console.log('body: ', body);
    axios.post(`${process.env.URL}/qa/questions`, body, headers)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <div>
    <h3>
      Ask Your Question
    </h3>
      <form onSubmit={submitQuestion}>
        <label>About the (Need to insert the name of product)</label>
        <div>
          <input type='text' placeholder='Enter your question here'></input>
        </div>
        <label>For privacy reasons, do not use your full name or email address</label>
        <div>
          <input type='text' placeholder='Example: jackson11!'></input>
        </div>
        <label>For authentication reasons you will not be emailed</label>
        <div>
          <input type='text' placeholder='Why did you like the product or not?'></input>
        </div>
        <button>Add Question</button>
      </form>
    </div>
  );
};

export default AddQuestion;
