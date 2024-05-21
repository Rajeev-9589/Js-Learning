const temp = document.getElementById('temperature');
const wind = document.getElementById('windspeed');
const humid = document.getElementById('humidity');
let city ='Bhopal';

function getWeather(){
  const search = document.getElementById('search');
  city = search.value;
  // console.log(city);
  const wheatherapikey ='146624f75d106028b5f3f8c8bdbcf9e4'
const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${wheatherapikey}`




fetch(url).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
}).then(data => {
    const temprature = data.main.temp;
    const windspeed = data.wind.speed;
    const humidity = data.main.humidity;
    const cloud = data.weather[0].main;
    if(cloud==='Cloud') {
        const cloudWeather =document.getElementById('cloudimg');
        cloudWeather.src = 'cloud.png';
    }
    if(cloud==='Clear') {
      const cloudWeather =document.getElementById('cloudimg');
      cloudWeather.src = 'clear.png';
  }
  if(cloud==='Drizzle') {
    const cloudWeather =document.getElementById('cloudimg');
    cloudWeather.src = 'drizzle.png';
}
if(cloud==='Rain') {
  const cloudWeather =document.getElementById('cloudimg');
  cloudWeather.src = 'rain.png';
}
if(cloud==='Mist') {
  const cloudWeather =document.getElementById('cloudimg');
  cloudWeather.src = 'mist.png';
} 
    // console.log(cloud);
    humid.innerHTML =humidity+'% <br> humidity';
    wind.innerHTML=windspeed+'km/h <br> wind speed';
    temp.innerHTML=Math.floor(temprature-273.15)+`°C <br> ${city}`;


  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
}


function defaultWeather(){
  const wheatherapikey ='146624f75d106028b5f3f8c8bdbcf9e4'
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${wheatherapikey}`
  
  
  
  
  fetch(url).then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
  }).then(data => {
      const temprature = data.main.temp;
      const windspeed = data.wind.speed;
      const humidity = data.main.humidity;
       humid.innerHTML =humidity+'% <br> humidity';
    wind.innerHTML=windspeed+'km/h <br> wind speed';
    temp.innerHTML=Math.floor(temprature-273.15)+`°C <br> ${city}`;
    const cloud = data.weather[0].main;
    if(cloud==='Cloud') {
        const cloudWeather =document.getElementById('cloudimg');
        cloudWeather.src = 'cloud.png';
    }
    if(cloud==='Clear') {
      const cloudWeather =document.getElementById('cloudimg');
      cloudWeather.src = 'clear.png';
  }
  if(cloud==='Drizzle') {
    const cloudWeather =document.getElementById('cloudimg');
    cloudWeather.src = 'drizzle.png';
}
if(cloud==='Rain') {
  const cloudWeather =document.getElementById('cloudimg');
  cloudWeather.src = 'rain.png';
}
if(cloud==='Mist') {
  const cloudWeather =document.getElementById('cloudimg');
  cloudWeather.src = 'mist.png';
} 
    
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

defaultWeather();