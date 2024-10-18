import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Accomodation() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/accommodations')
      .then(response => setAccommodations(response.data))
      .catch(error => console.error('Error fetching accommodations:', error));
  }, []);

  return (
    <div>
      <h2>Alojamientos Disponibles</h2>
      <ul>
        {accommodations.map((acc) => (
          <li key={acc.id}>
            {acc.name} - {acc.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accomodation;
