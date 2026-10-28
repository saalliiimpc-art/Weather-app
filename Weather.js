let themeBtn=document.getElementById("themeBtn");
let sbci=document.getElementsByClassName("search-section")[0];
let cityInput=document.getElementById("cityInput");
let searchBtn=document.getElementById("searchBtn")
let weatherCard=document.getElementById("weatherCard");
let errorMsg=document.getElementById("errorMsg");
let favoritesList=document.getElementById("favoritesList")


// REPLACE THIS with your OpenWeatherMap API key (FREE signup)
const API_KEY = "9fc7985f61035dc1ce3b09f62f2f76c5";
// 1. IMPLEMENT getWeather(city) - Fetch API + async/await
async function getWeather(city){
    const responce =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    if (!responce.ok){
        if(responce.status===401){
            throw new Error("invalid API")
        }
        if(responce.status===404){
            throw new Error("city not found...!")
        }
        throw new Error("Somthing Went Wrong")
    }
    const data=await responce.json()
    // console.log(data.name);
    // TODO: Complete this function
    return {
        city: data.name,
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed
    };
}
//         // 2. IMPLEMENT addFavorite(city)
//         async function addFavorite(city) {

//             // TODO: localStorage + check duplicates

//         }



//         // 3. IMPLEMENT loadFavorites()

//         function loadFavorites() {

//             // TODO: Display favorites from localStorage

//         }



        // 4. IMPLEMENT searchWeather()

async function searchWeather() {// TODO: Show loading, call getWeather, handle errors
    let city =cityInput.value.trim()
    let searchdata=await getWeather(city)
    console.log(searchdata.feelsLike);
    


}
searchBtn.addEventListener("click",searchWeather())



        // 5. IMPLEMENT debounceSearch()

        //function debounceSearch() {

            // TODO: 500ms delay for search input

        //}



        // // 6. Event Listeners (wire up buttons/inputs)

        // document.addEventListener('DOMContentLoaded', function() {

        //     // TODO: Add your event listeners here

        //     loadFavorites();

        // });



        // // Export functions for button onclick (temporary)

        // // window.searchWeather = searchWeather;

        // // window.addFavorite = addFavorite;