// Global variables
let searchHistoryArray = [];
let searchHistoryStorage = JSON.parse(localStorage.getItem("searchHistory"));

// Check if there's search history in local storage
if (searchHistoryStorage) {
    searchHistoryArray = searchHistoryStorage;
    // Loop through the search history array
    for (let i = 0; i < searchHistoryArray.length; i++) {
        // Create a button for each city in the search history array
        createSearchHistoryButton(searchHistoryArray[i]);
    }
};

// Event listeners
document.getElementById("searchForm").addEventListener("submit", getWeather);
document.getElementById("searchHistory").addEventListener("click", getWeatherFromHistory);

// Get weather function
async function getWeather(e) {
    e.preventDefault();

    // Get city from input
    const city = document.getElementById("citySearch").value;

    // Fetch data from API
    const weatherApiKey = "011051029bc329765863330cf5cc3efa";
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}`;
    try {
        const response = await fetch(weatherApiUrl);
        const data = await response.json();

       // console.log(data.list[0].dt_txt)

        let cityTitle = document.getElementById('cityName')
        let weatherIcon = document.createElement("img");
        let cityNameDate = dayjs().format("MM/DD/YYYY");
        let dayOneDate = dayjs(data.list[0].dt_txt).format("MM/DD/YYYY");
        let dayTwoDate = dayjs(data.list[8].dt_txt).format("MM/DD/YYYY");
        let dayThreeDate = dayjs(data.list[16].dt_txt).format("MM/DD/YYYY");
        let dayFourDate = dayjs(data.list[24].dt_txt).format("MM/DD/YYYY");
        let dayFiveDate = dayjs(data.list[32].dt_txt).format("MM/DD/YYYY");

        // Update UI with data
        cityTitle.textContent = data.city.name + " " + cityNameDate;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
        cityTitle.appendChild(weatherIcon);
        document.getElementById("cityTemp").textContent = `Temp: ${data.list[0].main.temp} K`;
        document.getElementById("cityWind").textContent = `Wind: ${data.list[0].wind.speed} MPH`;
        document.getElementById("cityHumidity").textContent = `Humidity: ${data.list[0].main.humidity} %`;

        // five day forcast 

        document.getElementById("fiveDayForcastTitle").innerHTML = "5-day Forecast:"

        // next day forcast 

        document.getElementById(`dayOneDate`).textContent = dayOneDate;
        document.getElementById(`dayOneImg`).src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
        document.getElementById(`dayOneTemp`).textContent = `Temp: ${data.list[0].main.temp} F`;
        document.getElementById(`dayOneWind`).textContent = `Wind: ${data.list[0].wind.speed} MPH`;
        document.getElementById(`dayOneHumidity`).textContent = `Humidity: ${data.list[0].main.humidity}%`;

        // day 2 forcast 

        document.getElementById(`dayTwoDate`).textContent = dayTwoDate;
        document.getElementById(`dayTwoImg`).src = `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`;
        document.getElementById(`dayTwoTemp`).textContent = `Temp: ${data.list[8].main.temp} F`;
        document.getElementById(`dayTwoWind`).textContent = `Wind: ${data.list[8].wind.speed} MPH`;
        document.getElementById(`dayTwoHumidity`).textContent = `Humidity: ${data.list[8].main.humidity}%`;

        // day 3 forcast 

        document.getElementById(`dayThreeDate`).textContent = dayThreeDate;
        document.getElementById(`dayThreeImg`).src = `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`;
        document.getElementById(`dayThreeTemp`).textContent = `Temp: ${data.list[16].main.temp} F`;
        document.getElementById(`dayThreeWind`).textContent = `Wind: ${data.list[16].wind.speed} MPH`;
        document.getElementById(`dayThreeHumidity`).textContent = `Humidity: ${data.list[16].main.humidity}%`;

        // day 4 forcast 

        document.getElementById(`dayFourDate`).textContent = dayFourDate;
        document.getElementById(`dayFourImg`).src = `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`;
        document.getElementById(`dayFourTemp`).textContent = `Temp: ${data.list[24].main.temp} F`;
        document.getElementById(`dayFourWind`).textContent = `Wind: ${data.list[24].wind.speed} MPH`;
        document.getElementById(`dayFourHumidity`).textContent = `Humidity: ${data.list[24].main.humidity}%`;

        // day 5 forcast 

        document.getElementById(`dayFiveDate`).textContent = dayFiveDate;
        document.getElementById(`dayFiveImg`).src = `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`;
        document.getElementById(`dayFiveTemp`).textContent = `Temp: ${data.list[32].main.temp} F`;
        document.getElementById(`dayFiveWind`).textContent = `Wind: ${data.list[32].wind.speed} MPH`;
        document.getElementById(`dayFiveHumidity`).textContent = `Humidity: ${data.list[32].main.humidity}%`;

        // Add city to search history
        if (!searchHistoryArray.includes(city)) {
            searchHistoryArray.push(city);
            // Update the search history in local storage
            localStorage.setItem("searchHistory", JSON.stringify(searchHistoryArray));
            createSearchHistoryButton(city);
                 
        }
    } catch (err) {
        console.log("Error: " + err);
    }
};

// Get weather from history function
async function getWeatherFromHistory(e) {
    if (e.target.tagName === "BUTTON") {
        const city = e.target.textContent;

        // Fetch data from API
        const weatherApiKey = "011051029bc329765863330cf5cc3efa";
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}`;
        try {
            const response = await fetch(weatherApiUrl);
            const data = await response.json();

            let cityTitle = document.getElementById('cityName')
            let weatherIcon = document.createElement("img");
            let cityNameDate = dayjs().format("MM/DD/YYYY");
            let dayOneDate = dayjs(data.list[0].dt_txt).format("MM/DD/YYYY");
            let dayTwoDate = dayjs(data.list[8].dt_txt).format("MM/DD/YYYY");
            let dayThreeDate = dayjs(data.list[16].dt_txt).format("MM/DD/YYYY");
            let dayFourDate = dayjs(data.list[24].dt_txt).format("MM/DD/YYYY");
            let dayFiveDate = dayjs(data.list[32].dt_txt).format("MM/DD/YYYY");

            // Update UI with data
            cityTitle.textContent = data.city.name + " " + cityNameDate;
            weatherIcon.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
            cityTitle.appendChild(weatherIcon);
            document.getElementById("cityTemp").textContent = `Temp: ${data.list[0].main.temp} K`;
            document.getElementById("cityWind").innerHTML = `Wind: ${data.list[0].wind.speed} MPH`;
            document.getElementById("cityHumidity").innerHTML = `Humidity: ${data.list[0].main.humidity} %`;

            // five day forcast 

            document.getElementById("fiveDayForcastTitle").innerHTML = "5-day Forecast:"

            // next day forcast 

            document.getElementById(`dayOneDate`).textContent = dayOneDate;
            document.getElementById(`dayOneImg`).src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
            document.getElementById(`dayOneTemp`).textContent = `Temp: ${data.list[0].main.temp} F`;
            document.getElementById(`dayOneWind`).textContent = `Wind: ${data.list[0].wind.speed} MPH`;
            document.getElementById(`dayOneHumidity`).textContent = `Humidity: ${data.list[0].main.humidity}%`;

            // day 2 forcast 

            document.getElementById(`dayTwoDate`).textContent = dayTwoDate;
            document.getElementById(`dayTwoImg`).src = `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`;
            document.getElementById(`dayTwoTemp`).textContent = `Temp: ${data.list[8].main.temp} F`;
            document.getElementById(`dayTwoWind`).textContent = `Wind: ${data.list[8].wind.speed} MPH`;
            document.getElementById(`dayTwoHumidity`).textContent = `Humidity: ${data.list[8].main.humidity}%`;

            // day 3 forcast 

            document.getElementById(`dayThreeDate`).textContent = dayThreeDate;
            document.getElementById(`dayThreeImg`).src = `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`;
            document.getElementById(`dayThreeTemp`).textContent = `Temp: ${data.list[16].main.temp} F`;
            document.getElementById(`dayThreeWind`).textContent = `Wind: ${data.list[16].wind.speed} MPH`;
            document.getElementById(`dayThreeHumidity`).textContent = `Humidity: ${data.list[16].main.humidity}%`;

            // day 4 forcast 

            document.getElementById(`dayFourDate`).textContent = dayFourDate;
            document.getElementById(`dayFourImg`).src = `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`;
            document.getElementById(`dayFourTemp`).textContent = `Temp: ${data.list[24].main.temp} F`;
            document.getElementById(`dayFourWind`).textContent = `Wind: ${data.list[24].wind.speed} MPH`;
            document.getElementById(`dayFourHumidity`).textContent = `Humidity: ${data.list[24].main.humidity}%`;

            // day 5 forcast 

            document.getElementById(`dayFiveDate`).textContent = dayFiveDate;
            document.getElementById(`dayFiveImg`).src = `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`;
            document.getElementById(`dayFiveTemp`).textContent = `Temp: ${data.list[32].main.temp} F`;
            document.getElementById(`dayFiveWind`).textContent = `Wind: ${data.list[32].wind.speed} MPH`;
            document.getElementById(`dayFiveHumidity`).textContent = `Humidity: ${data.list[32].main.humidity}%`;

        } catch (err) {
            console.log("Error: " + err);
        }
    }
};

// Create search history button function
function createSearchHistoryButton(city) {
    const cityNameHistoryBtn = document.createElement("button");
    cityNameHistoryBtn.innerHTML = city;
    document.getElementById("searchHistory").appendChild(cityNameHistoryBtn);
};



//////////////////////////////////////////////////////// first attempt code ////////////////////////////////////////////////////////

// let weatherApiKey = "011051029bc329765863330cf5cc3efa"

// let citySearch = document.querySelector("#citySearch"); //city name input for the fetched url city variable.

// let cityName = document.getElementById('cityName'); //targeting h2 element where name of city will be placed.

// let citySearchBtn = document.querySelector("#citySearchBtn"); //button that the user clicks to submit city name.

// // giving the search button ability to pull up weather info on the searched city.
// citySearchBtn.addEventListener("click", function(event) {
   
//     event.preventDefault(); // Prevent the form from submitting
 
//     let city = citySearch.value; // city name entered by the user in the city input.

//     // fetching weather data for the city with apikey
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`)

//     .then(function (response) {
//         return response.json();
//     })

//     //instructions on what to do after city has been inputted and data has been retrieved for that city.
//     .then(function (data) {
        
//         //console.log(data); // Log pulled data to the console

//         let cityNameDate = dayjs().format("MM/DD/YYYY"); // grab date and format.

//         let weatherIcon = document.createElement("img"); // create an img element (find out how to append alt tag and hover description).

//         weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // set the src to the weather icon URL.

//         cityName.textContent = data.name + " " + cityNameDate; // display the city name and date next to eachother.

//         cityName.appendChild(weatherIcon); // add the weather icon to the cityName element.

//         //display temp, wind, and humidity data 
//         document.getElementById("cityTemp").textContent = `Temperature: ${data.main.temp} F`;
//         document.getElementById("cityWind").textContent = `Wind: ${data.wind.speed} MPH`;
//         document.getElementById("cityHumidity").textContent = `Humidity: ${data.main.humidity}%`;


//         // 5 day forcast below

//         document.getElementById("fiveDayForcastTitle").innerHTML = "5-day Forecast:"

//         fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}`)

//         .then(function (response) {
//             return response.json();
//         })

//         .then(function (forcast) {

//             console.log(forcast)

            // let dayOneDate = dayjs(forcast.list[0].dt_txt).format("MM/DD/YYYY");
            // let dayTwoDate = dayjs(forcast.list[8].dt_txt).format("MM/DD/YYYY");
            // let dayThreeDate = dayjs(forcast.list[16].dt_txt).format("MM/DD/YYYY");
            // let dayFourDate = dayjs(forcast.list[24].dt_txt).format("MM/DD/YYYY");
            // let dayFiveDate = dayjs(forcast.list[32].dt_txt).format("MM/DD/YYYY");

            // // next day forcast 

            // document.getElementById(`dayOneDate`).textContent = dayOneDate;
            // document.getElementById(`dayOneImg`).src = `http://openweathermap.org/img/wn/${forcast.list[0].weather[0].icon}@2x.png`;
            // document.getElementById(`dayOneTemp`).textContent = `Temp: ${forcast.list[0].main.temp} F`;
            // document.getElementById(`dayOneWind`).textContent = `Wind: ${forcast.list[0].wind.speed} MPH`;
            // document.getElementById(`dayOneHumidity`).textContent = `Humidity: ${forcast.list[0].main.humidity}%`;

            // // day 2 forcast 

            // document.getElementById(`dayTwoDate`).textContent = dayTwoDate;
            // document.getElementById(`dayTwoImg`).src = `http://openweathermap.org/img/wn/${forcast.list[8].weather[0].icon}@2x.png`;
            // document.getElementById(`dayTwoTemp`).textContent = `Temp: ${forcast.list[8].main.temp} F`;
            // document.getElementById(`dayTwoWind`).textContent = `Wind: ${forcast.list[8].wind.speed} MPH`;
            // document.getElementById(`dayTwoHumidity`).textContent = `Humidity: ${forcast.list[8].main.humidity}%`;

            // // day 3 forcast 

            // document.getElementById(`dayThreeDate`).textContent = dayThreeDate;
            // document.getElementById(`dayThreeImg`).src = `http://openweathermap.org/img/wn/${forcast.list[16].weather[0].icon}@2x.png`;
            // document.getElementById(`dayThreeTemp`).textContent = `Temp: ${forcast.list[16].main.temp} F`;
            // document.getElementById(`dayThreeWind`).textContent = `Wind: ${forcast.list[16].wind.speed} MPH`;
            // document.getElementById(`dayThreeHumidity`).textContent = `Humidity: ${forcast.list[16].main.humidity}%`;

            // // day 4 forcast 

            // document.getElementById(`dayFourDate`).textContent = dayFourDate;
            // document.getElementById(`dayFourImg`).src = `http://openweathermap.org/img/wn/${forcast.list[24].weather[0].icon}@2x.png`;
            // document.getElementById(`dayFourTemp`).textContent = `Temp: ${forcast.list[24].main.temp} F`;
            // document.getElementById(`dayFourWind`).textContent = `Wind: ${forcast.list[24].wind.speed} MPH`;
            // document.getElementById(`dayFourHumidity`).textContent = `Humidity: ${forcast.list[24].main.humidity}%`;

            // // day 5 forcast 

            // document.getElementById(`dayFiveDate`).textContent = dayFiveDate;
            // document.getElementById(`dayFiveImg`).src = `http://openweathermap.org/img/wn/${forcast.list[32].weather[0].icon}@2x.png`;
            // document.getElementById(`dayFiveTemp`).textContent = `Temp: ${forcast.list[32].main.temp} F`;
            // document.getElementById(`dayFiveWind`).textContent = `Wind: ${forcast.list[32].wind.speed} MPH`;
            // document.getElementById(`dayFiveHumidity`).textContent = `Humidity: ${forcast.list[32].main.humidity}%`;
            
           
//         });

//     });

//     // city search hisory

//     // let storedCityArray = JSON.parse(localStorage.getItem("cityNameSave"));
//     // let cityNameSave = storedCityArray || [];

//     // cityNameSave.push(city); // put searched city in the array using city variable
//     // localStorage.setItem("cityNameSave", JSON.stringify(cityNameSave));

//     // let citySearchHistory = document.getElementById("searchHistory");

//     // citySearchHistory.innerHTML = ""; // clear the div

//     // for (let i = 0; i < cityNameSave.length; i++) {
//     //     let citySearchedName = document.createElement("button");
//     //     citySearchedName.textContent = cityNameSave[i];
//     //     citySearchHistory.appendChild(citySearchedName); 
        
//     //     citySearchedName.addEventListener("click", () => {
//     //         city = citySearchedName.textContent;
//     //         citySearchBtn();
//     //       });
//     // }


// });

