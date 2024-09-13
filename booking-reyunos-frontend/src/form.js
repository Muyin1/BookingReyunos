import React from 'react';

function Form() {
  return (
    <div>
      <h2>Formulario de Reserva</h2>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
}

export default Form;
