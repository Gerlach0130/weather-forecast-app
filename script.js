var apiKey = "7a3b072f3fd58c749309a940dbd32a46";
var lat;
var lon;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
var newYork = document.querySelector(".ny");
var losAngeles = document.querySelector(".la");
var atlanta = document.querySelector(".atl");
var dallas = document.querySelector(".dal");
var chicago = document.querySelector(".chi");
var seattle = document.querySelector(".sea");
var miami = document.querySelector(".mia");
var boston = document.querySelector(".bos");
var lasVegas = document.querySelector(".lv");
var chosenCity = document.getElementById("chosencity");
var submitBtn = document.getElementById("submit");
var textInput = document.getElementById("search-input");

newYork.addEventListener("click", getNewYork);
losAngeles.addEventListener("click", getLosAngeles);
atlanta.addEventListener("click", getAtlanta);
dallas.addEventListener("click", getDallas);
chicago.addEventListener("click", getChicago);
seattle.addEventListener("click", getSeattle);
miami.addEventListener("click", getMiami);
boston.addEventListener("click", getBoston);
lasVegas.addEventListener("click", getLasVegas);
submitBtn.addEventListener("click", citySearch);

renderPrevious();

function renderPrevious() {
    var name = localStorage.getItem("name");
    var temp = localStorage.getItem("temp");
    var humidity = localStorage.getItem("humid");
    var wind = localStorage.getItem("wind");
    if (name === null) {
        return;
    }
    chosenCity.innerHTML = "<strong>" + name + ":</strong><br>" + "Temperature: " + temp + "°F<br>" + "Humidity: " +
        humidity + "%<br>" + "Wind Speed: " + wind + " mph";
}

function citySearch() {
    localStorage.clear();
    var queryURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + textInput.value + "&limit=" + 1 + "&appid=" + apiKey;
     fetch(queryURL, {
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var lat = data[0].lat;
        var lon = data[0].lon;
        var queryURLNew = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
       fetch(queryURLNew, {
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(data.name);
        console.log(data.main.temp);
        console.log(data.main.humidity);
        console.log(data.wind.speed);
        chosenCity.innerHTML = "<strong>" + textInput.value + ":</strong><br>" + "Temperature: " + data.main.temp + "°F<br>" + "Humidity: " +
            data.main.humidity + "%<br>" + "Wind Speed: " + data.wind.speed + " mph";
            localStorage.setItem("name", data.name);
            localStorage.setItem("temp", data.main.temp);
            localStorage.setItem("humid", data.main.humidity);
            localStorage.setItem("wind", data.wind.speed);
            
        })})};


function getNewYork() {
    localStorage.clear();
    var lat = 40.714272;
    var lon = -74.005966;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
    fetch(queryURL, {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.main.humidity);
    console.log(data.wind.speed);
    chosenCity.innerHTML = "<strong>" + data.name + " City:</strong><br>" + "Temperature: " + data.main.temp + "°F<br>" + "Humidity: " +
        data.main.humidity + "%<br>" + "Wind Speed: " + data.wind.speed + " mph";
        localStorage.setItem("name", data.name + " City");
        localStorage.setItem("temp", data.main.temp);
        localStorage.setItem("humid", data.main.humidity);
        localStorage.setItem("wind", data.wind.speed);
    })};

function getLosAngeles() {
    localStorage.clear();
    var lat = 34.052231;
    var lon = -118.243683;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
    fetch(queryURL, {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.main.humidity);
    console.log(data.wind.speed);
    chosenCity.innerHTML = "<strong>" + data.name + ":</strong><br>" + "Temperature: " + data.main.temp + "°F<br>" + "Humidity: " +
        data.main.humidity + "%<br>" + "Wind Speed: " + data.wind.speed + " mph";
        localStorage.setItem("name", data.name);
        localStorage.setItem("temp", data.main.temp);
        localStorage.setItem("humid", data.main.humidity);
        localStorage.setItem("wind", data.wind.speed);
  });
}

function getAtlanta() {
    localStorage.clear();
    var lat = 33.749001;
    var lon = -84.387978;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
    fetch(queryURL, {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.main.humidity);
    console.log(data.wind.speed);
    chosenCity.innerHTML = "<strong>" + data.name + ":</strong><br>" + "Temperature: " + data.main.temp + "°F<br>" + "Humidity: " +
        data.main.humidity + "%<br>" + "Wind Speed: " + data.wind.speed + " mph";
        localStorage.setItem("name", data.name);
        localStorage.setItem("temp", data.main.temp);
        localStorage.setItem("humid", data.main.humidity);
        localStorage.setItem("wind", data.wind.speed);
  });
}

function getDallas() {
    localStorage.clear();
    var lat = 32.783058;
    var lon = -96.806671;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
    fetch(queryURL, {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.main.humidity);
    console.log(data.wind.speed);
    chosenCity.innerHTML = "<strong>" + data.name + ":</strong><br>" + "Temperature: " + data.main.temp + "°F<br>" + "Humidity: " +
        data.main.humidity + "%<br>" + "Wind Speed: " + data.wind.speed + " mph";
        localStorage.setItem("name", data.name);
        localStorage.setItem("temp", data.main.temp);
        localStorage.setItem("humid", data.main.humidity);
        localStorage.setItem("wind", data.wind.speed);
  });
}

function getChicago() {
    localStorage.clear();
    var lat = 41.850029;
    var lon = -87.650047;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
    fetch(queryURL, {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.main.humidity);
    console.log(data.wind.speed);
    chosenCity.innerHTML = "<strong>" + data.name + ":</strong><br>" + "Temperature: " + data.main.temp + "°F<br>" + "Humidity: " +
        data.main.humidity + "%<br>" + "Wind Speed: " + data.wind.speed + " mph";
        localStorage.setItem("name", data.name);
        localStorage.setItem("temp", data.main.temp);
        localStorage.setItem("humid", data.main.humidity);
        localStorage.setItem("wind", data.wind.speed);
  });
}

function getSeattle() {
    localStorage.clear();
    var lat = 47.606209;
    var lon = -122.332069;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
    fetch(queryURL, {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.main.humidity);
    console.log(data.wind.speed);
    chosenCity.innerHTML = "<strong>" + data.name + ":</strong><br>" + "Temperature: " + data.main.temp + "°F<br>" + "Humidity: " +
        data.main.humidity + "%<br>" + "Wind Speed: " + data.wind.speed + " mph";
        localStorage.setItem("name", data.name);
        localStorage.setItem("temp", data.main.temp);
        localStorage.setItem("humid", data.main.humidity);
        localStorage.setItem("wind", data.wind.speed);
  });
}

function getMiami() {
    localStorage.clear();
    var lat = 25.774269;
    var lon = -80.193657;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
    fetch(queryURL, {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.main.humidity);
    console.log(data.wind.speed);
    chosenCity.innerHTML = "<strong>" + data.name + ":</strong><br>" + "Temperature: " + data.main.temp + "°F<br>" + "Humidity: " +
        data.main.humidity + "%<br>" + "Wind Speed: " + data.wind.speed + " mph";
        localStorage.setItem("name", data.name);
        localStorage.setItem("temp", data.main.temp);
        localStorage.setItem("humid", data.main.humidity);
        localStorage.setItem("wind", data.wind.speed);
  });
}

function getBoston() {
    localStorage.clear();
    var lat = 42.358429;
    var lon = -71.059769;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
    fetch(queryURL, {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.main.humidity);
    console.log(data.wind.speed);
    chosenCity.innerHTML = "<strong>" + data.name + ":</strong><br>" + "Temperature: " + data.main.temp + "°F<br>" + "Humidity: " +
        data.main.humidity + "%<br>" + "Wind Speed: " + data.wind.speed + " mph";
        localStorage.setItem("name", data.name);
        localStorage.setItem("temp", data.main.temp);
        localStorage.setItem("humid", data.main.humidity);
        localStorage.setItem("wind", data.wind.speed);
  });
}

function getLasVegas() {
    localStorage.clear();
    var lat = 36.174969;
    var lon = -115.137222;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
    fetch(queryURL, {
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.main.humidity);
    console.log(data.wind.speed);
    chosenCity.innerHTML = "<strong>" + data.name + ":</strong><br>" + "Temperature: " + data.main.temp + "°F<br>" + "Humidity: " +
        data.main.humidity + "%<br>" + "Wind Speed: " + data.wind.speed + " mph";
        localStorage.setItem("name", data.name);
        localStorage.setItem("temp", data.main.temp);
        localStorage.setItem("humid", data.main.humidity);
        localStorage.setItem("wind", data.wind.speed);
  })
};
