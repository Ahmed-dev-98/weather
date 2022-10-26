
let searchinput = document.getElementById("search")
/////////   /////// Day 1 //////////    /////////
let currentDay = document.getElementById("currnetDay")
let currentDate = document.getElementById("currentDate")
let city = document.getElementById("city")
let currentDegree = document.getElementById("currentDegree")
let todayIcon = document.getElementById("today-icon")
let currentState = document.getElementById("currentState")
let currentHumidty = document.getElementById("currentHumidty")
let currentWind = document.getElementById("currentWind")
let currentCompass = document.getElementById("currentCompass")
currentCity = "Cairo",
date = new Date(),
weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
monthName = ['Jan','Feb','March','April','May','June','July','Aug','Spet','Oct','Nov','Dec'];

////////    //////// Day 2 ////////    ///////////
let nextDay = document.getElementById("nextDay")
let nextDate = document.getElementById("nextDate")
let nextDayMaxDegree = document.getElementById("nextDayMaxDegree")
let nextDayMinDegree = document.getElementById("nextDayMinDegree")
let nextState = document.getElementById("nextState")
let nextHumidty = document.getElementById("nextHumidty")
let nextDayIcon = document.getElementById("nextDayIcon")
let nextWind = document.getElementById("nextWind")
////////    //////// Day 3 ///////  ////////////
let next2dayDay = document.getElementById("next2dayDay")
let next2dayDate = document.getElementById("next2dayDate")
let next2DayMaxDegree = document.getElementById("next2DayMaxDegree")
let next2DayMinDegree = document.getElementById("next2DayMinDegree")
let nex2tDayIcon = document.getElementById("nex2tDayIcon")
let next2dayState = document.getElementById("next2dayState")
let next2dayHumidty = document.getElementById("next2Humidty")
let next2dayWind = document.getElementById("next2Wind")
//////////////////////////////////////////////////////////////////////////////////

/////// /////// fetch process  ////////  //////
async function getWeatherData() {
    apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=eb448dae978248758b925528222310&q=${currentCity}&days=3&aqi=no&alerts=no`);
    responseData = await apiResponse.json();
    displayTodayWeather()
    displayTomorowWeather()
    displayAfterTomorowWeather()
}
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////// current day display /////////////////////////////

function displayTodayWeather() {

      //weather condition check //
                //rain..
        if(
        responseData.current.condition.text == "Patchy rain possible" ||
        responseData.current.condition.text == "Moderate rain" ||
        responseData.current.condition.text == "Heavy rain" || 
        responseData.current.condition.text == "Light rain shower" ||
        responseData.current.condition.text == "Moderate or heavy rain shower"){
        document.getElementById("currentWeatherCard").style.backgroundImage = "url('imgs/weather-card/rain sea.gif')";
            
                //sunny + clear//
        } else if (
            responseData.current.condition.text == "Sunny" || 
            responseData.current.condition.text == "Clear"){
            document.getElementById("currentWeatherCard").style.backgroundImage = "url('imgs/weather-card/sunny.gif')";
                
                //snow//
        } else if (
                responseData.current.condition.text == "Light freezing rain" || 
                responseData.current.condition.text ==  "Moderate or heavy snow showers" ){
            document.getElementById("currentWeatherCard").style.backgroundImage = "url('imgs/weather-card/snow.gif')";
            
                //clouds//
        } else if (responseData.current.condition.text == "Partly cloudy" ||
            responseData.current.condition.text == "Cloudy"){
            document.getElementById("currentWeatherCard").style.backgroundImage = "url('imgs/weather-card/clud.gif')";
                
                // mist //
        }   else if (responseData.current.condition.text == "Mist"){
            document.getElementById("currentWeatherCard").style.backgroundImage = "url('imgs/weather-card/overcaast.gif')";
            
        }  
            //overvast//
            else if (responseData.current.condition.text == "Overcast" || responseData.current.condition.text =="Fog"  ){
            document.getElementById("currentWeatherCard").style.backgroundImage = "url('imgs/weather-card/Fog.gif')";

        }
        else {
            document.getElementById("currentWeatherCard").style.backgroundColor = "black";
        } 

    currentDay.innerHTML = weekDays[date.getDay()];
    currentDate.innerHTML = responseData.forecast.forecastday[0].date
    city.innerHTML = responseData.location.name;
    currentDegree.innerHTML = `${Math.round(responseData.current.temp_c)} &deg;C`;
    todayIcon.setAttribute("src", `https:${responseData.current.condition.icon}`);

    currentState.innerHTML = responseData.current.condition.text;
        
    
    currentHumidty.innerHTML = `${responseData.current.humidity} %`;
    currentWind.innerHTML = `${responseData.current.wind_kph} km/h`;
    currentCompass.innerText =responseData.current.wind_dir
};

/////////////////////////// tomorrow day display /////////////////////////////

function displayTomorowWeather() {
    if(responseData.forecast.forecastday[1].day.condition.text == "Patchy rain possible" ||
    responseData.forecast.forecastday[1].day.condition.text == "Moderate rain" ||
    responseData.forecast.forecastday[1].day.condition.text == "Heavy rain" || 
    responseData.forecast.forecastday[1].day.condition.text == "Light rain shower" || 
    responseData.forecast.forecastday[1].day.condition.text == "Moderate or heavy rain shower"){
    document.getElementById("tomorowbg").style.backgroundImage = "url('imgs/weather-card/rain sea.gif')";

            //sunny + clear//
    } else if (responseData.forecast.forecastday[1].day.condition.text == "Sunny" || 
        responseData.forecast.forecastday[1].day.condition.text == "Clear"){
        document.getElementById("tomorowbg").style.backgroundImage = "url('imgs/weather-card/sunny.gif')";

            //snow//
    } else if (responseData.forecast.forecastday[1].day.condition.text == "Light freezing rain" || 
    responseData.forecast.forecastday[1].day.condition.text ==  "Moderate or heavy snow showers"){
        document.getElementById("tomorowbg").style.backgroundImage = "url('imgs/weather-card/snow.gif')";

            //clouds//
    } else if (responseData.forecast.forecastday[1].day.condition.text == "Partly cloudy" ||
        responseData.forecast.forecastday[1].day.condition.text == "Cloudy"){
        document.getElementById("tomorowbg").style.backgroundImage = "url('imgs/weather-card/clud.gif')";

                // mist //
            }   else if (responseData.forecast.forecastday[1].day.condition.text == "Mist"){
                document.getElementById("currentWeatherCard").style.backgroundImage = "url('imgs/weather-card/overcaast.gif')";
                
            }  
                //overvast//
                else if (responseData.forecast.forecastday[1].day.condition.text == "Overcast" ||
                responseData.forecast.forecastday[1].day.condition.text == "Fog"  ){
                document.getElementById("currentWeatherCard").style.backgroundImage = "url('imgs/weather-card/Fog.gif')";
    
            }
        else {
        document.getElementById("tomorowbg").style.backgroundColor = "black";

    }
    nextDay.innerHTML = weekDays[date.getDay()+1];
    nextDate.innerHTML = responseData.forecast.forecastday[1].date
    nextDayMaxDegree.innerHTML = `${Math.round(responseData.forecast.forecastday[1].day.maxtemp_c)} &deg;C`;
    nextDayMinDegree.innerHTML = `${Math.round(responseData.forecast.forecastday[1].day.mintemp_c)} &deg;C`;
    nextDayIcon.setAttribute("src", `https:${responseData.forecast.forecastday[1].day.condition.icon}`);
    nextState.innerHTML = responseData.forecast.forecastday[1].day.condition.text;;
    nextHumidty.innerHTML = `${responseData.forecast.forecastday[1].day .avghumidity} %`;
    nextWind.innerHTML = `${responseData.forecast.forecastday[1].day.maxwind_kph} km/h`;
};

/////////////////////////// 3rd  day display /////////////////////////////

function displayAfterTomorowWeather() {

//rain//
    if(
        responseData.forecast.forecastday[2].day.condition.text == "Patchy rain possible" ||
        responseData.forecast.forecastday[2].day.condition.text == "Moderate rain" ||
        responseData.forecast.forecastday[2].day.condition.text == "Heavy rain" || 
        responseData.forecast.forecastday[2].day.condition.text == "Light rain shower" ||
        responseData.forecast.forecastday[2].day.condition.text == "Moderate or heavy rain shower"){
        document.getElementById("nextDaybg").style.backgroundImage = "url('imgs/weather-card/rain sea.gif')";
                    //sunny + clear//
        } else if (
            responseData.forecast.forecastday[2].day.condition.text == "Sunny" || 
            responseData.forecast.forecastday[2].day.condition.text == "Clear"){
            document.getElementById("nextDaybg").style.backgroundImage = "url('imgs/weather-card/sunny.gif')";
                //snow//
        } else if (
            responseData.forecast.forecastday[2].day.condition.text == "Light freezing rain" || 
            responseData.forecast.forecastday[2].day.condition.text ==  "Moderate or heavy snow showers"){
            document.getElementById("nextDaybg").style.backgroundImage = "url('imgs/weather-card/snow.gif')";    
                //clouds//
        } else if (
            responseData.forecast.forecastday[2].day.condition.text == "Partly cloudy" ||
            responseData.forecast.forecastday[2].day.condition.text == "Cloudy"){
            document.getElementById("nextDaybg").style.backgroundImage = "url('imgs/weather-card/clud.gif')";
                // mist //
            }   else if (responseData.forecast.forecastday[2].day.condition.text == "Mist"){
                document.getElementById("currentWeatherCard").style.backgroundImage = "url('imgs/weather-card/overcaast.gif')";
                
            }  
                //overvast//
                else if (
                responseData.forecast.forecastday[2].day.condition.text == "Overcast" ||
                responseData.forecast.forecastday[2].day.condition.text == "Fog"){
                document.getElementById("currentWeatherCard").style.backgroundImage = "url('imgs/weather-card/Fog.gif')";
    
            }
            else {
            document.getElementById("nextDaybg").style.backgroundColor = "black";
            }
    

    next2dayDay.innerHTML = weekDays[date.getDay()+2];
    next2dayDate.innerHTML = responseData.forecast.forecastday[2].date
    next2DayMaxDegree.innerHTML = `${Math.round(responseData.forecast.forecastday[2].day.maxtemp_c)} &deg;C`;
    next2DayMinDegree.innerHTML = `${Math.round(responseData.forecast.forecastday[2].day.mintemp_c)} &deg;C`;
    nex2tDayIcon.setAttribute("src", `https:${responseData.forecast.forecastday[2].day.condition.icon}`);
    next2dayState.innerHTML = responseData.forecast.forecastday[2].day.condition.text;;
    next2dayHumidty.innerHTML = `${responseData.forecast.forecastday[2].day .avghumidity} %`;
    next2dayWind.innerHTML = `${responseData.forecast.forecastday[2].day.maxwind_kph} km/h`;
};

/////////////////////////// search function /////////////////////////////

searchinput.addEventListener("keyup", function() {
    currentCity = searchinput.value;
    getWeatherData();
});
getWeatherData()







