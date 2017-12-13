$(document).ready(function() {
  $(document).on("click", ".facility-submit", addFacility);

function addFacility(event) {
  var location = $("#facility-location").val();
  console.log("LOCATION", location);
  var newFacility = {
    location: location
  };
  console.log("NEW CUSH", newFacility);
  $.post("/facilities", newFacility).then(function(data) {
    $(".facility").val("");
    // location.reload();
    console.log("CUSH ADDED", data);
  });
};

});


