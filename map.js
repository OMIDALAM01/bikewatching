mapboxgl.accessToken = 'pk.eyJ1Ijoib21pZGFsYW0wMSIsImEiOiJjbTdmYnkwYjYwbzAzMmxvb3c5enp1YXlhIn0.NbClYD0yoCdoflg9rGzJKg';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-71.09415, 42.36027],
    zoom: 12,
    minZoom: 5,
    maxZoom: 18
});
