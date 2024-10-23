import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/App.css'; 

function Accommodation() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/accommodations')
      .then(response => setAccommodations(response.data))
      .catch(error => console.error('Error fetching accommodations:', error));
  }, []);

  return (
    <div>
      <h2 className="h1">Alojamientos Disponibles</h2>
      <div className="accommodations-list">
        {accommodations.map((acc) => (
          <AccommodationCard key={acc.id} accommodation={acc} />
        ))}
      </div>
    </div>
  );
}

function AccommodationCard({ accommodation }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://images.pxsol.com/1472/P2803/photos/f8580adda41131b2e1b271e4fee9548527228149.jpg?auto=format&browser=Chrome&h=400&ixlib=php-3.3.0&w=600&s=86d35a51d178ad4052a0338cc8eab67f", 
    "https://images.pxsol.com/1472/P2803/photos/3f896d62e992f88858f17ca6f607175745fccd94.jpg?auto=format&browser=Chrome&h=400&ixlib=php-3.3.0&w=600&s=de164b60ab09dab983c3febbad86c976"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="accommodation">
      <div className="image-container">
        <button onClick={prevImage} className="arrow-button">&#9664;</button> {/* Flecha izquierda */}
        <img 
          src={images[currentImageIndex]} // Muestra la imagen actual
          alt={accommodation.name} 
          className="accommodation-image"
        />
        <button onClick={nextImage} className="arrow-button">&#9654;</button> {/* Flecha derecha */}
      </div>
      <div className="accommodation-details"> {/* Agrupando los detalles en un contenedor */}
        <h3>{accommodation.name}</h3>
        <p>Descripción: {accommodation.description}</p>
        <p>Precio: {accommodation.price} USD / noche</p>
      </div>
    </div>
  );
}

export default Accommodation;
