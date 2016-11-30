# Feedback

### JavaScript API
* Questions should be provided as an array of question objects, each question has text String and categories Array. Ex:
<br> 
```
[{
    text:"What is X?", 
    categories:["a","b","c"]
},{
    text:"What is Y?", 
    categories:["d","e","f"]
}]
```
* Answers will be returned as an array in the following format:
<br>
```
{
    question:String - text of original question,
    rating:Number - chosen rating, from 1 to 5,
    selected:Array - array of categories selected by user,
    text:String - Text that was entered by user when prompted
}
```
    

#### Props
| Prop | Description |
| --- | --- |
| `title` | *String* <br> Title of survey, displayed at top |
| `description` | *String* <br> Description of survey, optional |
| `questions` | *Array* <br> Array of questions to be asked, questions should be {text:String, categories:Array}  |
| `handleAnswerSubmit` | *func* <br> Function that handles the answers when survey is complete, receives answer array as argument |
| `ratingResponses` | *Array* <br> Array of string responses to ratings, length of 5, first is for 1 star, last for 5 stars |
| `inputPrompt` | *String* <br> Text asking for more input when category is clicked |
| `completeMessage` | *String* <br> Message displayed when survey is complete |
| `transitionName` | *String* <br> Name of animation used for transitions, uses ReactCSSTransitionGroup |
| `transitionEnterTimeout` | *Number* <br> length of enter animation |
| `transitionLeaveTimeout` | *Number* <br> length of leave animation |
| `allowRatingChange` | *Bool* <br> *defaults to true* <br> Toggles whether or not a user can change a rating after initial selection |



### Styles API

#### Available Classes
* feedback
* feedback__question
* feedback__question__title
* feedback__question__text
* feedback__question__category
* feedback__question__textbox
* feedback__question__submit
