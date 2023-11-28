import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';

const AddAnswer = ({
  setModalStatus, question, productName, questionId,
}) => {
  const [body, setBody] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [photos, setPhotos] = useState([]);
  const [showPhotoForm, showSetPhotoForm] = useState(false);

  const headers = { headers: { Authorization: `${process.env.TOKEN}` } };

  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

  const submitAnswer = (e) => {
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
    const answerData = {
      name: username,
      body,
      email,
      photos,
    };
    axios.post(`${process.env.URL}/qa/questions/${questionId}/answers`, answerData, headers)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
    setModalStatus({ name: '', data: '' });
  };

  // shared with other modal!
  const modalFunctions = {
    close: (e) => {
      e.preventDefault();
      setModalStatus({ name: '', data: '' });
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
    photoChange: (e) => {
      setPhoto(e.target.value);
    },
    photosChange: (e) => {
      e.preventDefault();
      setPhotos([...photos, photo]);
    },
  };

  return (
    <div>
      {showPhotoForm
        ? (
          <div id="modal">
            <div className="overlay">
              <div className="modal-content">
                <div>
                  <button className="modal-close" type="button" onClick={() => showSetPhotoForm(false)}>X</button>
                </div>
                <div className="main-content">
                  <span className="answer-photos">
                    {photos.map((img) => <img className="answer-photo" src={img} alt="answer" key={img} />)}
                  </span>
                  <form>
                    <p>Select image: </p>
                    <input type="text" placeholder="please enter photo URL" className="modal-input" value={photo} onChange={modalFunctions.photoChange} />
                    {
                      photos.length > 4 ? <p>Only 5 photos allowed per answer</p> : <button className="submission" type="button" onClick={modalFunctions.photosChange}>Add Photo</button>
                    }
                    <button className="submission" type="button" onClick={() => showSetPhotoForm(false)}>Submit Photos</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
        : (
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
        )}
    </div>
  );
};

export default AddAnswer;
