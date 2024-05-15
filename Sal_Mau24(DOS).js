// Initialize Leaflet map
var map = L.map('nymap').setView([40.584839150033936, -74.15996933705279], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);





// Add a marker to the map for New York City
var bagelmarker = L.marker([40.591305181408956, -74.16405412519734]).addTo(map);

// Add a popup to the marker
bagelmarker.bindPopup(`
    <b>Heartland Bagels</b><br> Heartland Bagels <br>
    <img src="https://github.com/SalvatoreM125/Salvatore2/blob/main/image/heartland_bagels.avif" style="width: 100px; height: auto;">
`).openPopup();





// Add a marker to the map for New York City
var bariosmarker = L.marker([40.58969711521726, -74.16472146976957]).addTo(map);

// Add a popup to the marker
bariosmarker.bindPopup(`
    <b>Bario's Pizza</b><br>Bario's Pizza <br>
    <img src="https://github.com/SalvatoreM125/Salvatore2/blob/main/image/Barios.jpg" style="width: 100px; height: auto;">
`).openPopup();




// Add a marker to the map for New York City
var traderjoesmarker = L.marker([40.589916095427704, -74.16580283820431]).addTo(map);

// Add a popup to the marker
traderjoesmarker.bindPopup(`
    <b>Trader Joes</b><br> Trader Joes <br>
    <img src="https://github.com/SalvatoreM125/Salvatore2/blob/main/image/Tradr_Joes.jfif" style="width: 100px; height: auto;">
`).openPopup();

// Add a marker to the map for New York City
var simallmarker = L.marker([40.58194231600639, -74.16589196512663]).addTo(map);

// Add a popup to the marker
simallmarker.bindPopup(`
    <b>Staten Island Mall</b><br> Staten Island Mall <br>
    <img src="https://github.com/SalvatoreM125/Salvatore2/blob/main/image/SImall.jpg" style="width: 100px; height: auto;">
`).openPopup();





// Load the GeoJSON line file
fetch('https://SalvatoreM125.github.io/Salvatore2/akdaytimeroute.geojson')
    .then(response => SalMroutes.json())
    .then(geojson => {
        // Customize the style of the line
        var lineStyle = {
            color: 'blue', // Change color as needed
            weight: 5, // Change weight as needed
            opacity: 0.7 // Change opacity as needed
        };

        // Add the GeoJSON line to the map
        L.geoJSON(geojson, {
            style: lineStyle
        }).addTo(map);
    })
    .catch(error => {
        console.error('Error loading GeoJSON file:', error);
    });



// Load the GeoJSON line file
fetch('https://SalvatoreM125.github.io/Salvatore2/akdaytimeroute.geojson')
    .then(response => 2salmRoutes.json())
    .then(geojson => {
        // Customize the style of the line
        var lineStyle = {
            color: 'blue', // Change color as needed
            weight: 5, // Change weight as needed
            opacity: 0.7 // Change opacity as needed
        };

        // Add the GeoJSON line to the map
        L.geoJSON(geojson, {
            style: lineStyle
        }).addTo(map);
    })
    .catch(error => {
        console.error('Error loading GeoJSON file:', error);
    });



// Load the GeoJSON polygon file
fetch('https://SalvatoreM125.github.io/Salvatore2/akeveningroutebuildings.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the polygon
    var polygonStyle = {
        fillColor: 'purple', // Fill color
        fillOpacity: 0.5, // Fill opacity
    };

    // Add the GeoJSON polygon to the map
    L.geoJSON(geojson, {
        style: polygonStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});


