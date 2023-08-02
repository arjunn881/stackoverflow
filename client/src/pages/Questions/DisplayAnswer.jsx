import React from "react";
import { Link, useParams } from "react-router-dom";
import { Avatar } from "../../components/avatar/Avatar";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnswer } from "../../actions/question";


export const DisplayAnswer = ({ question, handleShare }) => {

  const User = useSelector((state) => state.currentUserReducer);

  const { id } = useParams();

  const dispatch = useDispatch();
  const handleDelete = ( answerId, noOfAnswers ) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
  };
  return (
    <div className="">
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button
                type="button"
                onClick={() => handleDelete(ans._id, question.noOfAnswers)}
              >
                Share
              </button>
              {User?.result?._id === ans?.userId && (
                <button type="button" onClick={handleDelete}>
                  Delete
                </button>
              )}
            </div>
            <div>
              <p>answer {moment(ans.answeredOn).fromNow()}</p>
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
