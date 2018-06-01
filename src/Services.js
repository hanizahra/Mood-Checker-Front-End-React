import axios from 'axios';
// import React, { Component } from 'react';
// import Home from './Components/Home';

const Services = {
	getMood(userInput) {
		// let userInput = 'this fucking sucks'
		return axios({
			method: 'POST',
			url: 'https://api.deepai.org/api/sentiment-analysis',
			data: 'text= ' + userInput,
			headers: {
			'Access-Control-Allow-Origin' : '*',
			'Api-Key' : '20d22b6a-7c2b-49fa-ab4e-08dbb65b6619',
			'Content-Type' : 'application/x-www-form-urlencoded' 
			}
		})
	}
}

export default Services;