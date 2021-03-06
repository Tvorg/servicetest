import React from "react"
import "./ActivQuiz.css"
import AnswersList from "./AnswersList/AnswersList";

const ActivQuiz = props => (

    <div className="ActivQuiz">
      <p className="Question">
        <span>
            <strong>{props.answerNumber}.</strong>&nbsp;
            {props.question}

        </span>
        <small>{props.answerNumber} из {props.quizLenght}</small>
      </p>
        <AnswersList
            state = {props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)

export default ActivQuiz