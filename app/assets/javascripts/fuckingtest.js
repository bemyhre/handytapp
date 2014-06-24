function getGeoLocation() {
  navigator.geolocation.getCurrentPosition(setGeoCookie);
}

function setGeoCookie(position) {
  var cookie_val = position.coords.latitude + "|" + position.coords.longitude;
  document.cookie = "lat_lng=" + escape(cookie_val);
  console.log(cookie_val)
}

function clearGeoCookie(){
	document.cookie="lat_lng="
}

function renderCurrentLocation(lat,long){

  var place = new google.maps.LatLng(lat,long);

  map = new google.maps.Map(document.getElementById('map'), {
      center: place,
      zoom: 15,
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
      	position: google.maps.ControlPosition.TOP_RIGHT
      }
    });
  markers = new Array();

  var request = {
    location: place,
    radius: '7000',
    types: ['bar'],
  };
  
	google.maps.event.addListener(map, 'bounds_changed', function() {

		var bounds = map.getBounds();
	  var southWest = bounds.getSouthWest();
	  var northEast = bounds.getNorthEast();
	  // Send an AJAX request for our locations

	  var ajaxRequest = $.ajax({
	    url: $( this ).attr('href'),
	    data: {
	    	sw: southWest.toUrlValue(), 
	    	ne: northEast.toUrlValue()
	    },
	    type: 'GET',
	    success: function(){
	      if(markers.length > 0){
	        removeMarkersOutsideOfMapBounds();
	     	}
	     	console.log(markers.length)
	     	
	     	 // Add our new markers to the map (unless they are already on the map.)
	      var json = transport.responseText.evalJSON();
	      json.each(function(i) {
	        id = i.bar.id;
	        if(!markers[id] || markers[id] == null){
	          // Marker doesnt exist, add it.
	          markers[id] = createMarker(i.bar);
	          map.addOverlay(markers[id]);
	        }
	      });
	    }
	  })

  	// new Ajax.Request('/bars.js', {
   //  	method:'get',
   //  	parameters: {sw: southWest.toUrlValue(), ne: northEast.toUrlValue()},
   //  	onSuccess: function(transport){
   //  		console.log("poop")
      // Remove markers outside of our maps boundaries.
	      // if(markers.length > 0){
	      //   removeMarkersOutsideOfMapBounds();
	     	// }
	     	
	     	//  // Add our new markers to the map (unless they are already on the map.)
	      // var json = transport.responseText.evalJSON();
	      // json.each(function(i) {
	      //   id = i.bar.id;
	      //   if(!markers[id] || markers[id] == null){
	      //     // Marker doesnt exist, add it.
	      //     markers[id] = createMarker(i.bar);
	      //     map.addOverlay(markers[id]);
	      //   }
	      // });
	  //   } 
	  // });


	});


  service = new google.maps.places.PlacesService(map);
   service.nearbySearch(request, callback);
}

function createMarkerClickHandler(marker, location) {
  return function() {
    marker.openInfoWindowHtml(
      '<div><strong>' + location.name + '</strong><br/> ' +
      location.address + '<br/>' + location.city + ', ' +
      location.state + ' ' + location.zip + '</div>'
    );
    return false;
  };
}
 
function createMarker(location) {
  var latlng = new GLatLng(location.lat, location.lng);
  var marker = new GMarker(latlng);
  var handler = createMarkerClickHandler(marker, location);
  GEvent.addListener(marker, "click", handler);
  return marker;
}
 
function removeMarkersOutsideOfMapBounds() {
  for(i in markers) {
    if(i > 0 && markers[i] && !map.getBounds().containsLatLng(markers[i].getLatLng())) {
      map.removeOverlay(markers[i]);
      markers[i] = null;
    }
  }
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      place = results[i];
      createMarker(results[i]);
    }
  }
}

function createMarker(result) {
	var lat = result.geometry.location.k
	var long = result.geometry.location.A
	var position=new google.maps.LatLng(lat,long)
	var marker = new google.maps.Marker({
	    position: position,
	    map: map,
	    zIndex: Math.round(position.lat()*-100000)<<5
	    });
	name=result.name
	addy=result.vicinity
  var infowindow = new google.maps.InfoWindow({
      content: name + " " + addy
  });

	google.maps.event.addListener(marker, 'mouseover', function() {
	    infowindow.open(map,marker);
	});

	google.maps.event.addListener(marker, 'mouseout', function() {
	    infowindow.close();
	});
	marker.setMap(map);
}