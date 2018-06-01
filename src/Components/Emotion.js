import React, { Component } from 'react';
import { Home } from './Home';

export class Emotion extends Component {
	constructor(){
		super()
	}

	render(){
		return(
			<div>
				<br/><br/><br/><br/>
		        <input id="happy" type="radio" name="smiley" defaultValue="Happy" />
		        <label htmlFor="happy">:)</label>
		        <input id="normal" type="radio" name="smiley" defaultValue="Normal" />
		        <label htmlFor="normal">:|</label>
		        <input id="angry" type="radio" name="smiley" defaultValue="Angry" />
		        <label htmlFor="angry">:(</label>
		        <input id="furious" type="radio" name="smiley" defaultValue="Furious" />
		        <label htmlFor="furious">:&lt;</label>
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

