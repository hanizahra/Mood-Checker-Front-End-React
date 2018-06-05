import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Services from '../Services';
import { Emotion } from './Emotion';

class Detail extends Component {
	constructor({match, ...props}){
		super(props)
		this.state = {
			singleMood: '',
			singleUserInput: '',
			singleApiOutput: ''
		}
		console.log("this is match.params ", match.params.id)
		this.child = React.createRef();
	}

	componentDidMount() {
		Services.getOneMood(this.props.match.params.id)
		.then(oneMood => {
			this.setState ({
				singleMood: oneMood.data,
				singleUserInput: oneMood.data.userInput,
				singleApiOutput: oneMood.data.apiOutput
			})
			this.child.current.emotionPicker();
			console.log("this is userInput now ", this.state.singleMood.userInput)
			console.log("this is apiOutput now ", this.state.singleMood.apiOutput)
		})
		.catch(err => {
			console.log("couldn't get one because: ", err)
		})
	}

	

	render(){
		let singleUserInput = this.state.singleMood.userInput;
		let singleApiOutput = this.state.singleMood.apiOutput;
		return(
			<div>
				<h1>Details page</h1>
				<Link to = "/">Home |</Link>
				<Link to = "/pastmoods"> Mood Swings</Link>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
				<Emotion emotionInput={this.state.singleApiOutput} ref={this.child} />
				<br/>
				<p><b>Thought:</b> {singleUserInput} </p>
				<p><b>State of mind:</b> {singleApiOutput} </p>
			</div>
		)
	}
}

export default Detail;