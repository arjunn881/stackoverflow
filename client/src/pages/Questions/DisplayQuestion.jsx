import React from "react";
import { Leftbar } from "../../components/leftbar/Leftbar";
import { Rightbar } from "../../components/rightbar/Rightbar";
import { QuestionsDetails } from "./QuestionsDetails";

export const DisplayQuestion = () => {
  return (
    <div className="home-container-1">
      <Leftbar />
      <div className="home-container-2">
        <QuestionsDetails/>
        <Rightbar />
      </div>
    </div>
  );
};
