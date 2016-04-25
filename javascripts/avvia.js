window.onload=function(){
	
// confini per l'Italia
var bound1= L.latLng(36, 5);
var bound2= L.latLng(48,20);
var italyBounds=L.latLngBounds(bound1, bound2);

//opzioni mappa
var opzioniExt={
	maxBounds: italyBounds
	
	};


// link del layer per la mappa
var myID='guidofioravanti.p4nk36fp';
var myToken='pk.eyJ1IjoiZ3VpZG9maW9yYXZhbnRpIiwiYSI6ImNpa2psemdiNzAwNHV3am00bWR1a2dibzIifQ.xEkhO1WoLax-PJ_MYyYZIg';

//
var myAttribution= 'PROVA - Elaborazione dati ISPRA';

function mappaStazioni(){

	var mappa = L.map('mappa').setView([41, 13.5], 6);
	
	L.tileLayer.provider('MapBox',{
		id: myID,
		accessToken: myToken		
	}).addTo(mappa);

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
		mappa.addLayer(myCluster);
	        mappa.fitBounds(myCluster.getBounds());	        

	    }
	});

}



};
