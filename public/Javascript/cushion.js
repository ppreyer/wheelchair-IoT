
$(document).ready(function() {
  var scanner = $("#scan-number").val();
  var location = $("#location").val();
  var editScanner = $("#edit-scan-number").val();
  var editLocation = $("#edit-location").val();

  $(document).on("click", ".submit", addCushion);
  $(document).on("click", ".update", editCushion);
  $(document).on("click", ".cushion-info", displayCushionInfo);

});

  function displayLocalFacility(event) {
    event.preventDefault();
    $(event.target).html();
    var facilityNumber = $(event.target).html();
    var facilityNumber = $(".graphs").val();
      window.location = '/facility?id=' + facilityNumber
  };

function displayCushionInfo(event) {
  event.preventDefault();
  var cushionId = this.id;
  console.log("ID", cushionId);
  var cushionObject = {
    id: cushionId
  }
  $.post("/cushion-info", cushionObject).then(function(data) {
    location.assign("http://localhost:3000/cushion-info");
    $(".container").html('Hello World');
  });
}

function addCushion(event) {
  event.preventDefault();
  var scanner = $("#scan-number").val().trim();
  var facilityId = $("#facilitySelect").val();
  var newCushion = {
    spring_rate: scanner,
    FacilityId: facilityId
  };
  $.post("/new-cushion", newCushion).then(function(data) {
    // $(".cushion").val("");
    window.location.reload();
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
  };
  var id = editScanner;
  $.ajax({
    url: "/new-cushion/" + id,
    method: "PUT",
    data: newCushion
  });
};
