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
			'Content-Type' : 'application/x-www-form-urlencoded' 
			}
		})
	},

	//// Back-end


	// posts moods to db
	postMoodToDb(newData) {
		return axios({
			method: 'POST',
			url: 'http://localhost:8080/moodchecker/moods',
			data: newData
		})
	},

	//
	getAllMoods() {
		return axios({
			method: 'GET',
			url: 'http://localhost:8080/moodchecker/moods'
		})
	},

	getOneMood(id) {
		return axios({
			method: 'GET',
			url: `http://localhost:8080/moodchecker/moods/${id}`
		})
	},

	updateMood(id, userInput, apiOutput, note) {
		return axios({
			method: 'PATCH',
			url: `http://localhost:8080/moodchecker/moods/${id}`,
			data: {
				id: id,
				userInput: userInput,
				apiOutput: apiOutput,
				note: note
			}
		})
		console.log("id, note--> ", id, note)
	},

	deleteMood(id) {
		return axios({
			method: 'DELETE',
			url: `http://localhost:8080/moodchecker/moods/${id}`
		})
	}
}

export default Services;