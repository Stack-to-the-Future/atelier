import React, { useState } from 'react';
import questionsAPIFunctions from '../../lib/questionsAPIFunctions.js';
import PhotoForm from './PhotoForm.jsx';
import AnswerForm from './AnswerForm.jsx';
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
    questionsAPIFunctions.addAnswer(questionId, answerData)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
    setModalStatus({ name: '', data: '' });
  };

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
    <div data-testid="question">
      {showPhotoForm
        ? (
          <PhotoForm
            showSetPhotoForm={showSetPhotoForm}
            modalFunctions={modalFunctions}
            photos={photos}
            photo={photo}
          />
        )
        : (
          <AnswerForm
            modalFunctions={modalFunctions}
            productName={productName}
            question={question}
            submitAnswer={submitAnswer}
            showSetPhotoForm={showSetPhotoForm}
            email={email}
            body={body}
            username={username}
          />
        )}
    </div>
  );
};

export default AddAnswer;
