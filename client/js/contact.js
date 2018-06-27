$(document).ready(function() {
  var map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -6.217245, lng: 106.761033},
    zoom: 20
  });

  var marker;
  marker = new google.maps.Marker({
    position: new google.maps.LatLng( -6.217245,106.761033),
    map: map,
    title: 'KIN+ Sports Tape'
  });

  var contentString = '<p>KIN+ Sports Tape</p>';
  var infowindow;
  infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
});
