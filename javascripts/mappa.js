var geojsonMarkerOptions = {
	    radius: 8,
	    fillColor: "#ff7800",
	    color: "#000",
	    weight: 1,
	    opacity: 1,
	    fillOpacity: 0.8,
	    clickable: true	
	};	

function mappa51(){

	var map1951 = L.map('map1951').setView([41, 13.5], 6);
	
	//L.tileLayer.provider('OpenTopoMap').addTo(map1951);
	
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', 
	{
		maxZoom: 13,
		id: 'mapbox.light',
		attribution: 'Elaborazione dati ISPRA',	
	}).addTo(map1951);
	
	$.ajax({
	    type: "POST",
	    url: 'https://raw.githubusercontent.com/guidofioravanti/guidofioravanti.github.io/master/json/annuali1951.geojson',
	    dataType: 'json',
	    success: function (response) {
	        geojsonLayer = L.geoJson(response,{
	    		pointToLayer: function (feature, latlng) {
	        		return L.circleMarker(latlng, geojsonMarkerOptions);
	    		},
	    		onEachFeature: function (feature, layer) {
                		layer.bindPopup('<b>Nome</b>:'+feature.properties.SiteName + '<br><b>Rete</b>:'+feature.properties.regione+'<br><b>Normale</b>'+feature.properties.normale);
        		}
		}).addTo(map1951);
	        map1951.fitBounds(geojsonLayer.getBounds());
	        $("#info").fadeOut(500);
	    }
	});
	

}

function mappa61(){

	var map1961 = L.map('map1961').setView([41, 13.5], 6);
	
	//L.tileLayer.provider('OpenTopoMap').addTo(map1961);
	
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', 
	{
		maxZoom: 13,
		id: 'mapbox.light',
		attribution: 'Elaborazione dati ISPRA',	
	}).addTo(map1961);
	
	$.ajax({
	    type: "POST",
	    url: 'https://raw.githubusercontent.com/guidofioravanti/guidofioravanti.github.io/master/json/annuali1961.geojson',
	    dataType: 'json',
	    success: function (response) {
	        geojsonLayer = L.geoJson(response,{
	    		pointToLayer: function (feature, latlng) {
	        		return L.circleMarker(latlng, geojsonMarkerOptions);
	    		},
	    		onEachFeature: function (feature, layer) {
                		layer.bindPopup(feature.properties.SiteName);
        		}
		}).addTo(map1961);
	        map1961.fitBounds(geojsonLayer.getBounds());
	        $("#info").fadeOut(500);
	    }
	});
	

}

function mappa71(){

	var map1971 = L.map('map1971').setView([41, 13.5], 6);
	
	//L.tileLayer.provider('OpenTopoMap').addTo(map1981);
	
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', 
	{
		maxZoom: 13,
		id: 'mapbox.light',
		attribution: 'Elaborazione dati ISPRA',	
	}).addTo(map1971);
	
	$.ajax({
	    type: "POST",
	    url: 'https://raw.githubusercontent.com/guidofioravanti/guidofioravanti.github.io/master/json/annuali1971.geojson',
	    dataType: 'json',
	    success: function (response) {
	        geojsonLayer = L.geoJson(response,{
	    		pointToLayer: function (feature, latlng) {
	        		return L.circleMarker(latlng, geojsonMarkerOptions);
	    		},
	    		onEachFeature: function (feature, layer) {
                		layer.bindPopup(feature.properties.SiteName);
        		}
		}).addTo(map1971);
	        map1971.fitBounds(geojsonLayer.getBounds());
	        $("#info").fadeOut(500);
	    }
	});
	

}


function mappa81(){

	var map1981 = L.map('map1981').setView([41, 13.5], 6);
	
	//L.tileLayer.provider('OpenTopoMap').addTo(map1981);
	
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', 
	{
		maxZoom: 13,
		id: 'mapbox.light',
		attribution: 'Elaborazione dati ISPRA',	
	}).addTo(map1981);
	


	$.ajax({
	    type: "POST",
	    url: 'https://raw.githubusercontent.com/guidofioravanti/guidofioravanti.github.io/master/json/annuali1981.geojson',
	    dataType: 'json',
	    success: function (response) {
	        geojsonLayer = L.geoJson(response,{
	    		pointToLayer: function (feature, latlng) {
	        		return L.circleMarker(latlng, geojsonMarkerOptions);
	    		},
	    		onEachFeature: function (feature, layer) {
                		layer.bindPopup(feature.properties.SiteName);
        		}
		}).addTo(map1981);
	        map1981.fitBounds(geojsonLayer.getBounds());
	        $("#info").fadeOut(500);
	    }
	});
	

}
