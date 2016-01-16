window.onload=function(){

	var map1951 = L.map('map1951').setView([41, 13.5], 6);
	L.tileLayer.provider('OpenTopoMap').addTo(map1951);


	var topoLayer = new L.TopoJSON();

	$.getJSON('json/annuali1951.topo.json').done(addTopoData);

	function addTopoData(topoData){  
	  topoLayer.addData(topoData);
	  topoLayer.addTo(map1951);
	}


}
