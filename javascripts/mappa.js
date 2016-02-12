// confini per l'Italia
var bound1= L.latLng(36, 5);
var bound2= L.latLng(48,20);
var italyBounds=L.latLngBounds(bound1, bound2);

//opzioni mappa
var opzioniExt={
	maxBounds: italyBounds
	
	};


// link del layer per la mappa
//var linkLayer='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ';
var linkLayer='https://a.tiles.mapbox.com/v4/{id}/page.html?access_token={accessToken}';

//
var myAttribution= 'PROVA - Elaborazione dati ISPRA';

function mappa51(){

	var map1951 = L.map('map1951').setView([41, 13.5], 6);
	
	//L.tileLayer.provider('OpenTopoMap').addTo(map1961);
	
/*	L.tileLayer(linkLayer, 
	{
		maxZoom: 13,
		id: 'guidofioravanti.p4nk36fp',
		attribution: myAttribution,
		accessToken: 'pk.eyJ1IjoiZ3VpZG9maW9yYXZhbnRpIiwiYSI6ImNpa2psemdiNzAwNHV3am00bWR1a2dibzIifQ.xEkhO1WoLax-PJ_MYyYZIg'
	}).addTo(map1951);
*/

	L.tileLayer().addTo(map1951);

	$.ajax({
	    type: "POST",
	    url: 'https://raw.githubusercontent.com/guidofioravanti/guidofioravanti.github.io/master/json/annuali1951.geojson',
	    dataType: 'json',
	    success: function (response) {
	        var myCluster=L.markerClusterGroup();
	        var geojsonLayer = L.geoJson(response,{
	    		pointToLayer: function (feature, latlng) {
	        		return L.marker(latlng);
	    		},
	    		onEachFeature: function (feature, layer) {
				 layer.bindPopup('<b>Nome</b>: '+feature.properties.SiteName.toUpperCase() + '<br><b>Rete</b>: '+feature.properties.regione.toUpperCase()+'<br><b>Normale</b>: '+feature.properties.normale);
	        	}
	        });
	        
		myCluster.addLayer(geojsonLayer);
		map1951.addLayer(myCluster);
	        map1951.fitBounds(myCluster.getBounds());	        

	    }
	});

}
	


function mappa61(){

	var map1961 = L.map('map1961').setView([41, 13.5], 6);
	
	//L.tileLayer.provider('OpenTopoMap').addTo(map1961);
	
	L.tileLayer(linkLayer, 
	{
		maxZoom: 13,
		id: 'guidofioravanti.p4nk36fp',
		attribution: myAttribution,
		accessToken: 'pk.eyJ1IjoiZ3VpZG9maW9yYXZhbnRpIiwiYSI6ImNpa2psemdiNzAwNHV3am00bWR1a2dibzIifQ.xEkhO1WoLax-PJ_MYyYZIg'
	}).addTo(map1961);
	
	$.ajax({
	    type: "POST",
	    url: 'https://raw.githubusercontent.com/guidofioravanti/guidofioravanti.github.io/master/json/annuali1961.geojson',
	    dataType: 'json',
	    success: function (response) {
	        var myCluster=L.markerClusterGroup();
	        var geojsonLayer = L.geoJson(response,{
	    		pointToLayer: function (feature, latlng) {
	        		return L.marker(latlng);
	    		},
	    		onEachFeature: function (feature, layer) {
				 layer.bindPopup('<b>Nome</b>: '+feature.properties.SiteName.toUpperCase() + '<br><b>Rete</b>: '+feature.properties.regione.toUpperCase()+'<br><b>Normale</b>: '+feature.properties.normale);
	        	}
	        });
	        
		myCluster.addLayer(geojsonLayer);
		map1961.addLayer(myCluster);
	        map1961.fitBounds(myCluster.getBounds());	        

	    }
	});

}



function mappa71(){

	var map1971 = L.map('map1971').setView([41, 13.5], 6);
	
	//L.tileLayer.provider('OpenTopoMap').addTo(map1961);
	
	L.tileLayer(linkLayer, 
	{
		maxZoom: 13,
		id: 'guidofioravanti.p4nk36fp',
		attribution: myAttribution,
		accessToken: 'pk.eyJ1IjoiZ3VpZG9maW9yYXZhbnRpIiwiYSI6ImNpa2psemdiNzAwNHV3am00bWR1a2dibzIifQ.xEkhO1WoLax-PJ_MYyYZIg'
	}).addTo(map1971);
	
	$.ajax({
	    type: "POST",
	    url: 'https://raw.githubusercontent.com/guidofioravanti/guidofioravanti.github.io/master/json/annuali1971.geojson',
	    dataType: 'json',
	    success: function (response) {
	        var myCluster=L.markerClusterGroup();
	        var geojsonLayer = L.geoJson(response,{
	    		pointToLayer: function (feature, latlng) {
	        		return L.marker(latlng);
	    		},
	    		onEachFeature: function (feature, layer) {
				 layer.bindPopup('<b>Nome</b>: '+feature.properties.SiteName.toUpperCase() + '<br><b>Rete</b>: '+feature.properties.regione.toUpperCase()+'<br><b>Normale</b>: '+feature.properties.normale);
	        	}
	        });
	        
		myCluster.addLayer(geojsonLayer);
		map1971.addLayer(myCluster);
	        map1971.fitBounds(myCluster.getBounds());	        

	    }
	});

}



function mappa81(){

	var map1981 = L.map('map1981').setView([41, 13.5], 6);
	
	L.tileLayer(linkLayer, 
	{
		maxZoom: 13,
		id: 'guidofioravanti.p4nk36fp',
		attribution: myAttribution,
		accessToken: 'pk.eyJ1IjoiZ3VpZG9maW9yYXZhbnRpIiwiYSI6ImNpa2psemdiNzAwNHV3am00bWR1a2dibzIifQ.xEkhO1WoLax-PJ_MYyYZIg'	
	}).addTo(map1981);
	
	$.ajax({
	    type: "POST",
	    url: 'https://raw.githubusercontent.com/guidofioravanti/guidofioravanti.github.io/master/json/annuali1981.geojson',
	    dataType: 'json',
	    success: function (response) {
	    	var myCluster=L.markerClusterGroup();
	        var geojsonLayer = L.geoJson(response,{
	    		pointToLayer: function(feature, latlng) {
	    			   	return L.marker(latlng);
	    		},
	    		onEachFeature: function (feature, layer) {
				 layer.bindPopup('<b>Nome</b>: '+feature.properties.SiteName.toUpperCase() + '<br><b>Rete</b>: '+feature.properties.regione.toUpperCase()+'<br><b>Normale</b>: '+feature.properties.normale);
			}	
		});
		myCluster.addLayer(geojsonLayer);
		map1981.addLayer(myCluster);
	        map1981.fitBounds(myCluster.getBounds());
	    }
	});
	

}




