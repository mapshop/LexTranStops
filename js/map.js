var baseLayer = new L.StamenTileLayer("toner-lite");

var starIcon = L.icon({
        iconUrl: '../img/star.png',
        iconSize: [18, 18],
        iconAnchor: [18, 18],
        popupAnchor: [-9, -17]
    });
var squareIcon = L.icon({
        iconUrl: '../img/square.png',
        iconSize: [18, 18],
        iconAnchor: [18, 18],
        popupAnchor: [-9, -17]
	});
var circleIcon = L.icon({
        iconUrl: '../img/circle.png',
        iconSize: [18, 18],
        iconAnchor: [18, 18],
        popupAnchor: [-9, -17]
	});

var pointLayer = null;

$.getJSON("../data/LexTranStops.geojson",function(data){
pointLayer = L.geoJson(data,{
    onEachFeature: function (feature, layer) {
    	var props = layer.feature.properties;
        layer.bindPopup("<b>" + props.Name + "</b>" + "<br>" + "Route " + props.Route_Num + ", " + props.Route_Name);
      }, pointToLayer: function (feature, latlng) {
        if (feature.properties.Type == "Shelter"){
            var marker = L.marker(latlng,{icon: starIcon});
        } else if (feature.properties.Type == "Pole"){
            var  marker = L.marker(latlng,{icon: circleIcon});
        } else {
            var marker = L.marker(latlng,{icon: squareIcon})
        };
    return marker;
    }
});

var map = L.map('map', {maxZoom: 17}).fitBounds(pointLayer.getBounds());
baseLayer.addTo(map);
pointLayer.addTo(map);

});

// var data;

// $.ajax({
// 	dataType: "json",
// 	url: queryId+".geojson",
// 	success: function(ajaxData) {
// 		console.log(ajaxData);
// 		 data = ajaxData;
	    
		
//   		$('#collapse1').on('hidden.bs.collapse', function () {
// 		  $('.panel-title a .glyphicon').removeClass('glyphicon-chevron-up');
// 		  $('.panel-title a .glyphicon').addClass('glyphicon-chevron-down');
// 		})
		
// 		$('#collapse1').on('shown.bs.collapse', function () {
// 		  $('.panel-title a .glyphicon').removeClass('glyphicon-chevron-down');
// 		  $('.panel-title a .glyphicon').addClass('glyphicon-chevron-up');
// 		})
		
	
// }).error(function() {});

	
	