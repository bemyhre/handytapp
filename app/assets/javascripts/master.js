// window.onload = function() {
// 	var originLocation = new Location()
//   var map = new Map()
//   var spots = new Spots()
//   var appController = new Controller(map, spots, originLocation)
//   appController.bindListeners()
// }

// function Controller(map,spots) {
//   this.map = map;
//   this.spots = spots;
// }

// Controller.prototype = {
//   bindListeners:  function() {
//   	console.log("poop")
//   }
// }
 
// Event.observe(window, 'load', function() {
//   if (GBrowserIsCompatible()) {
//     map = new GMap2(document.getElementById("map"));
//     // Center the map on the US
//     map.setCenter(new GLatLng(37.731145,-97.326092),4);
//     GEvent.addListener(map,"moveend",function(){updateMap();});
//     map.addControl(new GLargeMapControl());
//     map.addControl(new GMapTypeControl());
 
//     updateMap();
//   }
// });
 
// function updateMap() {
//   var bounds = map.getBounds();
//   var southWest = bounds.getSouthWest();
//   var northEast = bounds.getNorthEast();
 
//   // Send an AJAX request for our bars
//   new Ajax.Request('/bars.js', {
//     method:'get',
//     parameters: {sw: southWest.toUrlValue(), ne: northEast.toUrlValue()},
//     onSuccess: function(transport){
//       // Remove markers outside of our maps boundaries.
//       if(markers.length > 0){
//         removeMarkersOutsideOfMapBounds();
//       }
 
//       // Add our new markers to the map (unless they are already on the map.)
//       var json = transport.responseText.evalJSON();
//       json.each(function(i) {
//         id = i.bar.id;
//         if(!markers[id] || markers[id] == null){
//           // Marker doesnt exist, add it.
//           markers[id] = createMarker(i.bar);
//           map.addOverlay(markers[id]);
//         }
//       });      
//     }
//   });
// }
 
// function createMarkerClickHandler(marker, bar) {
//   return function() {
//     marker.openInfoWindowHtml(
//       '<div><strong>' + bar.name + '</strong><br/> ' +
//       bar.address + '<br/>' + bar.city + ', ' +
//       bar.state + ' ' + bar.zip + '</div>'
//     );
//     return false;
//   };
// }
 
// function createMarker(bar) {
//   var latlng = new GLatLng(bar.lat, bar.lng);
//   var marker = new GMarker(latlng);
//   var handler = createMarkerClickHandler(marker, bar);
//   GEvent.addListener(marker, "click", handler);
//   return marker;
// }
 
// function removeMarkersOutsideOfMapBounds() {
//   for(i in markers) {
//     if(i > 0 && markers[i] && !map.getBounds().containsLatLng(markers[i].getLatLng())) {
//       map.removeOverlay(markers[i]);
//       markers[i] = null;
//     }
//   }
// }