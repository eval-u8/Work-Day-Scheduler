// State variables
var currDay = moment().format('MMMM Do YYYY');
var currDayEl = document.getElementById("currentDay");

// 
// Actual code
// 

currDayEl.innerHTML = currDay;