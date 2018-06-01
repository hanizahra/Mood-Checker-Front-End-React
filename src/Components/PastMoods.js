import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Services from '../Services';

class PastMoods extends Component {
	constructor(){
		super()
		this.state = {
			moodData: []
		}
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

	render(){

		let allMoods = this.state.moodData;
		let mappedMoods = allMoods.map(function(mood) {
			return mood['userInput']
		})

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