$(document).ready(function(){
//create variables to retrieve values from the form field

  var trainName = $('#trainName').val('');
  //now make sure that the form field is cleared

     $('#trainName').val('');

  var trainDestination = $('#trainDestination').val();
     $('#trainDestination').val('');

  
  var firstTrainTime = $('#firstTrainTime').val();
     $('#firstTrainTime').val('');

  var frequency = $('#frequency').val();
     $('#frequency').val('');

  var firstTimeConverted = moment(first_time, "HH:mm").subtract(1,"years");
     console.log("FirstTimeConverted");

  var currentTime = moment();
     console.log("current Time" + moment(currentTime).format("hh:mm"));
});