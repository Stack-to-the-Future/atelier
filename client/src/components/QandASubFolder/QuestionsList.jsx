import React, { useState, useEffect, useCallback } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
import questionsAPIFunctions from '../../lib/questionsAPIFunctions.js';
import Question from './Question.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';
import './QandA.css';

const QuestionsList = ({
  searchTerm, setModalStatus, modalStatus, productName, productId,
}) => {
  const [questions, setQuestions] = useState([]);
  const [numOfQuestions, setNumOfQuestions] = useState(2);
  // const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [index, setIndex] = useState(2);
  // console.log(questions);

  const questionCount = 1000;
  const params = {
    count: questionCount,
    product_id: productId,
  };
  // const fetchData = useCallback(async () => {
  //   if (isLoading) return;
  //   setIsLoading(true);
  //   questionsAPIFunctions.getQuestions(params)
  //     .then((res) => {
  //       console.log(res.data);
  //       setQuestions((previousQuestions) => [...previousQuestions, res.data.results])
  //         .catch((err) => console.log(err));
  //       setIndex((prevIndex) => prevIndex + 1);
  //       setIsLoading(false);
  //     });
  // }, [index, isLoading]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await questionsAPIFunctions.getQuestions(params);
        setQuestions(response.data.results);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getData();
  }, []);

  const renderedQuestions = questions.slice(0, numOfQuestions);
  const filterFunc = (term, q) => q.question_body.toLowerCase().includes(term.toLowerCase());
  const filteredQuestions = renderedQuestions.filter((q) => filterFunc(searchTerm, q));

  useEffect(() => {
    const handleScroll = () => {
      // const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      const { scrollTop, clientHeight, scrollHeight } = document.getElementById('scrollable');
      if (scrollTop + clientHeight >= scrollHeight - 1000) {
        setNumOfQuestions(numOfQuestions + 2);
      }
    };
    // const div = document.getElementById('scrollable');
    // console.log(div);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [filteredQuestions]);
  // console.log('window: ', window);
  // console.log('docelement: ', document.getElementById('scrollable'));

  const onAddQuestionClick = (e) => {
    e.preventDefault();
    setModalStatus({ name: 'question' });
  };

  // const handleScroll = () => {
  //   if (window.innerHeight + document.documentElement.scrollTop
  //      !== document.documentElement.offsetHeight || isLoading) {
  //     return;
  //   }
  //   setNumOfQuestions(() => numOfQuestions + 4);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [isLoading]);

  // const questionCount = 1000;
  useEffect(() => {
    // const params = {
    //   count: questionCount,
    //   product_id: productId,
    // };
    questionsAPIFunctions.getQuestions(params)
      .then((response) => setQuestions(response.data.results))
      .catch((err) => console.error(err));
  }, [productId]);

  // const onLoadMoreQuestions = (e) => {
  //   e.preventDefault();
  //   setNumOfQuestions(numOfQuestions + 2);
  // };

  return (
    <div id="scrollable" data-testid="question-list-container">

      {modalStatus.name === 'question'
        && (
          <AddQuestionModal
            setModalStatus={setModalStatus}
            productName={productName}
            productId={productId}
          />
        )}
      <div id="scrollableDiv" className="questionlist">
        {/* <InfiniteScroll
          dataLength={numOfQuestions}
          next={() => setNumOfQuestions(numOfQuestions + 4)}
          hasMore={numOfQuestions < questions.length}
          loader={<p>loading more questions...</p>}
          endMessage={<p>No more questions for this product</p>}
          scrollableTarget="scrollableDiv"
        > */}
        {questions.length > 0
          && filteredQuestions.map((q) => (
            <Question
              key={q.question_id}
              question={q}
              setModalStatus={setModalStatus}
              modalStatus={modalStatus}
              productName={productName}
            />
          ))}
        {/* </InfiniteScroll> */}
      </div>
      <div>
        <span>
          <button type="button" className="list-bottom-buttons" data-testid="add-question-button" onClick={onAddQuestionClick}>ADD A QUESTION +</button>
        </span>
      </div>
    </div>
  );
};

export default QuestionsList;
