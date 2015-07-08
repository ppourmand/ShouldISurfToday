// Basic Information
APIKEY = '93bc401b3b817c4054c313bc0d601c12';

// IDs
veniceID = "2611";
elportoID = "2677";
sunsetblvdID= "3673";

// Queries
var venice_query = "http://magicseaweed.com/api/" + APIKEY + "/forecast/?spot_id=" + veniceID + "&localtimestamp,condition.temperature,swell.components.combined.height";
var elporto_query = "http://magicseaweed.com/api/" + APIKEY + "/forecast/?spot_id=" + elportoID + "&localtimestamp,condition.temperature,swell.components.combined.height";
var sunsetblvd_query = "http://magicseaweed.com/api/" + APIKEY + "/forecast/?spot_id=" + sunsetblvdID + "&localtimestamp,condition.temperature,swell.components.combined.height";


// Button Click Handlers
$( window ).load(function() {
	 $("#elporto").click(function() {
	 	$(".nav").find(".active").removeClass("active");
   		$(this).parent().addClass("active");

   		var elporto_json = createCORSRequest("GET",elporto_query);
   		console.log(elporto_json);
   		$("#temperature").append("<p>" + elporto_json + "</p>");
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


// CORS
// http://www.html5rocks.com/en/tutorials/cors/
// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // All HTML5 Rocks properties support CORS.
  var url = 'http://updates.html5rocks.com';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}