import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';

const AddAnswer = ({ setModalStatus, question, productName }) => {
  const [body, setBody] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const headers = { headers: { Authorization: `${process.env.TOKEN}` } };

  // TO DO:
  // NEED PRODUCT DATA FROM APP
  // NEED QUESTION DATA

  const submitAnswer = (e) => {
    e.preventDefault();
    const answerData = {
      name: username,
      body,
      email,
      // HARDCODED
      photos: [],
    };
    // THIS IS HARDCODED BUT WILL NEED ANSWER STATE!
    // HARDCODED TO ONLY REPLY TO FIRST QUESTION!
    axios.post(`${process.env.URL}/qa/questions/646305/answers`, answerData, headers)
      .then((response) => console.log(response))
      // ADD AXIOS GET REQUEST TO THIS
      // how do I do this?? -- talk to the guys about lifting the questions call to the app comp
      // .then(() => axios.get(..., headers))
      .catch((err) => console.error(err));
    setModalStatus({ name: '' });
  };

  // shared with other modal!
  const modalFunctions = {
    close: (e) => {
      e.preventDefault();
      setModalStatus({ name: '' });
    },
    bodyChange: (e) => {
      setBody(e.target.value);
    },
    usernameChange: (e) => {
      setUsername(e.target.value);
    },
    emailChange: (e) => {
      setEmail(e.target.value);
    },
  };

  return (
    <div id="modal">
      <div className="overlay">
        <div className="modal-content">
          <div>
            <button className="modal-close" type="button" onClick={modalFunctions.close}>X</button>
          </div>
          <div className="main-content">
            <h3 className="modal-header">
              Submit Your Answer
            </h3>
            <h4 className="sub-header">
              {productName}
              :
              {' '}
              {question}
            </h4>
            <form onSubmit={submitAnswer}>
              {/* BODY */}
              <label htmlFor="answer-body" className="modal-label">
                Your Answer (mandatory)
                <div>
                  <textarea type="text" className="modal-answer" maxLength="1000" value={body} onChange={modalFunctions.bodyChange} />
                </div>
              </label>
              {/* USERNAME */}
              <label htmlFor="answer-username" className="modal-label">
                What is your nickname? (mandatory)*
                <div>
                  <input type="text" className="modal-input" placeholder="Example: jack543!" maxLength="60" value={username} onChange={modalFunctions.usernameChange} />
                  <p>For privacy reasons, do not use your full name or email address</p>
                </div>
              </label>
              {/* EMAIL */}
              <label htmlFor="answer-email" className="modal-label">
                Your email (mandatory)*
                <div>
                  <input type="text" className="modal-input" placeholder="Example: jack@email.com" maxLength="60" value={email} onChange={modalFunctions.emailChange} />
                  <p>For authentication reasons, you will not be emailed</p>
                </div>
              </label>
              {/* INVALID FIELD INFO */}
              <button className="submission" type="button">Add Photos</button>
              <button className="submission" type="button" onClick={submitAnswer}>Add Answer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAnswer;

// 1.3.6.5. Submit answer (button)
// A button by which the answer can be submitted.
// Upon selecting this button the form’s inputs should be validated.
// If there are any invalid entries, the submission should be prevented, and a
// warning message will appear. This message should be titled “You must enter the following:”
// This error will occur if:
// Any mandatory fields are blank
// The email address provided is not in correct email format
// The images selected are invalid or unable to be uploaded.
