
const form = document.querySelector('form');
//const resTemp = document.getElementById('resTemp');


function getWeather (searchCity) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=56c77bda635b2a6746e9ac4a6850c04b`;
     var strTemp= "Temprature : ";
    axios.get(url)
    .then((res)=>{
            const country = res.data.sys.country; 
            const temp = res.data.main.temp;
            const desc = res.data.weather[0].description;
            const maxT = res.data.main.temp_max;
            const minT = res.data.main.temp_min;
              document.getElementById('city').innerHTML = searchCity.toUpperCase() +" "+ country;
              document.getElementById('resTemp').innerHTML = "Temprature : " + parseFloat(temp-273).toFixed(2) + "*C";
              document.getElementById('desc').innerHTML = desc;
              document.getElementById('min-max').innerHTML = "Max Temprature : "+parseFloat(maxT-273).toFixed(2)+"*C , "
                                                             +"   Min Temprature : "+parseFloat(minT-273).toFixed(2)+"*C";
       // console.log(res.data);
    })
    .catch((err) => {
        alert('Enter valid city');
        console.log(err);
    })
}








form.addEventListener( 'submit', e => {

    e.preventDefault();

    const searchCity = form.elements[0].value;
    
    getWeather(searchCity);

    form.elements[0].value="";
})