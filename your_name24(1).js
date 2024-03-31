// Initialize Leaflet map
var map = L.map('nymap').setView([40.58907023209157, -74.15953921013458], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var marker = L.marker([40.59130819345424, -74.16405734761926]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Heartland Bagels</b><br>This is a Leaflet map.").openPopup();
