(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "1c03ca5ff40ee1b1e7aa492546a3574c";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

Weather = function(){
}

Weather.prototype.getWeather = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.humidity);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;

},{"./../.env":1}],4:[function(require,module,exports){
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

$(document).ready(function(){
  $('#time').text(moment());
});

var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});

},{"./../js/temperature.js":2,"./../js/weather.js":3}]},{},[4]);
