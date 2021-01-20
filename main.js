

var map = L.map("map").setView([27.2,83.95], 10);

var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:"&copy; <a href='https://openstreetmap.org/copyright'>openstreetmap</a>contributers",
});
osm.addTo(map);



var marker = L.marker([27.2,83], {
    draggable: true,
    title: "This is a hover",
    
})
.addTo(map)
.bindPopup("<h3>Marker</h3><p>India</p>")
.openPopup();

var marker = L.marker([27.2,85], {
    draggable: true,
    title: "This is a hover",
    
})
.addTo(map)
.bindPopup("<h3>Nepal</h3><p>A country of Mount Everest</p>")
.openPopup();

var darklayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

darklayer.addTo(map);

var watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
    ext: 'jpg'});

watercolor.addTo(map);

var baseLayers = {
    osm: osm,
    "dark map": darklayer,
    "water color map": watercolor,
};


//L.control.layers(baseLayers).addTo(map);
var geojson = L.geoJson(nepalData, {
    onEachFeature: function(feature, layer){
        var district = feature.properties.DISTRICT;
        layer.bindPopup('District: ${district}')
    },
    style: {
        color: "red",
        fillcolor: "yellow",
        fillOpacity: 0.2,
    } 
}).addTo(map);

map.fitBounds(geojson.getBounds())


var marker1=L.marker([27.9,83.97]);
var marker2=L.marker([27.5,83.92]);
var marker3=L.marker([27.6,83.90]);
var marker4=L.marker([27.2,83]);

var markers = L.layerGroup([marker1, marker2, marker3, marker4]);

var overlayers = {
    markers: markers,
    "geojson Layer": geojson,
};
L.control.layers(baseLayers, overlayers).addTo(map);

//Geojson

