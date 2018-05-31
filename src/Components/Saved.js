import React, { Component } from 'react';
import App from '../App';
import {Link} from 'react-router-dom';

class Saved extends Component {
	constructor(){
		super()
	}

	render(){
		return(
			<div>
				<h1>All moods from database</h1>
				<Link to = "/">Home</Link>
			</div>
		)
	}
}

export default Saved;