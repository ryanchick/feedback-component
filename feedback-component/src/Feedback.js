import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Feedback.css';

class Feedback extends Component {
    constructor() {
        super();
        this.state = {
            questionIndex:0,
            rating:0,
            starClicked:false,
            answers:[],
            selected:[],
            textbox:"",
            completed:false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleTextInput = this.handleTextInput.bind(this);
        this.submitQuestion = this.submitQuestion.bind(this);
    }
    handleClick(e){
        this.setState({ rating:parseInt(e.target.value, 10), starClicked:true })
    }
    handleCheck(e){
        const selected = this.state.selected;
        if(e.target.checked){
            selected.push(e.target.value)
        } else {
            let index = selected.indexOf(e.target.value);
            selected.splice(index, 1)
        }
        this.setState({ selected });
    }
    handleTextInput(e){
        this.setState({ textbox:e.target.value })
    }
    submitQuestion(e) {
        e.preventDefault();
        let { questionIndex, selected, rating, answers, textbox } = this.state;
        let answer = {
            question:this.props.questions[questionIndex].text,
            rating,
            selected,
            text:textbox
        }
        answers.push(answer);
        //If last question
        if(questionIndex === this.props.questions.length - 1){
            this.props.handleAnswerSubmit(answers); //Call answer handler from props when complete
            this.setState({
                completed:true,
                answers,
                rating:0,
                selected:[],
                starClicked:false,
                textbox:""
            })
        } else {
            this.setState({
                answers,
                questionIndex:questionIndex + 1,
                rating:0,
                selected:[],
                starClicked:false,
                textbox:""
            })
        }
    }
    render() {
        const { title, description, questions, completeMessage, ratingResponses, inputPrompt, allowRatingChange } = this.props;
        const { transitionName, transitionEnterTimeout, transitionLeaveTimeout } = this.props;
        const { questionIndex, rating, starClicked, selected, textbox, completed } = this.state;
        return (
            <div className="feedback">
                <h2>{title}</h2>
                <p>{description}</p>
                <ReactCSSTransitionGroup transitionName={transitionName}
                    transitionEnterTimeout={transitionEnterTimeout}
                    transitionLeaveTimeout={transitionLeaveTimeout}>
                { questions
                    .filter((question,index) => index === questionIndex && completed === false)
                    .map((question, index) => {
                        return (
                            <div key={question.text} className="feedback_question">
                                <h3 className="feedback__question__title">Question #{questionIndex + 1}</h3>
                                <p className="feedback__question__text">{question.text}</p>
                                <Stars rating={rating} clicked={starClicked} handleClick={this.handleClick} allowRatingChange={allowRatingChange} />
                                { starClicked && (
                                    <form onSubmit={this.submitQuestion}>
                                        <p>{ ratingResponses[rating-1] }</p>
                                        { question.categories.map((category, index) => {
                                            return (
                                            <div key={ index } className="feedback__question__category">
                                                <input id={`category${index}`} onChange={this.handleCheck} type="checkbox" value={category} />
                                                <label htmlFor={`category${index}`}>{category}</label>
                                            </div>
                                            )
                                        })}
                                        { selected.length > 0 && (
                                            <div>
                                                <p>{inputPrompt}</p>
                                                <textarea className="feedback__question__textbox" onChange={this.handleTextInput} value={textbox}></textarea>
                                            </div>
                                        )}
                                        <button type="submit" className="feedback__questions__submit">Next Question</button>
                                    </form>
                                )}
                            </div>
                        )
                    })
                }
                </ReactCSSTransitionGroup>
                { completed && <h3>{completeMessage}</h3> }
                
                
            </div>
        )
    }
}

Feedback.propTypes = {
    title: PropTypes.string,
	description: PropTypes.string,
	questions: PropTypes.array.isRequired,
	handleAnswerSubmit: PropTypes.func.isRequired,
    ratingResponses:PropTypes.array,
    inputPrompt:PropTypes.string,
	completeMessage: PropTypes.string,
    transitionName: PropTypes.string,
    transitionEnterTimeout: PropTypes.number,
    transitionLeaveTimeout: PropTypes.number,
    allowRatingChange:PropTypes.bool
}


Feedback.defaultProps = {
    title:"Default Title", 
    completeMessage:"Thanks for answering our questions!",
    ratingResponses:[
        "What could we do better?",
        "What could we do better?",
        "What could we do better?",
        "That's great! What did we do well?",
        "That's great! What did we do well?"
    ],
    inputPrompt:"Can you expand on what you've selected?",
    transitionName:"question",
    transitionEnterTimeout:500,
    transitionLeaveTimeout:200,
    allowRatingChange:true
}

class Stars extends Component {
    render(){
        const { rating = 0, clicked = false, handleClick, allowRatingChange } = this.props;
        const clickHandler = (e) => {
            if(clicked === false || allowRatingChange === true){
                handleClick(e);
            }
        }
        return (
            <div className={clicked && !allowRatingChange ? 'feedback__rating feedback__rated' : 'feedback__rating'}>
                <input type="radio" id="star5" name="rating" value="5" onChange={clickHandler} checked={rating === 5}/>
                <label htmlFor="star5">5 stars</label>
                <input type="radio" id="star4" name="rating" value="4" onChange={clickHandler} checked={rating === 4}/>
                <label htmlFor="star4">4 stars</label>
                <input type="radio" id="star3" name="rating" value="3" onChange={clickHandler} checked={rating === 3}/>
                <label htmlFor="star3">3 stars</label>
                <input type="radio" id="star2" name="rating" value="2" onChange={clickHandler} checked={rating === 2}/>
                <label htmlFor="star2">2 stars</label>
                <input type="radio" id="star1" name="rating" value="1" onChange={clickHandler} checked={rating === 1}/>
                <label htmlFor="star1">1 star</label>
            </div>
        )
    }
}

Stars.propTypes = {
    rating:PropTypes.number,
    clicked:PropTypes.bool,
    handleClick:PropTypes.func.isRequired
}

export default Feedback;