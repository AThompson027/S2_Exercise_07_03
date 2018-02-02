/*
  JavaScript
  Exercise 3

  Tipton Turbines
  Calendar web page
  Author: Annie Thompson
  Date: 2.1.18

  Filename: tt.js
*/

//global variables
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var opponents = ["Lightning", "Combines", "Combines", "Combines", "Lightning", "Lightning",
"Lightning", "Lightning", "Barn Raisers", "Barn Raisers", "Barn Raisers", "Sodbusters", "Sodbusters",
"Sodbusters", "Sodbusters", "(off)", "River Riders", "River Riders",
"River Riders", "Big Dippers", "Big Dippers", "Big Dippers", "(off)",
"Sodbusters", "Sodbusters", "Sodbusters", "Combines", "Combines",
"Combines", "(off)", "(off)"];

var gameLocation = ["away", "away", "away", "away", "home", "home",
"home", "home", "home", "home", "home", "away",
"away", "away", "away", "", "away", "away",
"away", "away", "away", "away", "", "home",
"home", "home", "home", "home", "home", "", ""];

//function to place daysOfWeek values in header row cells.
function addColumnHeaders() {
  var i = 0;
  while (i < 7) {
    document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
    i++;
  }
}

//a funtion to place day of month value in first p element within each data table has as id
function addCalendarDates() {
  var i = 1;
  var paragraphs = "";
  do {
    var tableCell = document.getElementById("08-" + i);
    paragraphs = tableCell.getElementsByTagName("p");
    paragraphs[0].innerHTML = i;
    i++;
  }
  while (i <= 31);
}

//funtion to place opponents values in second p elements within each table data cell that has an id
function addGameInfo(){
  var paragraphs = "";
  for (var i = 0; i < 31; i++) {
    var date = i + 1;
    var tableCell = document.getElementById("08-" + date);
    paragraphs = tableCell.getElementsByTagName("p");
    paragraphs[1].innerHTML += opponents[i];
  }
}

//function to populate calendar
function setUpPage(){
  addColumnHeaders();
  addCalendarDates();
  addGameInfo();
}

//run setUpPage() function when page loads
window.addEventListener("load", setUpPage);
