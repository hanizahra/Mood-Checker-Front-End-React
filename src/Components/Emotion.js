import React, { Component } from 'react';
import { Home } from './Home';

export class Emotion extends Component {
	constructor(props){
		super(props)
	}

	emotionPicker() {
		let emotionalRendering;
		console.log("this is this.props.emotionInput ", this.props.emotionInput)
		if (this.props.emotionInput == "Verypositive") {
			emotionalRendering = <input id="happy" type="radio" name="smiley" defaultValue="Happy" checked={true}/>
			console.log("Emotion component will choose happy face")
		} else if (this.props.emotionInput == "Positive") {
			emotionalRendering = <input id="happy" type="radio" name="smiley" defaultValue="Happy" checked={true}/>
			console.log("Emotion component will choose happy face")
		} else if (this.props.emotionInput == "Negative") {
			emotionalRendering = <input id="angry" type="radio" name="smiley" defaultValue="Angry" checked={true}/>
			console.log("Emotion component will choose mad face")
		} else if (this.props.emotionInput == "Neutral") {
			emotionalRendering = <input id="normal" type="radio" name="smiley" defaultValue="Normal" checked={true}/>
			console.log("Emotion component will choose neutral face")
		} else if (this.props.emotionInput == "Verynegative") {
			emotionalRendering = <input id="furious" type="radio" name="smiley" defaultValue="Furious" checked={true}/>
			console.log("Emotion component will choose furious mad face")
		} else {
			console.log("Emotion cannot be chosen, incorrect input")
		}
		return emotionalRendering;
	}

	render(){
		return(
			<div className = "face">
				<br/><br/><br/><br/>
				{this.emotionPicker()}
		        <div className="smiley">
		          <div className="steam-container">
		            <div className="squiggle-container squiggle-container-1">
		              <div className="squiggle">
		                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 28.1 80.6" style={{enableBackground: 'new 0 0 28.1 80.6'}} xmlSpace="preserve">
		                  <path className fill="none" strokeWidth={11} strokeLinecap="round" strokeMiterlimit={10} d="M22.6,75.1c-8-5.6-15.2-10.5-15.2-19.9c0-12.1,14.1-17.2,14.1-29.6c0-9.1-6.7-15.7-16-20.1" />
		                </svg>
		              </div> {/* end .squiggle*/}
		            </div>
		            <div className="squiggle-container squiggle-container-2">
		              <div className="squiggle">
		                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 28.1 80.6" style={{enableBackground: 'new 0 0 28.1 80.6'}} xmlSpace="preserve">
		                  <path className fill="none" stroke="#fff" strokeWidth={11} strokeLinecap="round" strokeMiterlimit={10} d="M22.6,75.1c-8-5.6-15.2-10.5-15.2-19.9c0-12.1,14.1-17.2,14.1-29.6c0-9.1-6.7-15.7-16-20.1" />
		                </svg>
		              </div> {/* end .squiggle*/}
		            </div>
		            <div className="squiggle-container squiggle-container-3">
		              <div className="squiggle">
		                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 28.1 80.6" style={{enableBackground: 'new 0 0 28.1 80.6'}} xmlSpace="preserve">
		                  <path className fill="none" stroke="#fff" strokeWidth={11} strokeLinecap="round" strokeMiterlimit={10} d="M22.6,75.1c-8-5.6-15.2-10.5-15.2-19.9c0-12.1,14.1-17.2,14.1-29.6c0-9.1-6.7-15.7-16-20.1" />
		                </svg>
		              </div> {/* end .squiggle*/}
		            </div>
		          </div>
		          <div className="eyes">
		            <div className="eye" />
		            <div className="eye" />
		          </div>
		          <div className="mouth" />
		        </div>
      		</div>
				
		)
	}
}

