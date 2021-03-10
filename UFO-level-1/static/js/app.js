var tableData = data;

const tbody = d3.select("tbody");

tableData.forEach(function(ufoData) {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");

// // Select the form
var form = d3.select("form");

// // Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {

//   // Prevent the page from refreshing
  d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  tbody.html("");

  filteredData.forEach(function(ufoData) {
    // console.log(ufoData);
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(function([key, value]) {
    // console.log(key, value);
          // Append a cell to the row for each value
          // in the weather report object
    var cell = row.append("td");
    cell.text(value);
        });
      });
    
  // city.append("th").text(`City: ${city}`);
  // state.append("th").text(`State: ${state}`);
  // country.append("th").text(`Country: ${country}`);
  // shape.append("th").text(`Shape: ${shape}`);
  // duration.append("th").text(`Duration: ${duration}`);
  // comments.append("th").text(`Comments: ${comments}`);

  
};





// YOUR CODE HERE!
