import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Emotion } from './Emotion';
// import axios from 'axios';
import Services from '../Services';

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			userInput: '',
			apiOutput: 'test'
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		
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
				apiOutput: mood.data.output
			})
			console.log("this is mood ", mood.data.output)
			console.log('aaaand this is apiOutput ', this.state.apiOutput)
		})
		.catch(err => {
			console.log("This is the error ", err)
		})
	}


	render(){


		return(
			<div>
				<h1>Mood Checker</h1>
				<Link className="link" to ="/detail">Detail</Link>
				<Link to ="/pastmoods">Past Moods</Link>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
				<Emotion />
				<form onSubmit={this.handleSubmit}>
				  <label>
				    <p>What's on your mind?</p>
				    <input type="text" value={this.state.userInput} name="name" onChange={this.handleChange}/>
				  </label>
				  <input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}

export default Home;