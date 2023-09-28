const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1a1932c18dmsh8ae3034fa9d498cp10f8a2jsnd98276ca518f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather= (city)=>{
	cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)

		Cloud_pct.innerHTML = response.cloud_pct
		Temp.innerHTML = response.Temp
		Feels_like.innerHTML = response.Feels_like
		Humidity.innerHTML = response.Humidity
		Min_Temp.innerHTML = response.Min_Temp
		Max_Temp.innerHTML = response.Max_Temp
		Wind_Speed.innerHTML = response.Wind_Speed
		Wind_Degrees.innerHTML = response.Wind_Degrees
		Sunrise.innerHTML = response.Sunrise
		Sunset.innerHTML = response.Sunset
	})
	.catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")

<script>
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
</script>