var date = new Date(1989, 1, 17, 12, 1, 0);

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

var month = months[date.getMonth()];
var day = days[date.getDay()];

alert(day + " " + date.getDate() + " of " + month + " " + date.getFullYear());
 //эх прокачу