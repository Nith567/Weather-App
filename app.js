const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e6c87dc6c9msh48842b11af57c76p1dba3bjsn875c94d92904",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather=(city)=>{
  cityName.innerHTML=city;
 fetch(
  `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city }`,
  options)
  .then((response) => response.json())
  .then((response)=>{
      console.log(response),
        feels_like.innerHTML=response.feels_like
    humidity.innerHTML=response.humidity
    humidity2.innerHTML=response.humidity
    temp.innerHTML         =response.temp              
     temp2.innerHTML         =response.temp              
    max_temp .innerHTML    =response.max_temp                  
    wind_speed.innerHTML   =response.wind_speed  
     wind_speed2.innerHTML   =response.wind_speed  
    min_temp.innerHTML     =response.min_temp              
    sunrise .innerHTML     =response.sunrise               
    sunset .innerHTML      =response.sunset                  
    wind_degrees.innerHTML =response.wind_degrees                        
  })
  .catch((err) => console.error(err));
}
submit.addEventListener("click",(e)=>{
  e.preventDefault();
  getWeather(city.value);
})
getWeather("Delhi");



