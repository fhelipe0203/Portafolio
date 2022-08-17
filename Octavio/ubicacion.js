function iniciarMap(){
    var coord = {lat:48.86515781876008 ,lng: 2.29141440082221};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
 }
 