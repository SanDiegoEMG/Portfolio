$(document).ready(function () {

    var newP = $("<p></p>");

    //  Exercise #1  W3 js basics
    // buttons= resetButton / theButton 
    // #dayToday = place to show
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    function dayTime() {
        var d = new Date();
        var n = d.getDay()
        var y = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
        document.getElementById("dayToday").innerHTML = daysOfWeek[n];
        document.getElementById("timeNow").innerHTML = y;
    };

    function reset() {
        $("#dayToday").empty();
        $("#timeNow").empty();
    }

    $("#theButton").on("click", function () {
        dayTime();
    });

    $("#resetButton").on("click", function () {
        reset();
    });
    // End row1-1



    // simple api call to return random factoid
    var mathQueryURL = "http://numbersapi.com/random/trivia";

    $("#mathFun").on("click", function () {
        $.ajax({
            url: mathQueryURL,
            method: "GET"
        }).then(function (response) {
            $("#moreLearning").text(response);
        })
    })
    // End row1-2



    //  Exercise #2 W3 js basics
    $("#print").on("click", function () {
        printThis()
    });

    function printThis() {
        window.print();
    }
    // End row1-3



});