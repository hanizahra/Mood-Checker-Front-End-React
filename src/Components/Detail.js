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
			singleApiOutput: '',
			fireRedirect: false,
			userInput: '',
			apiOutput: '',
			note: 'Self-improvement'
		}
		console.log("this is match.params ", match.params.id)
		this.child = React.createRef();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmitForm = this.handleSubmitForm.bind(this);
	}

	componentDidMount() {
		this.getOneOfTheMoods();
	}

	getOneOfTheMoods() {
		Services.getOneMood(this.props.match.params.id)
		.then(oneMood => {
			this.setState ({
				singleMood: oneMood.data,
				singleUserInput: oneMood.data.userInput,
				singleApiOutput: oneMood.data.apiOutput,
				singleNote: oneMood.data.note
			})
			this.child.current.emotionPicker();
			this.componentDidMount();
			console.log("this is userInput now ", this.state.singleMood.userInput)
			console.log("this is apiOutput now ", this.state.singleMood.apiOutput)
		})
		.catch(err => {
			console.log("couldn't get one because: ", err)
		})
	}

	handleInputChange(e) {
		this.setState({
			note: e.target.value,
		})
	}


	handleSubmitForm(event) {
		event.preventDefault();
		console.log("this is this.props.match.params.id--> ", this.props.match.params.id);
		console.log("and thiiis is this.state.note---> ", this.state.note);
		Services.updateMood(this.props.match.params.id, this.state.singleUserInput, this.state.singleApiOutput, this.state.note)
		.then(newMood => {
			fireRedirect: true
		})
		.catch(err => {
			console.log("new mood did not update: ", err)
		})
	}

	render(){
		let singleUserInput = this.state.singleMood.userInput;
		let singleApiOutput = this.state.singleMood.apiOutput;
		let singleNote = this.state.singleMood.note;
		return(
			<div>
				<h1>Details page</h1>
				<Link to = "/">Home |</Link>
				<Link to = "/pastmoods"> Mood Swings</Link>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
				<Emotion emotionInput={this.state.singleApiOutput} ref={this.child} />
				<br/><br/>
				<form onSubmit={this.handleSubmitForm}>
				  <label>
				    <input onChange={this.handleInputChange} type="text" name="note" placeholder={this.state.note}/>
				  </label><br/>
				  <input type="submit" value="submit"/>
				</form>
				<p><b>Thought:</b> {singleUserInput} </p>
				<p><b>State of mind:</b> {singleApiOutput} </p>
				<p><b>Note:</b> {singleNote} </p>
			</div>
		)
	}
}

export default Detail;