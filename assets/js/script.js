let weatherApiKey = "011051029bc329765863330cf5cc3efa"

let citySearch = document.querySelector("#citySearch"); //city name input for the fetched url city variable.

let cityName = document.getElementById('cityName'); //targeting h2 element where name of city will be placed.

let citySearchBtn = document.querySelector("#citySearchBtn"); //button that the user clicks to submit city name.

// giving the search button ability to pull up weather info on the searched city.
citySearchBtn.addEventListener("click", function(event) {
   
    event.preventDefault(); // Prevent the form from submitting
 
    let city = citySearch.value; // city name entered by the user in the city input.

    // fetching weather data for the city with apikey
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`)

    .then(function (response) {
        return response.json();
    })

    //instructions on what to do with pulled weather data.
    .then(function (data) {
        
        //console.log(data); // Log pulled data to the console

        let date = dayjs().format("MM/DD/YYYY"); // grab date and format.

        let weatherIcon = document.createElement("img"); // create an img element (find out how to append alt tag and hover description).

        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // set the src to the weather icon URL.

        cityName.textContent = data.name + " " + date; // display the city name and date next to eachother.

        cityName.appendChild(weatherIcon); // add the weather icon to the cityName element.
    });
});
