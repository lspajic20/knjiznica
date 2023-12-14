import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    console.log(formData);
   //back
   navigate('/');
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
