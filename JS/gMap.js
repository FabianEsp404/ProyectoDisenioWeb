let gMapa;
let Position;
let gLatLonUser;
let marker;
function initMap() {
    gMapa = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 10.014959, lng: -84.214375 },
        zoom: 15
    });
    Position = { lat: 10.014959, lng: -84.214375 };

    var config = {
        map: gMapa,
        animation: google.maps.Animation.DROP,
        position: Position,
        title: "Deporte Sano"
    }

    marker = new google.maps.Marker(config);
    // marker.setIcon("../Images/icon-2.png")
    // var marker = new google.maps.Marker({
    //     position: Position,
    //     map: map,
    //     title: 'Deporte Sano'
    // }
    // );


}

function fn_error() { }

function fn_ok(respuesta) {
    var lat = respuesta.coords.latitude;
    var lon = respuesta.coords.longitude;

    gLatLonUser = new google.maps.LatLng(lat, lon);
    marker.setMap(null);
    
   
    trazarRuta();
    
    

}
function comoLLegar() {
    navigator.geolocation.getCurrentPosition(fn_ok, fn_error);
}
function trazarRuta() {
    var configDR = {
        map: gMapa,
    }

    var configDS = {
        origin: gLatLonUser,
        destination: Position,
        travelMode: google.maps.TravelMode.DRIVING
    }

    var directionService = new google.maps.DirectionsService();
    var directionRenderer = new google.maps.DirectionsRenderer(configDR);
    directionService.route(configDS, fnRutear)

     function fnRutear(resultados,status){
         if(status == "OK"){
             directionRenderer.setDirections(resultados) ;
         }
         else{
             alert("Error" +status);
         }
     }
}


document.getElementById("ComoLlegar").addEventListener("click", comoLLegar); 
