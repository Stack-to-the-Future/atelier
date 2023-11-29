import React from 'react';
import './Modal.css';

const AnswerForm = ({
  modalFunctions, productName, question, submitAnswer, showSetPhotoForm, email, body, username,
}) => (
  <div id="modal" data-testid="add-answer-modal">
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
              Your Answer (mandatory)*
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
            <button className="submission" type="button" onClick={() => showSetPhotoForm(true)}>Add Photos</button>
            <button className="submission" type="button" onClick={submitAnswer}>Add Answer</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default AnswerForm;
