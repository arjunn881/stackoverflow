import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import "../../pages/AskQuestion/AskQuestion.css";

export const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((state)=>{})
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log({questionTitle,questionBody,questionTags});
    dispatch();
  }

  const handleEnter =(e)=>{
    if(e.key === 'Enter'){
      setQuestionBody(questionBody + "\n");
    }
  }

  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you’re asking a question to another
                person
              </p>
              <input
                type="text"
                name="questionTitle"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>

            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question!
              </p>
              <textarea
                type="text"
                cols="30"
                rows="10"
                name="questionTitle"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                onkeydown={handleEnter}
              />
            </label>

            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about!</p>
              <input
                type="text"
                name="questionTitle"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder="e.g. (xml typescript wordpress)"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Review your question"
            className="review-btn"
          />
        </form>
      </div>
    </div>
  );
};
