// confini per l'Italia
var bound1= L.latLng(36, 5);
var bound2= L.latLng(48,20);
var italyBounds=L.latLngBounds(bound1, bound2);

//opzioni mappa
var opzioniExt={
	maxBounds: italyBounds
	
	};

//opzioni Markers
var geojsonMarkerOptions = {
	    radius: 8,
	    //fillColor: "#ABA123",
	    weight: 0.7,
	    color: "#CCC",
	    opacity: 1,
	    fillOpacity: 1,
	    clickable: true
	};
	
var opzioniPunti= {
		    	pointToLayer: function(feature, latlng) {
	    			   	return L.circleMarker(latlng, geojsonMarkerOptions);
	    		},
	    		style: function(feature){
	    			
			    	if(parseFloat(feature.properties.normale)<= 500){
		   				return {fillColor: "#ffffd9"};
		       	    	}else if(feature.properties.normale > 500 && feature.properties.normale<=1000) {
		    				return {fillColor: "#edf8b1"};
			    	}else if(feature.properties.normale > 1000 && feature.properties.normale<=1500){
		    				return {fillColor: "#c7e9b4"};	    		
			    	}else if(feature.properties.normale > 1500 && feature.properties.normale<=2000){
		    				return {fillColor: "#7fcdbb"};
			    	}else if(feature.properties.normale > 2000 && feature.properties.normale<=2500){
		    				return {fillColor: "#41b6c4"};
			    	}else if(feature.properties.normale > 2500 && feature.properties.normale<=3000){
		    				return {fillColor: "#1d91c0"};
			    	}else if(feature.properties.normale > 3000 && feature.properties.normale<=3500){
		    				return {fillColor: "#225ea8"};
			    	}else if(feature.properties.normale > 3500 && feature.properties.normale<=4000){
		    				return {fillColor: "#253494"};
			    	}else if(feature.properties.normale > 4000){
		    				return {fillColor: "#081d58"};
			    	}	    				
		    				
			}, //fine style

	    		onEachFeature: function (feature, layer) {
				 layer.bindPopup('<b>Nome</b>: '+feature.properties.SiteName.toUpperCase() + '<br><b>Rete</b>: '+feature.properties.regione.toUpperCase()+'<br><b>Normale</b>: '+feature.properties.normale);
			}	
		}; //fine oggetto opzioni	
	
	
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
		map1951.addLayer(myCluster);
	        map1951.fitBounds(myCluster.getBounds());
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
	
	//L.tileLayer.provider('OpenTopoMap').addTo(map1981);
	
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', 
	{
		maxZoom: 13,
		id: 'mapbox.light',
		attribution: 'Elaborazione dati ISPRA',	
	});
	
	$.ajax({
	    type: "POST",
	    url: 'https://raw.githubusercontent.com/guidofioravanti/guidofioravanti.github.io/master/json/annuali1971.geojson',
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
		map1971.addLayer(myCluster);
	        map1971.fitBounds(myCluster.getBounds());	        
	    }
	});
	

}


function mappa81(){

	var map1981 = L.map('map1981', opzioniExt);
	
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
	        geojsonLayer = L.geoJson(response,opzioniPunti).addTo(map1981);
	        map1981.fitBounds(geojsonLayer.getBounds());

	    }
	});
	

}
