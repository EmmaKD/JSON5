/**
 * @author
 */
console.log("hi there");

function googleLoaded(){}

function pageLoad(){
		
	
console.log("go to page loaded");

//load the google visualization library
google.load("visualization",'1', {packages: ["corechart"], callback: "googleLoaded"});	

//

$.get("UEMP270V_data")
	
}

$(document).ready(pageLoad);

