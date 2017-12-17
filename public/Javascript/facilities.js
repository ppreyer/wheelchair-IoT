$(document).ready(function() {
  $(document).on("click", ".facility-submit", addFacility);
  // $(".facility-submit").on("click", addFacility);
});

function addFacility(event) {
  event.preventDefault();
  var location = $("#facility-location").val().trim();
  var newFacility = {
    location: location
  };
  $.post("/home", newFacility, function(data) {
    console.log("I got here");
  });
  $("#facility-location").val("");
};



