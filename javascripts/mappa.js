window.onload=function(){

	var map1951 = L.map('map1951').setView([41, 13.5], 6);
	//L.tileLayer.provider('OpenTopoMap').addTo(map1951);
	
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
			maxZoom: 13,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'mapbox.light'
		}).addTo(map1951);
	

	$.ajax({
	    type: "POST",
	    url: 'https://raw.githubusercontent.com/guidofioravanti/guidofioravanti.github.io/master/json/annuali1951.geojson',
	    dataType: 'json',
	    success: function (response) {
	        geojsonLayer = L.geoJson(response).addTo(map1951);
	        map1951.fitBounds(geojsonLayer.getBounds());
	        $("#info").fadeOut(500);
	    }
	});

}
