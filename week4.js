/**
 * @author
 */
console.log("hi there");

//UNEMDATA is the local name of the json file I just loaded
function dataLoaded(UNEMPDATA) {

	console.log(UNEMPDATA);

	var myObsData = UNEMPDATA.observations;

	//I am trying to construct an array of arrays
	var myDataArray = [];
	//console.log(myDataArray);
	//wait a second, I need headers to be the first
	//
	
	var headerArray = ["Date", "value"];
	
	myDataArray.push(headerArray);
	

	//specify starting point and ending point
	for (var i = 0; i < myObsData.length; i++) {

		//create reference to current object in list
		var currObj = myObsData[i]

		var currArray = [currObj.date, Number(currObj.value)];

		myDataArray.push(currArray);

		//end for loop
	}
	
	console.log(myDataArray);
	
	
	//feed data to visualization library
	var myDataTable = google.visualization.arrayToDataTable(myDataArray);
	
	//create options object to actually customize the look if the chart
	
	var options = {
          title: 'Unemployment rate'
        };

	
	//tell it to create a line chart, and give it the 
	var myChart = new google.visualization.LineChart(document.getElementById("MyChart"));
	myChart.draw(myDataTable);
}

function googleLoaded() {
	
	console.log("googleLoaded");
	
	$.get("UNEMP270V_data.json", dataLoaded, "json");
	
}

console.log("google loaded");

function pageLoad() {

	console.log("go to page loaded");

	//load the google visualization library
	google.load("visualization", '1', {
		packages : ["corechart"],
		callback : "googleLoaded"
	}); 
	

	//

	

}


$(document).ready(pageLoad);

