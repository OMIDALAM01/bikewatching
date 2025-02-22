mapboxgl.accessToken = 'pk.eyJ1Ijoib21pZGFsYW0wMSIsImEiOiJjbTdmYnkwYjYwbzAzMmxvb3c5enp1YXlhIn0.NbClYD0yoCdoflg9rGzJKg';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-71.09415, 42.36027],
    zoom: 12,
    minZoom: 5,
    maxZoom: 18
});

map.on('load', () => {
    map.addSource('boston_route', {
        type: 'geojson',
        data: 'https://bostonopendata-boston.opendata.arcgis.com/datasets/boston::existing-bike-network-2022.geojson'
    });

    map.addSource('cambridge_route', {
        type: 'geojson',
        data: 'https://opendata.cambridgema.gov/datasets/bike-lanes.geojson'
    });
    
    map.addLayer({
        id: 'cambridge-bike-lanes',
        type: 'line',
        source: 'cambridge_route',
        paint: {
            'line-color': '#32D400',
            'line-width': 5,
            'line-opacity': 0.6
        }
    });
});

