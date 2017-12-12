$(document).ready(function() {
  var scanner = $("#scan-number").val();
  var location = $("#location").val();
  var editScanner = $("#edit-scan-number").val();
  var editLocation = $("#edit-location").val();

  $(document).on("click", ".submit", addCushion);
  $(document).on("click", ".update", editCushion);

function addCushion(event) {
  event.preventDefault();
  var scanner = $("#scan-number").val();
  console.log("SCANNER", scanner);
  var location = $("#location").val();
  console.log("LOCATION", location);
  var newCushion = {
    scanner_number: scanner,
    facility_location: location
  };
  console.log("NEW CUSH", newCushion);
  $.post("/new-cushion", newCushion).then(function(data) {
    $(".cushion").val("");
    // location.reload();
    console.log("CUSH ADDED", data);
  });
};

function editCushion(event) {
  event.preventDefault();
  var editScanner = $("#edit-scan-number").val();
  var editLocation = $("#edit-location").val();
  var newCushion = {
    scanner_number: editScanner,
    facility_location: editLocation
  };
  console.log("EDIT CUSH", newCushion);
  var id = editScanner;
  console.log("ID", id);
  $.ajax({
    url: "/new-cushion/" + id,
    method: "PUT",
    data: newCushion
    // success: function(result) {
    //   console.log("EDITED CUSHION", result);
    // }
  });
};

});