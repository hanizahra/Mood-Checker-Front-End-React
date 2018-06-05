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
		this.deleteAMood = this.deleteAMood.bind(this);
	}


	// GET request to DB to retrieve all moods
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

	// DELETE request to DB deletes single mood
	deleteAMood(i, e) {
		Services.deleteMood(i);
	}



	render(){


		let allMoods = this.state.moodData;
		
		let mappedMoods = allMoods.map(function(mood) {
			console.log(`this is mood['id']---> `, mood['id'] );
			return [<p key="1"><b>Thought:</b> {mood['userInput']}</p>, 
			<p key="2"><b>State of mind:</b> {mood['apiOutput']}</p>,
			<Link to = {`/detail/${mood['id']}`}><span><button>Details</button></span></Link>,
			<button onClick= {this.deleteAMood.bind(this, mood['id'])}>Delete</button>,
			<br/>
			]
		}, this)


		return(
			<div>
				<h1>Mood Swings</h1>
				<Link to = "/">Home</Link>
				<br/><br/><br/><br/>
				{mappedMoods}
			</div>
		)
	}
}

export default PastMoods;