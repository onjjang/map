// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863],
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1Ijoib25qamFuZyIsImEiOiJjbGxiOXR0N3owNHZjM3BwaGZseXAycWpyIn0.ywqDH7R0aCDpjSkwhitHEA';
  const geojson = {
    'type': 'FeatureCollection',
    'features': [
    {
    'type': 'Feature',
    'properties': {
    'message': 'Foo',
    'iconSize': [60, 60]
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-66.324462, -16.024695]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'message': 'Bar',
    'iconSize': [50, 50]
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-61.21582, -15.971891]
    }
    },
    {
    'type': 'Feature',
    'properties': {
    'message': 'Baz',
    'iconSize': [40, 40]
    },
    'geometry': {
    'type': 'Point',
    'coordinates': [-63.292236, -18.281518]
    }
    }
    ]
    };
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
  });
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  //let marker = new mapboxgl.Marker().setLngLat([-71.092761, 42.357575]).addTo(map);
  //for (const marker of geojson.features) {
    // Create a DOM element for each marker.
    const el = document.createElement('div');
    const width = 60;
    const height = 60;
    el.className = 'marker';
    el.style.backgroundImage = `url(https://placekitten.com/g/${width}/${height}/)`;
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = '100%';
     
    //el.addEventListener('click', () => {
    //window.alert(marker.properties.message);
    //});
     
    // Add markers to the map.
    let marker = new mapboxgl.Marker(el)
    .setLngLat([-71.092761, 42.357575])
    .addTo(map);
   // }
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.\
  
    setTimeout(()=> {
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
      }, 1000);
  }
  if (typeof module !== 'undefined'){
    module.experts={ move, counter, marker, busStops};
  }