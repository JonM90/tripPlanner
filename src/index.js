const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoibW5ta3QiLCJhIjoiY2o4YnFvejE0MDB1aDJxcDcxaW1hbXppNiJ9.sWe9VtYqQYYIpZwvaZHxAg';

// const myMap = document.getElementById('map')
const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker('activity', [-74.009151, 40.705086]);
marker.addTo(map);


// let activityMarker = markers.markerDomEl;
// let hotelMarker = markers.hotelDomEl
// let eatMarker = markers.eatDomEl

// new mapboxgl.Marker(activityMarker).setLngLat([-74.009, 4.705]).addTo(map);
// new mapboxgl.Marker(hotelMarker).setLngLat([-74.009, 40.705]).addTo(map);
// new mapboxgl.Marker(eatMarker).setLngLat([-14.009, 70.705]).addTo(map);
