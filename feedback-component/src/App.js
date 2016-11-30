import React, { Component } from 'react';
import './App.css';
import Feedback from './Feedback'

const questions = [{
  text:"How would you rate X?",
  categories:['a','b','c','d','e','f']
},{
  text:"How would you rate Y?",
  categories:['g','h','i','j','k','l']
},{
  text:"How would you rate Z?",
  categories:['a','b','c','d','e','f']
},{
  text:"How would you rate A?",
  categories:['g','h','i','j','k','l']
},{
  text:"How would you rate B?",
  categories:['a','b','c','d','e','f']
},{
  text:"How would you rate C?",
  categories:['g','h','i','j','k','l']
}]
const ratingResponses = [
  "Oh no! What can we do better?",
  "That's too bad, how can we improve?",
  "What can we do better?",
  "That's great! What do you think we did well?",
  "Excellent! What impressed you the most?" ]

class App extends Component {
  render() {
    return (
      <div className="App">
          <Feedback 
            description={'description of quiz'} 
            title={'Test quiz'}
            questions={ questions }
            ratingResponses={ ratingResponses }
            inputPrompt={"Type more plz"}
            completeMessage={'Thanks for answering!'}
            handleAnswerSubmit={(answers) => {console.log(answers)}}
            allowRatingChange={false}
          />
      </div>
    );
  }
}

export default App;
