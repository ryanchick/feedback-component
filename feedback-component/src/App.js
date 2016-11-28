import React, { Component } from 'react';
import './App.css';
import Feedback from './Feedback'

const questions = [{
  text:"How would you rate X?",
  categories:['a','b','c','d','e','f']
},{
  text:"How would you rate Y?",
  categories:['g','h','i','j','k','l']
}]

class App extends Component {
  render() {
    return (
      <div className="App">
          <Feedback 
            description={'description of quiz'} 
            title={'Test quiz'}
            questions={questions}
            completeMessage={'Thanks for answering!'}
            submitAnswers={(answers) => {console.log(answers)}}
          />
      </div>
    );
  }
}

export default App;
