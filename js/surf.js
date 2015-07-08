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

   		var elporto_json = $.get(elporto_query, function(data){
   			$("#temperature").append("<p>" + elporto_json.responseText + "</p>");
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
