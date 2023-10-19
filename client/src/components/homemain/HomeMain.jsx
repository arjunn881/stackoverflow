import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../homemain/HomeMain.css";
import { QuestionList } from "./QuestionList";
import { useSelector } from "react-redux";

export const HomeMain = () => {
  const user = useSelector((state) => state.currentUserReducer);;
  const location = useLocation();
  const navigate = useNavigate();


  const questionsList = useSelector(state => state.questionsReducer)
  console.log(questionsList.data)


  const redirect = () => {
    navigate("/Auth");
  };

  const checkAuth = () => {
    if (user === null) {
      redirect();
    } else navigate("/AskQuestion");
  };
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}

        <button className="ask-btn" onClick={checkAuth}>
          Ask Question
        </button>
      </div>
      <div className="">
        {questionsList.data === null ? (
          <h1>Loading....</h1>
        ) : (
          <>
            <p>{questionsList.data.length} Questions</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};
