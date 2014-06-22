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
	 //  handler = Gmaps.build('Google');
    
		// handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
	 //  	markers = handler.addMarkers([
	 //    {
	 //      "lat": lat,
	 //      "lng": long,
	 //      "picture": {
	 //        "url": "https://addons.cdn.mozilla.net/img/uploads/addon_icons/13/13028-64.png",
	 //        "width":  36,
	 //        "height": 36
	 //      },
	 //      "infowindow": "hello!"
	 //    }
	 //  	]);
	 //  	handler.bounds.extendWith(markers);
	 //  	handler.fitMapToBounds();
		// });

  var place = new google.maps.LatLng(lat,long);


  map = new google.maps.Map(document.getElementById('map'), {
      center: place,
      zoom: 15
    });

  var request = {
    location: place,
    radius: '5000',
    types: ['bar']
  };

  service = new google.maps.places.PlacesService(map);
   service.nearbySearch(request, callback);

}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      place = results[i];
      //console.log(place)
      createMarker(results[i]);
    }
  }
}

function createMarker(result) {
	var lat = result.geometry.location.k
	var long = result.geometry.location.A
	var position=new google.maps.LatLng(lat,long)
	//var contentString = html;
	var marker = new google.maps.Marker({
	    position: position,
	    map: map,
	    zIndex: Math.round(position.lat()*-100000)<<5
	    });
	//console.log(marker)
	console.log("#######################")
	name=result.name
	addy=result.vicinity
	console.log(addy)
	//console.log(map)

  var infowindow = new google.maps.InfoWindow({
      content: name + " " + addy
  });

	google.maps.event.addListener(marker, 'mouseover', function() {
	    //infowindow.setContent(content); 
	    infowindow.open(map,marker);
	});

	google.maps.event.addListener(marker, 'mouseout', function() {
	    //infowindow.setContent(content); 
	    infowindow.close();
	});
	//gmarkers.push(marker);
	marker.setMap(map);
}