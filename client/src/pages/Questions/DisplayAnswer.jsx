import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "../../components/avatar/Avatar";

export const DisplayAnswer = ({ question }) => {
  return (
    <div className="">
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button typr="button">Share</button>
              <button typr="button">Delete</button>
            </div>
            <div>
              <p>answer {ans.answeredOn}</p>
              <Link
                to={`/User/${question.userId}`}
                className="user-link"
                style={{ color: "#0086d8" }}
              >
                <Avatar backgroundColor="green" px="8px" py="5px">
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div className="">{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
