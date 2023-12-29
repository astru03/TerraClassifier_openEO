// create a variable for the map
var map = L.map('map').setView([51.975, 7.61], 12);

// add the base map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add Leaflet.draw-Plugin
// Layer on which the User can draw a shape
var drawnFeatures = new L.FeatureGroup();
map.addLayer(drawnFeatures);

// Adding a Leaflet.Draw Toolbar
var drawControl = new L.Control.Draw( {
    edit: {featureGroup: drawnFeatures, 
      remove: true},
    // Only rectangle draw function is needed
    draw: {
        polyline: false,
        rectangle: true,
        polygon: false,
        circle: false,
        circlemarker: false,
        marker: false
    }
}) 

map.addControl(drawControl);

var rectangleCoordinates = null;  // Variable definition
// Event-Handler for drawing polygons
map.on("draw:created", function(event) {
    var layer = event.layer;
    var type = event.layerType;
    if (type === 'rectangle') {
        rectangleCoordinates = layer.getBounds();
    } else {
        $('#popup_NotInAOT').modal('show');
      }
})

// Event-Handler for editing rectangle
map.on("draw:edited", function(event) {
    var layers = event.layers;
    layers.eachLayer(function (layer) {
      if (layer instanceof L.Rectangle) {
        rectangleCoordinates = layer.getBounds();
      }
    });
  })
//-------------------

