var apiKey = require('./../.env').apiKey;

var Temperature = function(){
}

Temperature.prototype.getTemperature = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.temp);
  }).fail(function(error) {
    $('.showTemperature').text(error.responseJSON.message);
  });
}

exports.temperatureModule = Temperature;
