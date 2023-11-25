import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';

const AddQuestion = ({ setModalStatus, productName }) => {
  const headers = { headers: { Authorization: `${process.env.TOKEN}` } };
  const [body, setBody] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  // TO DO:
  // NEED PRODUCT DATA FROM APP??

  const submitQuestion = (e) => {
    e.preventDefault();
    const data = {
      body,
      name: username,
      email,
      // at the moment hardcoded!!-- eventually passed from app!
      product_id: 40348,
    };
    axios.post(`${process.env.URL}/qa/questions`, data, headers)
      .then((response) => console.log(response))
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
          <h3 className="modal-header">
            Ask Your Question
          </h3>
          <h4 className="sub-header">
            {/* INSERT VALUES */}
            {productName}
            :
          </h4>
          <form onSubmit={submitQuestion}>
            <label htmlFor="question-productName" className="modal-label">
              About the (Need to insert the name of product)
              <div>
                <textarea type="text" className="modal-answer" placeholder="Enter your question here" maxLength="1000" value={body} onChange={modalFunctions.bodyChange} />
              </div>

            </label>

            <div>
              <input type="text" className="modal-input" placeholder="Example: jackson11!" maxLength="60" value={username} onChange={modalFunctions.usernameChange} />
              <p htmlFor="question-username" className="modal-label">
                For privacy reasons, do not use your full name or email address
              </p>
            </div>
            <div>
              <input type="text" className="modal-input" placeholder="Why did you like the product or not?" maxLength="60" value={email} onChange={modalFunctions.emailChange} />
              <p htmlFor="question-email" className="modal-label">
                For authentication reasons you will not be emailed
              </p>
            </div>
            <button className="submission" type="button" onClick={submitQuestion}>Add Question</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
