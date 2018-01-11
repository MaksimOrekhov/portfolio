module.exports = () => {
  if (document.getElementById('map')) {
    const center = {lat: 53.2050, lng: 34.4177};
    const home = {lat: 53.2051, lng: 34.4215}
    const map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 17,
      draggable: false,
      styles: [
        {
            "featureType": "all",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#61dac9"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 80
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        }
    ]
    });
    
    const marker = new google.maps.Marker({
      position: home,
      map: map,
      animation: google.maps.Animation.DROP,
    });
    }
}