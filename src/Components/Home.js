import React, { Component } from 'react';
import App from '../App';
import {Link} from 'react-router-dom';
import Detail from './Detail';
import Saved from './Saved';

class Home extends Component {
	constructor(){
		super();
		this.state = {
			userInput: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			userInput: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("This is the user's input: ", this.state.userInput)
	}


	render(){
		return(
			<div>
				<h1>Mood Checker</h1>
				<Link className="link" to ="/detail">Detail</Link>
				<Link to ="/saved">Saved</Link>
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