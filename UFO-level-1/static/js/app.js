var tableData = data;

// var tbody = d3.select("thead");

// tableData.forEach(function(ufoData) {
//     console.log(ufoData);
//     var row = tbody.append("tr");
//     Object.entries(ufoData).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//       // in the weather report object
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });



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

  // console.log(inputValue);
  // console.log(tableData);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  console.log(filteredData);

  // First, create an array with just the date values
  // var dates = filteredData.map(date => date.datetime);

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages

  var city = filteredData.City;
  var state = filteredData.State;
  var country = filteredData.Country
  var shape = filteredData.Shape
  var duration = filteredData.Duration;
  var comments =filteredData.Comments;

  // var list = d3.select(".table-striped");
  var tbody = d3.select("tbody");
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

  // list.html("");

  city.append("th").text(`City: ${city}`);
  state.append("th").text(`State: ${state}`);
  country.append("th").text(`Country: ${country}`);
  shape.append("th").text(`Shape: ${shape}`);
  duration.append("th").text(`Duration: ${duration}`);
  comments.append("th").text(`Comments: ${comments}`);
};



  //Pull from activity 9 the code to type and search in a button and pull all info related from the data

  // Select the button
// var form = d3.select("form");
// form.on("submit",runEnter);

//   // Complete the event handler function for the form
// function runEnter() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(tableData);

//   var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

//   console.log(filteredData);


//   var tableData = data;

// YOUR CODE HERE!
