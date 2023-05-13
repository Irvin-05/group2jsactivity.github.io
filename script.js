const apiKey = "c731377b7a6bc605c68e6b846819eab1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metrics&q=manila";

 async function checkWeather(){
  const response = await fetch(apiUrl +`&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
 }

 checkWeather();
