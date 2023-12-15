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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
    return passwordRegex.test(password);
  };
  // Provjera valjanosti lozinke prije slanja podataka
  if (!validatePassword(password)) {
    console.error('Lozinka nije valjana.');
    return;
  }

  if (password !== confirmPassword) {
    console.error('Lozinke se ne podudaraju.');
    return;
  }
    console.log(formData);
    //back
    navigate('/home');
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
              pattern="(?=.*[A-Z])(?=.*[0-9]).{6,}"
              title="Lozinka mora sadržavati minimalno 6 znakova, jedno veliko slovo i jedan broj"
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
              pattern="(?=.*[A-Z])(?=.*[0-9]).{6,}"
              title="Lozinka mora sadržavati minimalno 6 znakova, jedno veliko slovo i jedan broj"
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
