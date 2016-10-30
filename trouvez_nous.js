function initialize() {
    var myCenter = new google.maps.LatLng(48.8857843, 2.172326699999985);
    var mapProp = {
        center: myCenter,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("google_map"), mapProp);

    var marker=new google.maps.Marker({
        position:myCenter,
    });

    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
        content:"GK Tea"
    });

    infowindow.open(map,marker);
}


window.addEventListener("load", initialize, false);
