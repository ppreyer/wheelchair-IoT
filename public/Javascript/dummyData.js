$(document).ready(function() {
  var spring_rate = $("#spring_rate").val();
  var CushionId = $("#cushion-id").val();

  $(document).on("click", ".data-submit", addDataPoint);

});

function addDataPoint(event) {
  event.preventDefault();
  var spring_rate = $("#spring_rate").val().trim();
  var CushionId = $("#cushion-id").val().trim();
  var newDataPoint = {
    spring_rate: spring_rate,
    CushionId: CushionId
  };
  console.log("NEW DATAPOINT", newDataPoint);
  $.post("/dummy-data", newDataPoint).then(function(data) {
    window.location.reload();
    console.log("DATAPOINT ADDED", data);
  });
};