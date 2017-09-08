var map = new GMaps({
  el: '#map',
  lat: -6.217245,
  lng: 106.761033
});

map.addMarker({
  lat: -6.217245,
  lng: 106.761033,
  title: 'KIN+ Sports Tape',
  infoWindow: {
    content: '<p>KIN+ Sports Tape</p>'
  }
});
