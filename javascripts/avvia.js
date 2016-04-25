window.onload=function(){

  // confini per l'Italia
  var bound1= L.latLng(36, 5), bound2= L.latLng(48,20), italyBounds=L.latLngBounds(bound1, bound2);

  //opzioni mappa
  var opzioniExt={maxBounds: italyBounds};


  // link del layer per la mappa
  var myID='guidofioravanti.p4nk36fp';
  var myToken='pk.eyJ1IjoiZ3VpZG9maW9yYXZhbnRpIiwiYSI6ImNpa2psemdiNzAwNHV3am00bWR1a2dibzIifQ.xEkhO1WoLax-PJ_MYyYZIg';

  //
  var myAttribution= 'Elaborazione dati ISPRA';

  var mappa = L.map('mappa',{
    		center: [41, 13.5],
    		zoom: 6
  	});

  L.tileLayer.provider('MapBox',{
		id: myID,
		accessToken: myToken
	}).addTo(mappa);


  var caricaDati=function(year){

     	$.ajax({
	      type: "GET",
	      url: "/json/annuali"+year+".geojson",
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
	        }); // chiude geojsonLayer

		      if(previousMarkers!==null) mappa.removeLayer(previousMarkers);	
		      myCluster.addLayer(geojsonLayer);
		      mappa.addLayer(myCluster);
		      mappa.fitBounds(myCluster.getBounds());
		      previousMarkers=geojsonLayer;
		
	       } //chiude success

	      })// ajax

  }//fine caricaDati

  var elemTrentennio=document.getElementById("trentennio");
  
  var previousMarkers=null;
  elemTrentennio.addEventListener("change",function(){

    year=this.value;
    if(year!=="") caricaDati(year);

  });


} // window.onload
