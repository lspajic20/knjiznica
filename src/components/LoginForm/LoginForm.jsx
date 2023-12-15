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

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidUser = true; 

    if (isValidUser) {
      console.log(formData);
    
      navigate('/home');
    } else {
      console.log('Neispravni podaci za prijavu');
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
