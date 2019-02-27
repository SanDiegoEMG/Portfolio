$(document).ready(function() {
  var newP = $("<p></p>");

  //  Exercise #1  W3 js basics
  // buttons= resetButton / theButton
  // #dayToday = place to show

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
  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var d = new Date();
  console.log("d = " + d);

  var yr = d.getFullYear();
  console.log(yr);

  var mth = d.getMonth();
  console.log(mth);

  var date = d.getDate();
  console.log(date);

  var mthName = months[mth];
  console.log(mthName);

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
    $("#timeNow").text(strTime);
  };

  function getDate() {
    // var compDate = $("#date").text(mthName + " " + date + ", " + yr);
    // document.getElementById("date").innerHTML = compDate; 
    $('#date').html( months[d.getMonth()] + " " + d.getDate() + ', ' + d.getFullYear());
  };

  
  function dayStamp() {
    var n = d.getDay();
    document.getElementById("dayToday").innerHTML = daysOfWeek[n];

  };

  $("#theButton").on("click", function() {
    formatAMPM(d);
    dayStamp();
    getDate();
  });

  function reset() {
    $("#dayToday").empty();
    $("#timeNow").empty();
    $("#date").empty();
  }

  $("#resetButton").on("click", function() {
    reset();
  });

  // End row1-1

  // simple api call to return random factoid
  var mathQueryURL = "http://numbersapi.com/random/trivia";

  $("#mathFun").on("click", function() {
    $.ajax({
      url: mathQueryURL,
      method: "GET"
    }).then(function(response) {
      $("#moreLearning").text(response);
    });
  });
  // End row1-2

  //  Exercise #2 W3 js basics
  $("#print").on("click", function() {
    printThis();
  });

  function printThis() {
    window.print();
  }
  // End row1-3
});
