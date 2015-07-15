// Basic Information
var APIKEY = '93bc401b3b817c4054c313bc0d601c12';

// IDs
var veniceID = '2611';
var elportoID = '2677';
//sunsetblvdID= "3673";

// Queries
var veniceQuery = 'http://magicseaweed.com/api/' + APIKEY + '/forecast/?spot_id=' + veniceID + '&fields=localTimestamp,condition.temperature,swell.components.combined.height';
var elportoQuery = 'http://magicseaweed.com/api/' + APIKEY + '/forecast/?spot_id=' + elportoID + '&fields=localTimestamp,condition.temperature,swell.components.combined.height';
//var sunsetblvd_query = "http://magicseaweed.com/api/" + APIKEY + "/forecast/?spot_id=" + sunsetblvdID + "&fields=localTimestamp,condition.temperature,swell.components.combined.height";

// Button Click Handlers
$( window ).load(function() {
	$.get(elportoQuery, function(data){
    var mostRecent = data[data.length - 1];
    updateInfo(mostRecent);
  });

	$('#elporto').click(function() {
    $('.nav').find('.active').removeClass('active');
    $(this).parent().addClass('active');
    $.get(elportoQuery, function(data){
      var mostRecent = data[data.length - 1];
      updateInfo(mostRecent);
    });
	});

  $('#venicebeach').click(function() {
		$('.nav').find('.active').removeClass('active');
    $(this).parent().addClass('active');
    $.get(veniceQuery, function(data){
      var mostRecent = data[data.length - 1];
      updateInfo(mostRecent);
    });
	});

	// Edits the Info
	var updateInfo = function(data){
		var waterTemp = data.condition.temperature;
    var waveHeight = data.swell.components.combined.height;
    var wetsuitThickenss = '';
    $('#p_temp').replaceWith(' <p id=\'p_temp\'>' + waterTemp + '</p>');
    $('#p_height').replaceWith('<p id=\'p_height\'>' + waveHeight + '</p>');

    switch(true){
    
    case (waterTemp > 72):
      wetsuitThickenss = 'Rashguard';
      break;
    case (65 < waterTemp < 75):
      wetsuitThickenss = '1 mm - 2/1 mm';
      break;
    case (62 < waterTemp < 68):
      wetsuitThickenss = '2 mm - 3/2 mm';
      break;
    case (58 < waterTemp < 63):
      wetsuitThickenss = '3/2 mm - 4/3 mm';
      break;
    case (52 < waterTemp < 59):
      wetsuitThickenss = '4/3 mm - 5/4/3 mm';
      break;
    case (43 < waterTemp < 53):
      wetsuitThickenss = '5/4 mm - 5/4/3 mm';
      break;
    case (waterTemp < 44):
      wetsuitThickenss = '6/5 mm - 6/5/4 mm';
      break;
    default:
    }
		$('#p_suit').replaceWith('<p id=\'p_suit\'>' + wetsuitThickenss + '</p>');
	};
});
