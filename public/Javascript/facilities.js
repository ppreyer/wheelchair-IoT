$(document).ready(function() {
  $(document).on("click", ".facility-submit", addFacility);

function addFacility(event) {
  event.preventDefault();
  var location = $("#facility-location").val();
  var newFacility = {
    location: location
  };
  $.post("/home", newFacility, getFacilities);
  $("#facility-location").val("");
};

function getFacilities() {
  console.log("I got here");
    $.get("/home", function(err, data) {
        // burgers = data;
        console.log('DATA', data);
        location.reload();
    });
};

});


