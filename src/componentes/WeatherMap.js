import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issue with Leaflet and React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const WeatherMap = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = '51ebdf1e6d79228410cfdf3f490ab587'; // Reemplaza con tu API Key de OpenWeatherMap
  const city = 'Tucuman'; // Puedes cambiar esto por cualquier ciudad que desees
  const lat = -26.8241400; // Latitud de Buenos Aires
  const lon = -65.2226000; // Longitud de Buenos Aires

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        setWeatherData([response.data]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [lat, lon, apiKey]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching weather data: {error.message}</p>;

  return (
    <MapContainer center={[lat, lon]} zoom={10} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {weatherData.map((data, index) => (
        <Marker key={index} position={[data.coord.lat, data.coord.lon]}>
          <Popup>
            <div>
              <h3>{data.name}</h3>
              <p>Temperatura: {data.main.temp}°C</p>
              <p>Condiciones: {data.weather[0].description}</p>
              <p>Humedad: {data.main.humidity}%</p>
              <p>Viento: {data.wind.speed} m/s</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default WeatherMap;
