import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginForm.scss';

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
  
    // Provjera minimalne duljine lozinke
    if (password.length < 6) {
      console.error('Lozinka mora sadržavati minimalno 6 znakova.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:8080/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Uspješna prijava:', responseData);
        navigate('/home');
      } else {
        console.error('Neuspješna prijava. Provjerite podatke.');
      }
    } catch (error) {
      console.error('Greška prilikom slanja zahtjeva:', error);
    }
  };
  
  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Prijava korisnika</h2>
        <form onSubmit={handleSubmit}>
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
          <div className="button-group">
            <button type="submit" className="btn-submit">Prijava</button>
            <p className="register-text">
              Niste registrirani?{' '}
              <Link to="/registration">Registriraj se</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
