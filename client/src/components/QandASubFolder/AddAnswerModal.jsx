import React from 'react';
import axios from 'axios';
import './Modal.css';

const AddAnswer = ({ setModalStatus }) => {
  const headers = { headers: { Authorization: `${process.env.TOKEN}` } };

  const submitAnswer = (e) => {
    e.preventDefault();
    const answerData = {
      name: e.target[0].value,
      body: e.target[1].value,
      email: e.target[2].value,
      // HARDCODED
      photos: [],
    };
    // THIS IS HARDCODED BUT WILL NEED ANSWER STATE!
    console.log('body: ', answerData);
    axios.post(`${process.env.URL}/qa/questions/646305/answers`, answerData, headers)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
    setModalStatus({ name: '' });
  };

  const onModalClose = (e) => {
    e.preventDefault();
    setModalStatus({ name: '' });
  };

  return (
    <div id='modal'>
      <div className='overlay'>
        <div className='modal-content'>
          <div>
            <button className='modal-close' onClick={onModalClose}>X</button>
          </div>
            <h3 className='modal-header'>
              Submit Your Answer
            </h3>
            <form onSubmit={submitAnswer}>
              <label htmlFor="answer-body">
          Your Answer (mandatory)
                <div>
                  <input type="text" />
                </div>
              </label>
        <label htmlFor="answer-username">
          What is your nickname? (mandatory)
                <div>
                  <input type="text" placeholder="Example: jack543!" />
                </div>

        </label>
        <label htmlFor="answer-email">
          Your email (mandatory)
                <div>
                  <input type="text" placeholder="Why did you like the product or not?" />
                </div>

        </label>
        <button type="button">Add Photos</button>
              <button type="button">Add Answer</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default AddAnswer;
