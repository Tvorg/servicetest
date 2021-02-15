import React, {Component} from 'react'
import "./Quiz.css"
import ActivQuiz from "../../components/ActiveQuiz/ActivQuiz";


class Quiz extends Component {
    state = {
        activQuestion: 0,
        answerState: null,
        quiz: [
            {
              question: 'Какого я года рождения?',
              rightAnswerId: 1,
              id: 1,
              answers: [
                  {text: '1998', id: 1},
                  {text: '2001', id: 2},
                  {text: '1997', id: 3},
                  {text: '2000', id: 4}
              ]
            },
            {
                question: 'Какого года рождения Юля?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: '1998', id: 1},
                    {text: '2001', id: 2},
                    {text: '1999', id: 3},
                    {text: '2000', id: 4}
                ]
            }

        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('Answer Id:', answerId)

        const question = this.state.quiz[this.state.activQuestion]

        if (question.rightAnswerId === answerId) {

            this.setState({
                answerState: {[answerId]: 'success'}
            })

           const timeout = window.setTimeout(() => {
             if (this.isQuizFinished()) {
                console.log('finished')
             } else {
                 this.setState({
                     activQuestion: this.state.activQuestion + 1,
                     answerState: null
                 })
             }
             window.clearTimeout(timeout)
           }, 1000)

        }else{

            this.setState({
                answerState: {[answerId]: 'error'}
            })

            const timeout = window.setTimeout(() => {
            if (this.isQuizFinished()) {
                console.log('finished')
            } else {
                this.setState({
                    activQuestion: this.state.activQuestion + 1,
                    answerState: null
                })
            }
            window.clearTimeout(timeout)
        }, 1000)
        }
    }

    isQuizFinished() {
        return this.state.activQuestion + 1 === this.state.quiz.length
    }

    render() {
       return(
           <div className="Quiz">

               <div className="QuizWrapper">
                  <h2>Ответьте на все вопросы:</h2>
                  <ActivQuiz
                    answers={this.state.quiz[this.state.activQuestion].answers}
                    question={this.state.quiz[this.state.activQuestion].question}
                    onAnswerClick={this.onAnswerClickHandler}
                    quizLenght={this.state.quiz.length}
                    answerNumber={this.state.activQuestion +1}
                    state = {this.state.answerState}
                  />
               </div>
           </div>
       )
           }
}

export default Quiz