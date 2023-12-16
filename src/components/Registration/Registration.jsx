import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.scss';

const Registration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword, ...userData } = formData; // Dohvat podataka bez lozinke
  
    if (password.length < 6) {
      console.error('Lozinka mora sadržavati minimalno 6 znakova.');
      return;
    }
  
    if (password !== confirmPassword) {
      console.error('Lozinke se ne podudaraju.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:8080/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Uspješno registriran korisnik:', responseData);
        navigate('/home'); 
      } else {
        console.error('Neuspješna registracija. Molimo pokušajte ponovno.');
      }
    } catch (error) {
      console.error('Greška prilikom slanja zahtjeva:', error);
    }
  };
  
  return (
    <div className="registration-container">
      <div className="registration-content">
        <h2>Registracija korisnika</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="Ime"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Prezime"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Lozinka"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
              title="Lozinka mora sadržavati minimalno 6 znakova."
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Potvrdi lozinku"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              minLength="6"
              title="Lozinka mora sadržavati minimalno 6 znakova."
              className="form-control"
            />
          </div>
          <div className="button-group">
            <button type="submit" className="btn-submit">Registracija</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
