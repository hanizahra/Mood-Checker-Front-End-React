# MoodChecker

## Description
A web application that demos the Sentiment Analyzer API from [DeepAI](https://deepai.org/api-docs/#sentiment-analysis). A user inputs text to be analyzed and then receives one of a handful of possible sentiments: positive, very positive, neutral, negative, very negative. An expressive animation reflects the analysis. 

## Tech
### Front End
* JavaScript
* React
* HTML
* CSS design and animations based on Joe Kuan's design
### Back End
* PostgreSQL
* Java
* Spring Boot

Later implemented as a microservice alongside another DeepAI API, an auto-colorizer

## Installation
* `git clone https://github.com/hanizahra/Mood-Checker-Front-End-React.git`
* run `npm install`
* You will need to register for an API key with [DeepAI](https://deepai.org/)
* The app will function as a standalone React app, however, you can utitlize the back end [here](https://github.com/hanizahra/Mood-Checker-Back-End-Spring)

## Preview
![Screenshot of Happy](/public/happy.png "Screenshot")![Screenshot of Neutral](/public/neutral.png "Screenshot")
![Screenshot of Angry](/public/angry.png "Screenshot")![Screenshot of Furious](/public/furious.png "Screenshot")