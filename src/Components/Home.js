import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Emotion } from './Emotion';
import axios from 'axios';
import Services from '../Services';

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			userInput: '',
			apiOutput: 'unknown',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.child = React.createRef();
	}


	handleChange(e) {
		this.setState({
			userInput: e.target.value,
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("This is the user's input: ", this.state.userInput)

		Services.getMood(this.state.userInput)
		.then(mood => {
			this.setState({
				apiOutput: mood.data.output,
			})
			console.log("this is mood ", mood.data.output);
			console.log('aaaand this is apiOutput ', this.state.apiOutput);
			this.child.current.emotionPicker();
			let emotionObject = {};
			emotionObject['userInput'] = this.state.userInput;
			emotionObject['apiOutput'] = this.state.apiOutput[0];
			console.log("this is emotionObject ", emotionObject);
			Services.postMoodToDb(emotionObject)
			.then(emotion => {
				console.log("this emotion was posted ", emotion)
			})
			.catch(err => {
				console.log("this emotion did not post: ", err)
			})
		})
		.catch(err => {
			console.log("This is the error ", err)
		})
	}



	render(){

		return(

			<div>
				<h1 className="mood-title">Mood Checker</h1>
				<div className="nav-bar">
					<a href="https://deepai.org/api-docs/#sentiment-analysis">API |</a>
					<Link to ="/pastmoods"> Mood Swings</Link>
				</div>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
				<Emotion emotionInput={this.state.apiOutput} ref={this.child} />

				<form className="home-form" onSubmit={this.handleSubmit}>
				  <label>
				  	<br/>
				    <p>What's on your mind?</p>
				    <input type="text" value={this.state.userInput} name="name" onChange={this.handleChange}/>
				  </label>
				  <input className="inputButton" type="submit" value="Submit" />
				</form>
				<h3>Your mood is {this.state.apiOutput}</h3>
			</div>
		)
	}
}

export default Home;