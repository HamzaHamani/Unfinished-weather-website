// let lat;
// let long;
// const getweather = async function () {
//   const sme = await navigator.geolocation.getCurrentPosition((pos) => {
//     console.log(pos.coords);
//     let { latitude, longitude } = pos.coords;
//     lat = latitude;
//     long = longitude;
//   });
//   const res = await fetch(
//     `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${long}&appid={122c64209dda1374f146b7b3cbf47e9b
// }`
//   );
//   console.log(res);
// };

// getweather();

const latlot = function () {
  navigator.geolocation.getCurrentPosition((pos) => {
    console.log(pos.coords);
    let { latitude, longitude } = pos.coords;
  });
};
latlot();
let lat = [];
let long;
console.log(lat);

navigator.geolocation.getCurrentPosition((pos) => {
  console.log(pos.coords);
  let { latitude, longitude } = pos.coords;
});

let temp = document.querySelector(".temp");
let description = document.querySelector(".description");
let city = document.querySelector(".name");
let icon = document.querySelector(".icon");
console.log(icon);
document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  let value = document.querySelector("input").value;
  const weather = async function (lat, lon) {
    if (value == "") return alert("type your city");
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=122c64209dda1374f146b7b3cbf47e9b`
    );
    const data = await res.json();
    let [weather] = data.weather;
    console.log(data);
    console.log(weather);

    //displaying info
    document.querySelector(".temp").textContent = `${data.main.humidity}°C`;
    if (weather.main == "Clouds") {
      icon.src = "/clear-sky.png";
    }
    if (weather.main == "Clear") {
      icon.src = "/sun.png";
    }
    description.textContent = weather.main;
    city.textContent = `${data.name}`;
  };
  value.value = "";
  weather();
});
