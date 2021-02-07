// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes
const express=require('express');
// Start up an instance of app
const app=express();
/* Middleware*/
const bodyParser=require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors=require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port=8000;
const server=app.listen(port,listening);
function listening(){
    console.log(`the running port is: ${port}`);
}
//setting the  get function
const weatherData=[];
app.get('/all',getWeatherData);
function getWeatherData(req,res){
    res.send(weatherData);
}
//setting the post function
app.post('/all',addWeather);
function addWeather(req,res){
    newEntry={temp:req.body.temp,date:req.body.date,content:req.body.content};
    weatherData.push(newEntry);
     res.send(weatherData);
     projectData=weatherData;
}
