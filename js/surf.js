// Basic Information
APIKEY = '93bc401b3b817c4054c313bc0d601c12';

// IDs
veniceID = "2611";
elportoID = "2677";
sunsetblvdID= "3673";

// Queries
var venice_query = "http://magicseaweed.com/api/" + APIKEY + "/forecast/?spot_id=" + veniceID + "&fields=localTimestamp,condition.temperature,swell.components.combined.height";
var elporto_query = "http://magicseaweed.com/api/" + APIKEY + "/forecast/?spot_id=" + elportoID + "&fields=localTimestamp,condition.temperature,swell.components.combined.height";
var sunsetblvd_query = "http://magicseaweed.com/api/" + APIKEY + "/forecast/?spot_id=" + sunsetblvdID + "&fields=localTimestamp,condition.temperature,swell.components.combined.height";


// Button Click Handlers
$( window ).load(function() {
	 $("#elporto").click(function() {
	 	$(".nav").find(".active").removeClass("active");
   		$(this).parent().addClass("active");

   		$.get(elporto_query, function(data){
   			most_recent = data[data.length - 1];
   			console.log(most_recent);
   			wave_temp = most_recent.condition.temperature;
   			wave_height = most_recent.swell.components.combined.height;

   			$("#temperature").append("<p>" + wave_temp + "</p>");
   			$("#wave_height").append("<p>" + wave_height + "</p>");
   		});
   		
	});

	$("#venicebeach").click(function() {
		$(".nav").find(".active").removeClass("active");
   		$(this).parent().addClass("active");
	});

	$("#sunsetblvd").click(function() {
		$(".nav").find(".active").removeClass("active");
   		$(this).parent().addClass("active");
	});
});
