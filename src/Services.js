import axios from 'axios';
// import React, { Component } from 'react';
import Home from './Components/Home';

const myData = {userInput: "basdfsa", apiOutput: "asdffd"}
const Services = {

	//// 3rd party API

	// makes post request for data
	getMood(userInput) {
		return axios({
			method: 'POST',
			url: 'https://api.deepai.org/api/sentiment-analysis',
			data: 'text= ' + userInput,
			headers: {
			'Access-Control-Allow-Origin' : '*',
			// 'Api-Key' : '20d22b6a-7c2b-49fa-ab4e-08dbb65b6619',
			'Content-Type' : 'application/x-www-form-urlencoded' 
			}
		})
	},

	//// Back-end


	// posts moods to db
	postMoodToDb(newData) {
		return axios({
			method: 'POST',
			url: 'http://localhost:8080/moods',
			data: newData
		})
	},

	//
	getAllMoods() {
		return axios({
			method: 'GET',
			url: 'http://localhost:8080/moods'
		})
	},

	getOneMood(id) {
		return axios({
			method: 'GET',
			url: `http://localhost:8080/moods/${id}`
		})
	},

	updateMood(id) {
		return axios({
			method: 'PUT',
			url: `http://localhost:8080/moods/${id}`
		})
	},

	deleteMood(id) {
		return axios({
			method: 'DELETE',
			url: `http://localhost:8080/moods/${id}`
		})
	}
}

export default Services;