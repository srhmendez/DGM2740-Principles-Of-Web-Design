const d = new Date();
const todayDateNumber = d.getDay();
  console.log(d)
  console.log(todayDateNumber)
const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";


//Setting the URL PATH for  FETCH
const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5780993&appid=1a1f8422d1097090cfc9a2b1480ad453&units=imperial";


//Fetch Data from API URL and then wait for a response
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);


  let myList = weatherInfo.list;

    let forecastDayNumber = todayDateNumber - 1;
    console.log(forecastDayNumber)

    for (i = 0; i < myList.length; i++) {

      
    let time = myList[i].dt_txt;  
    
    //CITY 
   document.getElementById('place').textContent = weatherInfo.city.name;
   
    

    if (time.includes('15:00:00')) {
      console.log('Found an Entry with 21:00:00 in the time. It was a report for' + i + 'from the myList of 40')    
      
      forecastDayNumber += 1;

      
      if (forecastDayNumber === 7){
        forecastDayNumber = 0;
      }   


      //DAY NAME
      let theDayName = document.createElement('span');
      theDayName.textContent = weekday[forecastDayNumber]; 
      let theDayNameDiv = document.createElement('div');
      theDayNameDiv.appendChild(theDayName)  
      theDayNameDiv.className = 'dayOfWeek'
      
      //TEMPERATURE
      let theTemp = document.createElement('p');
      theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0"; 
      
      //ICON JAVASCRIP
      let iconCode = weatherInfo.list[i].weather[0].icon;
        console.log(iconCode)
      let iconPath = "//openweathermap.org/img/w/" + iconCode + ".png";
        console.log(iconPath)
      let theIcon = document.createElement('img');
      theIcon.src = iconPath; 

      let theDay = document.createElement('div');
      theDay.appendChild(theDayNameDiv);
      theDay.appendChild(theTemp);
      theDay.appendChild(theIcon);

      document.getElementById('weatherForecast').appendChild(theDay)
      theDay.className = "day"
          }
      }



  }); // End of the .then
