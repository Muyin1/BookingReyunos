// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Accommodation from './components/Accommodation';

function App() {
    const [accommodations, setAccommodations] = useState([]);

    useEffect(() => {
        // Hacer la petición al backend para obtener las accommodations
        axios.get('http://localhost:8080/api/accommodations')
            .then(response => {
                setAccommodations(response.data);
            })
            .catch(error => {
                console.error('Error fetching accommodations:', error);
            });
    }, []);

    return (
        <div className="App">
            <h1 className='h1'>Lista de Alojamiento</h1>
            <div className="accommodations-list">
                {accommodations.map(accommodation => (
                    <Accommodation key={accommodation.id} accommodation={accommodation} />
                ))}
            </div>
        </div>
    );
}

export default App;
