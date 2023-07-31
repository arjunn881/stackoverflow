import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import upvotes from "../../asset/sort-up.svg";
import downvotes from "../../asset/sort-down.svg";
import "../Questions/Questions.css";
import { Avatar } from "../../components/avatar/Avatar";
import { DisplayAnswer } from "./DisplayAnswer";
import { useDispatch, useSelector } from "react-redux";
import moment from  'moment';
import { postAnswer } from "../../actions/question";

import copy from 'copy-to-clipboard';

// var questionsList = [
//   {
//     _id: "1",
//     upVotes: 3,
//     downVotes: 2,
//     noOfAnswers: 2,
//     questionTitle: "What is a function?",
//     questionBody: "It meant to be",
//     questionTags: ["java", "node js", "react js", "mongo db", "express js"],
//     userPosted: "Arjun",
//     userId: 1,
//     askedOn: "jan 1",
//     answer: [
//       {
//         answerBody: "Answer",
//         userAnswered: "Nayak",
//         answeredOn: "jan 2",
//         userId: 2,
//       },
//     ],
//   },
//   {
//     _id: "2",
//     upVotes: 3,
//     downVotes: 2,
//     noOfAnswers: 1,
//     questionTitle: "What is a function?",
//     questionBody: "It meant to be",
//     questionTags: ["javascript", "R", "python"],
//     userPosted: "Arjun",
//     askedOn: "jan 1",
//     userId: 1,
//     answer: [
//       {
//         answerBody: "Answer",
//         userAnswered: "Nayak",
//         answeredOn: "jan 2",
//         userId: 2,
//       },
//     ],
//   },
//   {
//     _id: "3",
//     upVotes: 3,
//     downVotes: 2,
//     noOfAnswers: 2,
//     questionTitle: "What is a function?",
//     questionBody: "It meant to be",
//     questionTags: ["javascript", "R", "python"],
//     userPosted: "Arjun",
//     askedOn: "jan 1",
//     userId: 1,
//     answer: [
//       {
//         answerBody: "Answer",
//         userAnswered: "Nayak",
//         answeredOn: "jan 2",
//         userId: 2,
//       },
//     ],
//   },
// ];

export const QuestionsDetails = () => {
  const questionsList = useSelector((state) => state.questionsReducer);

  const { id } = useParams();

  const [answer, setAnswer] = useState("");

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const url = 'http://localhost:3000/'



  const User = useSelector((state) => state.currentUserReducer);

  const handlePostAnswer = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to answer a question!");
      Navigate("/Auth");
    } else {
      if (answer === "") {
        alert("Enter an answer before submitting!");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: answer,
            userAnswered: User.result.name,
          })
        );
      }
    }
  };

  const handleShare =()=>{
    copy(url+location.pathname)
  }
  const handleDelete =()=>{
    
  }
  return (
    <div className="question-details-page">
      {questionsList.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div className="" key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img src={upvotes} alt="" width="18" />
                      <p>{question.upVotes - question.downVotes}</p>
                      <img src={downvotes} alt="" width="18" />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button" onClick={handleShare}>Share</button>
                          <button type="button" onClick={handleDelete}>Delete</button>
                        </div>
                        <div className="">
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {question.userPosted.charAt(0).toUpperCase()}{" "}
                            </Avatar>
                            <div className="">{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers}</h3>
                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare} />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3 className="">Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostAnswer(e, question.answer.length);
                    }}
                  >
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      onChange={(e) => setAnswer(e.target.value)}
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                </section>

                <p>
                  Browse other Question tagged..
                  {question.questionTags.map((tag) => (
                    <Link to="/Tags" key={tag} className="ans-tags">
                      {" "}
                      {tag}{" "}
                    </Link>
                  ))}
                  or
                  {
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      {" "}
                      Ask your own question!
                    </Link>
                  }
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
