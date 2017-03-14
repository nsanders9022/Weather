var Temperature = require('./../js/temperature.js').temperatureModule;
var displayCelcisus = 0;
var displayTemperature = function(city, tempData) {
  $('.showTemperature').text("The temperature in " + city + " is " + tempData + ".s");
  $('.showFahrenheit').text("The temperature in this city is " + 9 / 5 * (tempData - 273) + 32);
  $('.showCelcius').text("The temperature in this city is " + (tempData - 273));
}

$(document).ready(function() {
  var currentTemperatureObject = new Temperature();
  $('#temperatureLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentTemperatureObject.getTemperature(city, displayTemperature);
  });
});
