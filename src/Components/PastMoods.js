import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Services from '../Services';
import { Emotion } from './Emotion';

class PastMoods extends Component {
	constructor(){
		super()
		this.state = {
			moodData: [],
			userInput: '',
			apiOutput: 'test',
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.deleteAMood = this.deleteAMood.bind(this);
	}

	componentDidMount() {
		Services.getAllMoods()
		.then( res => {
			this.setState({
				moodData: res.data,
			})
			console.log("this is the response from getAllMoods ", res.data[0]['userInput']);
		})
		.catch( err => {
			console.log("The error is ", err)
		})
		
	}

	handleChange() {

	}

	handleSubmit() {

	}

	deleteAMood(i, e) {
		Services.deleteMood(i);
	}



	render(){


		let allMoods = this.state.moodData;
		
		let mappedMoods = allMoods.map(function(mood) {
			console.log(`this is mood['id']---> `, mood['id'] );
			return [<p key="1">User Input: {mood['userInput']}</p>, 
			<p key="2">Api Output: {mood['apiOutput']}</p>,
			<button onClick= {this.deleteAMood.bind(this, mood['id'])}>Delete</button>,
			<form>
			  <label>
			    <input type="text" name="name" placeholder={mood['userInput']}/>
			  </label><br/>
			  <label>
			    <input type="text" name="name" placeholder={mood['apiOutput']}/>
			  </label><br/>
			  <input type="submit" value="Submit"/>
			</form>,
			<br/>]
		}, this)


		return(
			<div>
				<h1>Past moods from database</h1>
				<Link to = "/">Home</Link>
				{mappedMoods}
			</div>
		)
	}
}

export default PastMoods;