import Carousel from '@/components/carousel';
import { useEffect, useState } from 'react';
import './styles.css';
import { NavLink, useParams } from 'react-router-dom';
import { useGetQuestionsQuery } from '@/services/api/quiz-api';

export const Quiz = ({ quest }: any) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [testResult, setTestResult] = useState({});
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { question, answers } = quest[activeQuestion];
  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 },
    );
    if (activeQuestion !== quest.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer.right) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number: number) =>
    number > 9 ? number : `0${number}`;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h2 className="h2">This test will help determine your current level.</h2>
      <div className="quiz-container bg-black-light m-4">
        {!showResult ? (
          <div>
            <h2 className="text-white">{question}</h2>
            <ul>
              {answers.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer.answer}
                  className={
                    selectedAnswerIndex === index ? 'selected-answer' : null
                  }
                >
                  {answer.answer}
                </li>
              ))}
            </ul>
            <div className="flex-right">
              <button
                onClick={onClickNext}
                disabled={selectedAnswerIndex === null}
              >
                {activeQuestion === quest.length - 1 ? 'Finish' : 'Next'}
              </button>
              <div className="pl-4">
                <span className="active-question-no">
                  {addLeadingZero(activeQuestion + 1)}
                </span>
                <span className="total-question">
                  /{addLeadingZero(quest.length)}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="result">
            <h3>Result</h3>
            <p>
              Total Question: <span>{quest.length}</span>
            </p>
            <p>
              Total Score:<span> {result.score}</span>
            </p>
            <p>
              Correct Answers:<span> {result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers:<span> {result.wrongAnswers}</span>
            </p>
            <p>
              Assigned level:
              <span>
                {result.correctAnswers < quest.length / 2
                  ? ' Junior'
                  : ' Middle'}
              </span>
            </p>
            <NavLink to="/user">
              <button onClick={() => setShowResult(false)}>
                Go to user Profile
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
