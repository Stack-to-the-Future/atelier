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
      // ADD AXIOS GET REQUEST TO THIS
      .catch((err) => console.error(err));
    setModalStatus({ name: '' });
  };

  const onModalClose = (e) => {
    e.preventDefault();
    setModalStatus({ name: '' });
  };

  return (
    <div id="modal">
      <div className="overlay">
        <div className="modal-content">
          <div>
            <button className="modal-close" type="button" onClick={onModalClose}>X</button>
          </div>
          <div className="main-content">
            <h3 className="modal-header">
              Submit Your Answer
            </h3>
            <form onSubmit={submitAnswer}>
              <label htmlFor="answer-body" className="modal-label">
                Your Answer (mandatory)
                <div>
                  <textarea type="text" className="modal-answer" />
                </div>
              </label>
              <label htmlFor="answer-username" className="modal-label">
                What is your nickname? (mandatory)
                <div>
                  <input type="text" className="modal-input" placeholder="Example: jack543!" />
                </div>

              </label>
              <label htmlFor="answer-email" className="modal-label">
                Your email (mandatory)
                <div>
                  <input type="text" className="modal-input" placeholder="Why did you like the product or not?" />
                </div>

              </label>
              <button className="submission" type="button">Add Photos</button>
              <button className="submission" type="button">Add Answer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAnswer;
