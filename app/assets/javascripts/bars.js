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
	  handler = Gmaps.build('Google');
    
		handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
	  	markers = handler.addMarkers([
	    {
	      "lat": lat,
	      "lng": long,
	      "picture": {
	        "url": "https://addons.cdn.mozilla.net/img/uploads/addon_icons/13/13028-64.png",
	        "width":  36,
	        "height": 36
	      },
	      "infowindow": "hello!"
	    }
	  	]);
	  	handler.bounds.extendWith(markers);
	  	handler.fitMapToBounds();
		});
}