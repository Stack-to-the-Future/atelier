import React from 'react';
import axios from 'axios';
import './QandA.css';

const AddQuestion = ({ setModalStatus }) => {
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
          <h3>
            Ask Your Question
          </h3>
          <form onSubmit={submitQuestion}>
            <label htmlFor="question-productName">
              About the (Need to insert the name of product)
              <div>
                <input type="text" placeholder="Enter your question here" />
              </div>

            </label>
            <label htmlFor="question-username">
              For privacy reasons, do not use your full name or email address
              <div>
                <input type="text" placeholder="Example: jackson11!" />
              </div>

            </label>
            <label htmlFor="question-email">
              For authentication reasons you will not be emailed
              <div>
                <input type="text" placeholder="Why did you like the product or not?" />
              </div>

            </label>
            <button type="button">Add Question</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
