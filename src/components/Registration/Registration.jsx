// Registration.jsx

import React from 'react';

const Registration = () => {
  return (
    <div>
      <h2>Registracija</h2>
      {/* Dodajte formu za registraciju */}
      <form>
        {/* Polja za unos podataka */}
        <input type="text" placeholder="Ime" />
        <input type="text" placeholder="Prezime" />
        <input type="email" placeholder="Email adresa" />
        <input type="password" placeholder="Lozinka" />
        <input type="password" placeholder="Ponovite lozinku" />

        {/* Gumb za registraciju */}
        <button type="submit">Registriraj se</button>
      </form>
    </div>
  );
};

export default Registration;
