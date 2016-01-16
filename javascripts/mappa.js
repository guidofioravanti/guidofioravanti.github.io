window.onload=function(){

	var map1951 = L.map('map1951').setView([41, 13.5], 6);
	L.tileLayer.provider('OpenTopoMap').addTo(map1951);


	var topoLayer = new L.TopoJSON();

	$.getJSON('https://raw.githubusercontent.com/guidofioravanti/guidofioravanti.github.io/master/json/annuali1951.geojson').addTo(map1951);



}
