jQuery(document).ready(main)


function main() {
  var map = L.map('map', {}).setView([25.669007021633693,-100.30211992425613], 5);

  L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 16,
    atribution: 'Map data &copy; OSM.org'
  }).addTo(map);

  $.getJSON('data.geo.json', function (geojson) {
    L.geoJson(geojson, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
      }
    }).addTo(map);
    
  });
  
  
  /*var audioIcon = L.icon({
    iconUrl: 'audio.png',

    iconSize: [32, 37],
    shadowSize: [0, 0],
    iconAnchor: [16, 37],
    shadowAnchor: [0, 0],
    popupAnchor: [0, -37]
  });


  function onEachAudio(feature, layer) {
    layer.bindPopup(feature.properties.name + "<br>" + feature.properties.PATH_2);
  };

  new L.GeoJSON.AJAX("data.geo.json", {
    onEachFeature: onEachAudio,
    pointToLayer: function(feature, latlng) {
      return L.marker(latlng, {icon: audioIcon});
    }
  }).addTo(map);
  */
  
}
