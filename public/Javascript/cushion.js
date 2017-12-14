$(document).ready(function() {
  var scanner = $("#scan-number").val();
  var location = $("#location").val();
  var editScanner = $("#edit-scan-number").val();
  var editLocation = $("#edit-location").val();

  $(document).on("click", ".submit", addCushion);
  $(document).on("click", ".update", editCushion);
  $(document).on("click", ".cushion-info", displayCushionInfo);

});

function displayCushionInfo(event) {
  event.preventDefault();
  var cushionId = this.id;
  console.log("ID", cushionId);
  var cushionObject = {
    id: cushionId
  }
  $.post("/cushion-info", cushionObject).then(function(data) {
    
  });
}

function addCushion(event) {
  event.preventDefault();
  var scanner = $("#scan-number").val().trim();
  console.log("SCANNER", scanner);
  var location = $("#location").val().trim();
  console.log("LOCATION", location);
  var facilityId = $(".facility-id").val().trim();
  // var facilityId = $("#facility-id").val().trim();
  var newCushion = {
    scanner_number: scanner,
    facility_location: location,
    FacilityId: facilityId
  };
  console.log("NEW CUSH", newCushion);
  $.post("/new-cushion", newCushion).then(function(data) {
    // $(".cushion").val("");
    window.location.reload();
    console.log("CUSH ADDED", data);
  });
};

function editCushion(event) {
  event.preventDefault();
  var editScanner = $("#edit-scan-number").val().trim();
  var editLocation = $("#edit-location").val().trim();
  var facilityId = $("#facility-id").val().trim();
  var newCushion = {
    scanner_number: editScanner,
    facility_location: editLocation,
    // FacilityId: facilityId
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
