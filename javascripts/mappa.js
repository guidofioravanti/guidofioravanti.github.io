window.onload=function(){

	var map1951 = L.map('map1951').setView([41, 13.5], 6);
	//L.tileLayer.provider('OpenTopoMap').addTo(map1951);

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
