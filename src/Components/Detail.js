import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Detail extends Component {
	// constructor(){
	// 	super()
	// }

	render(){
		return(
			<div>
				<h1>Details page</h1>
				<Link to = "/">Home</Link>
			</div>
		)
	}
}

export default Detail;