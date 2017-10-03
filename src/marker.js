const mapboxgl = require('mapbox-gl');

const iconURLs = {
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png',
  activity: 'http://i.imgur.com/WbMOfMl.png'
}

const buildMarker = (type, coords) => {
  const marker = document.createElement('div')
  marker.style.width = '32px';
  marker.style.height = '39px';
  marker.style.backgroundImage = `url(${iconURLs[type]})`;
  return new mapboxgl.Marker(marker).setLngLat(coords);
}

// const markerDomEl = document.createElement('div'); // Create a new, detached DIV
// markerDomEl.style.width = '32px';
// markerDomEl.style.height = '39px';
// markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';


// const hotelDomEl = document.createElement('div'); // Create a new, detached DIV
// hotelDomEl.style.width = '32px';
// hotelDomEl.style.height = '39px';
// hotelDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';


// const eatDomEl = document.createElement('div'); // Create a new, detached DIV
// eatDomEl.style.width = '32px';
// eatDomEl.style.height = '39px';
// eatDomEl.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';

module.exports = buildMarker
// module.exports = {markerDomEl, hotelDomEl, eatDomEl}

