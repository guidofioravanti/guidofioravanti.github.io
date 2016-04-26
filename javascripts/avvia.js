$(document).ready(function(){

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
    		zoom: 5
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

		      if(previousMarkers!==null) {console.log("eccomi"); mappa.removeLayer(previousMarkers); mappa.removeLayer(previousClusters);}	
		      myCluster.addLayer(geojsonLayer);
		      mappa.addLayer(myCluster);
		      //mappa.fitBounds(myCluster.getBounds());
		      previousMarkers=geojsonLayer;
		      previousClusters=myCluster;	
	       } //chiude success

	      })// ajax

  }//fine caricaDati
  
  var previousMarkers=null;
  var previousClusters=null;

  $("#dataform").change(function(){

  var year=$("#trentennio option:selected").val();
  
  var parametro=$("#nome_parametro");
  
  parametro.each(function(){
    	
    	if($(this).is(":checked")){
    		$(this).prop("checked",false);
    	}else{
    		$(this).prop("checked",true);
    	}
    	
    });
    
    //if(year!=="") caricaDati(year);
    console.log(year+$("input[type='radio']:checked").val() );	

  });
  


}) //main ready function
