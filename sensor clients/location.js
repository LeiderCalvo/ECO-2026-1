// ------------- GEOLOCALIZATION
const ZOOM = 13;

const INITIAL_COORDINATES = [3.45, -76.53]
const MAP = L.map('map');
MAP.setView(INITIAL_COORDINATES, ZOOM);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: ZOOM,
}).addTo(MAP);


document
    .getElementById("location-button")
    .addEventListener("click", updateGeolocation);

const GEOLOCATION_LABEL = document.getElementById("data");
function updateGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
            const coordinates = [position?.coords?.latitude, position?.coords?.longitude]
            GEOLOCATION_LABEL.innerText = `LAT: ${coordinates[0]}, LONG: ${coordinates[1]}`;

            MAP.flyTo(coordinates)
            const MARKER = L.marker(coordinates).addTo(MAP);
            MARKER.bindPopup("<b>Raios!</b><br>Me encontraron").openPopup();
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

