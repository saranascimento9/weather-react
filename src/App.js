import "./App.css";

export default function App() {
  let infoWeather = {
    city: "Sintra",
    date: "Sunday, 12:00",
    temperature: "20",
    description: "Few Clouds",
    humidity: "80",
    wind: "11",
  };
  return (
    <body>
      <div class="container">
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <form id="search-form" class="mb-3">
              <div class="row">
                <input
                  type="search"
                  placeholder="type a city"
                  class="form-control"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div class="row">
                <input type="submit" value="go" class="buttonsearch" />
              </div>
            </form>

            <div class="overview">
              <ul>
                <li>Last updated:{infoWeather.date}</li>
                <li id="description">{infoWeather.description}</li>
              </ul>
            </div>

            <div class="row">
              <div class="clearfix weather-temperature">
                <h1 id="city">{infoWeather.city}</h1>
                <div class="float-left">
                  <strong id="temperature">{infoWeather.temperature}</strong>
                  <span class="units"> ºC</span>
                </div>
                <img
                  src="src/cloudy"
                  alt="cloudy"
                  id="icon"
                  class="float-left"
                />
              </div>
            </div>

            <div class="row mt-3">
              <ul class="weather-details">
                <li>
                  Humidity: <span id="humidity">{infoWeather.humidity}</span>%
                </li>
                <li>
                  Wind: <span id="wind">{infoWeather.wind}</span>km/h
                </li>
              </ul>
            </div>
            <div class="weather-forecast" id="forecast"></div>
          </div>

          <small class="open-source-link">
            <a
              href="https://github.com/saranascimento9/weather-react"
              target="_blank"
              rel="noreferrer"
            >
              Open Source code{" "}
            </a>
            by Sara Nascimento
          </small>
        </div>
      </div>

      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </body>
  );
}
