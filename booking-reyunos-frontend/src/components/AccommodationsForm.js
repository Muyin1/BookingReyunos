import React, { useState } from 'react';

const AccommodationForm = ({ onSave }) => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        capacity: 0,
        price: 0,
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Nombre" onChange={handleChange} />
            <input name="location" placeholder="Ubicación" onChange={handleChange} />
            <input type="number" name="capacity" placeholder="Capacidad" onChange={handleChange} />
            <input type="number" name="price" placeholder="Precio" onChange={handleChange} />
            <textarea name="description" placeholder="Descripción" onChange={handleChange} />
            <button type="submit">Guardar</button>
        </form>
    );
};

export default AccommodationForm;
