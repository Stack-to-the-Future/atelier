import React, { useState } from 'react';
import questionsAPIFunctions from '../../lib/questionsAPIFunctions';
import './Modal.css';

const AddQuestion = ({ setModalStatus, productName, productId }) => {
  const [body, setBody] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

  const submitQuestion = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      alert('You must enter valid email');
      setEmail('');
      return;
    }
    if (username === '' || body === '') {
      alert('You must enter username/body');
      return;
    }
    e.preventDefault();
    const data = {
      body,
      name: username,
      email,
      product_id: productId,
    };
    questionsAPIFunctions.addQuestion(data)
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
    <div id="modal" data-testid="add-question-modal">
      <div className="overlay">
        <div className="modal-content">
          <div>
            <button className="modal-close" type="button" onClick={modalFunctions.close}>X</button>
          </div>
          <div className="main-content">
            <h3 className="modal-header">
              Ask Your Question
            </h3>
            <h4 className="sub-header">
              About the
              {' '}
              {productName}
            </h4>
            <form onSubmit={submitQuestion}>
              <div className="field-container">
                <label htmlFor="question-productName" className="modal-label">
                  Your Question (mandatory)*
                  <div>
                    <textarea type="text" className="modal-answer" placeholder="Enter your question here" maxLength="1000" value={body} onChange={modalFunctions.bodyChange} />
                  </div>
                </label>
              </div>
              <div className="field-container">
                <label htmlFor="question-productName" className="modal-label">
                  What is your nickname (mandatory)*
                  <input type="text" className="modal-input" placeholder="Example: jackson11!" maxLength="60" value={username} onChange={modalFunctions.usernameChange} />
                  <p htmlFor="question-username" className="sub-text">
                    For privacy reasons, do not use your full name or email address
                  </p>
                </label>
              </div>
              <div className="field-container">
                <label htmlFor="question-productName" className="modal-label">
                  What is your email (mandatory)*
                  <input type="text" className="modal-input" placeholder="Example: jackson@hotmail.com" maxLength="60" value={email} onChange={modalFunctions.emailChange} />
                  <p htmlFor="question-email" className="sub-text">
                    For authentication reasons you will not be emailed
                  </p>
                </label>
              </div>
              <button className="submission" type="button" onClick={submitQuestion}>Add Question</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
