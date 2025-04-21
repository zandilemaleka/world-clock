function updateTime() {
//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
  "HH:mm:ss [<small>]A[</small>]"
);
let africaElement = document.querySelector("#africa");
if (africaElement) {
let africaDateElement = africaElement.querySelector(".date");
let africaTimeElement = africaElement.querySelector(".time");
let africaTime = moment().tz("Africa/Johannesburg");

africaDateElement.innerHTML = africaTime.format("MMMM Do, YYYY");
africaTimeElement.innerHTML = africaTime.format(
  "HH:mm:ss [<small>]A[</small>]"
);
}


}
let parisElement = document.querySelector("#paris");
if (parisElement) {
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("MMMM Do, YYYY");
parisTimeElement.innerHTML = parisTime.format(
  "HH:mm:ss [<small>]A[</small>]"
);

}}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current"){
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
    <div>
    <h2> ${cityName} </h2>
<div class="date">${cityTime.format("MMMM Do YYYY")}</div>
</div>
    <div class="time">${cityTime.format("HH:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div> <a href="/">All cities</a>`;
}
updateTime();
setInterval(updateTime, 1000);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);       

