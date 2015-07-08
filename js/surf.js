// Basic Information
APIKEY = '93bc401b3b817c4054c313bc0d601c12';

// IDs
veniceID = "2611";
elportoID = "2677";
//sunsetblvdID= "3673";

// Queries
var venice_query = "http://magicseaweed.com/api/" + APIKEY + "/forecast/?spot_id=" + veniceID + "&fields=localTimestamp,condition.temperature,swell.components.combined.height";
var elporto_query = "http://magicseaweed.com/api/" + APIKEY + "/forecast/?spot_id=" + elportoID + "&fields=localTimestamp,condition.temperature,swell.components.combined.height";
//var sunsetblvd_query = "http://magicseaweed.com/api/" + APIKEY + "/forecast/?spot_id=" + sunsetblvdID + "&fields=localTimestamp,condition.temperature,swell.components.combined.height";

// Button Click Handlers
$( window ).load(function() {
	$.get(elporto_query, function(data){
	   			var most_recent = data[data.length - 1];   	
	   			updateInfo(most_recent);
	   		});	

		 $("#elporto").click(function() {
		 	$(".nav").find(".active").removeClass("active");
	   		$(this).parent().addClass("active");

	   		$.get(elporto_query, function(data){
	   			var most_recent = data[data.length - 1];   	
	   			updateInfo(most_recent);
	   		});	
		});

		$("#venicebeach").click(function() {
			$(".nav").find(".active").removeClass("active");
	   		$(this).parent().addClass("active");

	   		$.get(venice_query, function(data){
	   			var most_recent = data[data.length - 1];   	
	   			updateInfo(most_recent);
	   		});	
		});

	// Edits the Info
	var updateInfo = function(data){
		water_temp = data.condition.temperature;
	   	wave_height = data.swell.components.combined.height;
	   	wetsuit_thickenss = "";
	   	$("#p_temp").replaceWith("<p id='p_temp'>" + water_temp + "</p>");
	   	$("#p_height").replaceWith("<p id='p_height'>" + wave_height + "</p>");

	   	switch(true){
			case (water_temp > 72):
				wetsuit_thickenss = "Rashguard";
				break;
	   		case (65 < water_temp < 75):
	   			wetsuit_thickenss = "1 mm - 2/1 mm";
	   			break;
			case (62 < water_temp < 68):
	   			wetsuit_thickenss = "2 mm - 3/2 mm";
	   			break;
			case (58 < water_temp < 63):
	   			wetsuit_thickenss = "3/2 mm - 4/3 mm";
	   			break;
			case (52 < water_temp < 59):
	   			wetsuit_thickenss = "4/3 mm - 5/4/3 mm";
	   			break;
	   		case (43 < water_temp < 53):
	   			wetsuit_thickenss = "5/4 mm - 5/4/3 mm";
	   			break;
	   		case (water_temp < 44):
	   			wetsuit_thickenss = "6/5 mm - 6/5/4 mm";
	   			break;
	   		default:
	   	}
		$("#p_suit").replaceWith("<p id='p_suit'>" + wetsuit_thickenss + "</p>");
	};

});
