import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PastMoods extends Component {
	// constructor(){
	// 	super()
	// }

	render(){
		return(
			<div>
				<h1>Past moods from database</h1>
				<Link to = "/">Home</Link>
			</div>
		)
	}
}

export default PastMoods;