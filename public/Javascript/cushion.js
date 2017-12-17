
$(document).ready(function() {
  var scanner = $("#scan-number").val();
  var location = $("#location").val();
  var editScanner = $("#edit-scan-number").val();
  var editLocation = $("#edit-location").val();

  $(document).on("click", ".submit", addCushion);
  $(document).on("click", ".update", editCushion);
  $(document).on("click", ".cushion-info", displayCushionInfo);

// function renderChart () { 
//     var myChart = Highcharts.chart('chart', {
//         chart: {
//             type: 'bar'
//         },
//         title: {
//             text: 'Fruit Consumption'
//         },
//         xAxis: {
//             categories: ['Apples', 'Bananas', 'Oranges']
//         },
//         yAxis: {
//             title: {
//                 text: 'Fruit eaten'
//             }
//         },
//         series: [{
//             name: 'Jane',
//             data: [1, 0, 4]
//         }, {
//             name: 'John',
//             data: [5, 7, 3]
//         }]
//     });
// };

// renderChart();

});

function displayCushionInfo(event) {
  event.preventDefault();
  var cushionId = this.id;
  console.log("ID", cushionId);
  var cushionObject = {
    id: cushionId
  }
  $.post("/cushion-info", cushionObject).then(function(data) {
    location.assign("http://localhost:3000/cushion-info");
    console.log("I got here");
    $(".container").html('Hello World');
  });
}

function addCushion(event) {
  event.preventDefault();
  var scanner = $("#scan-number").val().trim();
  console.log("SCANNER", scanner);
  // var location = $("#location").val().trim();
  var facilityId = $("#facilitySelect").val();
  console.log("ID", facilityId);
  // var facilityId = $("#facility-id").val().trim();
  var newCushion = {
    scanner_number: scanner,
    // facility_location: location,
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
