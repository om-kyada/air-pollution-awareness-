
let listing = document.getElementById("listing-pollution")


const getData = () => {
    fetch("./assets/script/air-pollution.json")
        .then((response) => response.json())
        .then((result) => {
            Object.values(result).forEach((element, index) => {
                const lIndex = `location-${index + 1}`
                console.log(lIndex)
                listing.innerHTML += `
                <tbody>
                    <tr>
                        <td class="flex">${element.location} <button  id=${lIndex} onclick="store(${element.latitude},${element.longitude})"
                        ><i class="fa-solid fa-location-dot"></i></button></td>
                        <td>${element.pm25}</td>
                        <td>${element.co}</td>
                        <td>${element.temperature}</td>
                        </tr>
                </tbody>
                `
                console.log(element.location)
            })
        })
}

function store(latitude, longitude) {
    console.log('latitude', latitude);
    console.log('longitude', longitude);

    var lat = latitude;
    var lng = longitude;

    // map.setCenter([lat, lng], zoomLevel);
    // var mapUrl = "https://www.google.com/maps?q=" + latitude + "," + longitude;
    // window.open(mapUrl);
}
function mMap() {
    let mapProp = {
        lat: 23.0166,
        lng: 72.4667
    };
    let marker = new google.maps.Marker({
        position: {
            lat: 23.0166,
            lng: 72.4667
        },
        // map: map,
        title: "Hello world!",

    })

    const map = new google.maps.Map(
        document.getElementById("googleMap"), {
        // center: { lat: lat, lng: lng },
        // Set the zoom of the map
        zoom: 12.56,
        // setCenter: setCenter,
        center: mapProp,
        locationMarker: marker,
    });
}


getData();