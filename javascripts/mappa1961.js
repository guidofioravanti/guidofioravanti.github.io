({

	var map1961 = L.map('map1961').setView([41, 13.5], 6);
	
	//L.tileLayer.provider('OpenTopoMap').addTo(map1961);
	
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', 
	{
		maxZoom: 13,
		id: 'mapbox1961.light'
	}).addTo(map1961);
	
	var geojsonMarkerOptions = {
	    radius: 8,
	    fillColor: "#ff7800",
	    color: "#000",
	    weight: 1,
	    opacity: 1,
	    fillOpacity: 0.8
	};

	$.ajax({
	    type: "POST",
	    url: 'https://raw.githubusercontent.com/guidofioravanti/guidofioravanti.github.io/master/json/annuali1961.geojson',
	    dataType: 'json',
	    success: function (response) {
	        geojsonLayer = L.geoJson(response,{
	    		pointToLayer: function (feature, latlng) {
	        		return L.circleMarker(latlng, geojsonMarkerOptions);
	    		}
		}).addTo(map1961);
	        map1961.fitBounds(geojsonLayer.getBounds());
	        $("#info").fadeOut(500);
	    }
	});
	

});
