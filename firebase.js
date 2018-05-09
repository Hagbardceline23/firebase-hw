var config = {
  apiKey: "AIzaSyD93BFMIhp9p1MNqzNLovv0AnHkjxbBhw0",
  authDomain: "fir-hw-932eb.firebaseapp.com",
  databaseURL: "https://fir-hw-932eb.firebaseio.com",
  projectId: "fir-hw-932eb",
  storageBucket: "fir-hw-932eb.appspot.com",
  messagingSenderId: "503585465533"
};
var app = firebase.initializeApp(config);
var database = app.database();

$(document).ready(function(){
//create variables to retrieve values from the form field
   $('#submit-button').on('click', function(event){
     event.preventDefault();
    console.log("clicked")
    //I don't think that event.preventDefault (); is needed here.
  

  var trainName = $('#trainName').val('');
  //now make sure that the form field is cleared

     $('#trainName').val('');

  var trainDestination = $('#trainDestination').val().trim();
     $('#trainDestination').val('');

  
  var firstTrainTime = $('#firstTrainTime').val().trim();
     $('#firstTrainTime').val('');

  var frequency = $('#frequency').val().trim();
     $('#frequency').val('');

  var firstTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1,"years");
     console.log("FirstTimeConverted");

  var currentTime = moment();
     console.log("current Time" + moment(currentTime).format("hh:mm"));

     console.log('trainName');
 
  var newTrainData = {
    trainName : trainName,
    trainDestination : trainDestination,
    firstTrainTime : firstTrainTime,
    frequency : frequency
  };
  
  database.ref().push(newTrainData);

  database.ref().on("child_added", function(childSnapshot, prevChildKey){
console.log(childSnapshot.val());
  });

  $("#info-table > tbody").append ("<tr><td>" + trainName + "</td></tr>");
    
     
});
});