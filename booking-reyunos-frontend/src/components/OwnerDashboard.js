import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/OwnerDashboard.css';
import { useAuth } from '../context/AuthContext';

const OwnerDashboard = () => {
  const { user } = useAuth(); // Obtener el usuario desde el AuthContext
  const [accommodations, setAccommodations] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [dates, setDates] = useState([]);
  const [message, setMessage] = useState(''); // Para mostrar mensajes al usuario

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user) return; // Asegúrate de que el usuario esté definido

      try {
        const [accomData, resData] = await Promise.all([
          axios.get(`http://localhost:8080/accommodations/owner/${user.id}`),
          // axios.get('http://localhost:8080/bookings'),
        ]);

        setAccommodations(accomData.data);
        // setReservations(resData.data || []); // Asegúrate de que siempre sea un arreglo

        const startDate = new Date();
        const datesArray = Array.from({ length: 7 }, (_, i) => {
          const date = new Date();
          date.setDate(startDate.getDate() + i);
          return date.toISOString().split('T')[0];
        });

        setDates(datesArray);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
        setMessage('Error al cargar los datos del dashboard.'); // Mensaje de error
      }
    };

    fetchDashboardData();
  }, [user]); // Dependencia del usuario

  const renderCellContent = (accommodationId, date) => {
    const reservation = reservations.find(
      (res) =>
        res.accommodationId === accommodationId &&
        res.startDate <= date &&
        res.endDate >= date
    );

    return reservation ? (
      <div className="reserved">
        <span>{reservation.user.username}</span>
      </div>
    ) : (
      <div className="available">Disponible</div>
    );
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard del Propietario</h2>
      {message && <p className="error-message">{message}</p>} {/* Mensaje de error */}
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Alojamiento</th>
            {dates.map((date) => (
              <th key={date}>{date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {accommodations.map((accommodation) => (
            <tr key={accommodation.id}>
              <td>{accommodation.name}</td>
              {dates.map((date) => (
                <td key={`${accommodation.id}-${date}`}>
                  {renderCellContent(accommodation.id, date)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OwnerDashboard;
