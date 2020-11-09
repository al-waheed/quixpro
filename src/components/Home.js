import React, { Component } from 'react';
import questionDatabase from '../questionDatabase';
import QuestionBox from './QuestionBox';
import Result from './Result'
import fire from '../config/fire'

class App extends Component {
  state = {
   questionLists: [],
   score:0,
   responses:0
  };

  handleQuestion = () =>{
  questionDatabase().then( question => {
    this.setState({
     questionLists: question
    })
   })
  };

  computeAnswer = ( answer , correctAnswer) => {
    if( answer === correctAnswer){
      this.setState({
        score: this.state.score + 1
      })
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5
    })
  }

    playAgain = () =>{
      this.handleQuestion();
      this.setState({
        score:0,
        responses:0
      })
    }

    componentDidMount(){
    this.handleQuestion();
  }

   logout = (e) =>{
     fire.auth().signOut();
   }

  render(){
    return (
    <div className="quiz-container">
      <div className='quiz-box'>
      <h1 className="quiz-title">Football quiz</h1>
       {this.state.questionLists.length > 0 && 
        this.state.responses < 5 &&
        this.state.questionLists.map(
         ({question,answer,correct,questionId}) => (
            <QuestionBox 
             question={question} 
               options={answer} 
                 key={questionId}
                 selected = { answer => this.computeAnswer( answer, correct )}/>)
          )}
          {this.state.responses === 5 ? (
           < Result score={this.state.score} 
            playAgain={this.playAgain} />) : null}
            </div>
            <button className='logout' onClick={this.logout}>Logout</button>
    </div>
  );
 }
}

export default App;