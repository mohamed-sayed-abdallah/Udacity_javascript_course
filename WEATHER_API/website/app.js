/* Global Variables */
let API_KEY='';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
document.getElementById('generate').addEventListener('click',generateData);
function generateData(evt){
    // this url for states in the us only
    let zipCode=document.getElementById('zip').value;
    let myFeeling=document.getElementById('feelings').value;
    let baseUrl=`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}&units=metric`;
    GetWeatherData(baseUrl,newDate,myFeeling)
    .then(function (data){
        postData('/all',{temp:data.main.temp,date:newDate,content:myFeeling});
        updateElements();
    });
}
//function to get the required data from web API using url
const GetWeatherData=async(baseUrl)=>{
    const response=await fetch(baseUrl)
    try {
        const data=await response.json();
        return data;
    }catch (error){
        console.log("error",error);
    }
}
//Function to post Data
const postData=async (url='/all',data={})=>{
    const response=await fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try{
        const newData=await response.json();
        return newData;
    }catch (error){
        console.log("error",error);
    }
}
// function to update the data in the HTML
const updateElements=async ()=>{
    const request=await fetch('/all')
    try{
        const data_req=await request.json();
        document.getElementById('temp').innerHTML='<span>Current temp :   </span>'+data_req[data_req.length-1].temp+'<span>  deg celsius</span>';
        document.getElementById('date').innerHTML='<span>Current date :   </span>'+data_req[data_req.length-1].date;
        document.getElementById('content').innerHTML='<span>Feeling   :   </span>'+data_req[data_req.length-1].content;
    }catch(error){
        console.log("error",error);
    }
}
