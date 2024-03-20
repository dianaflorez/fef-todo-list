import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Si la autenticación es exitosa, llamamos a la función onLogin pasada por las props
        if (data.token) {
          onLogin(data.token);
        } else {
          setError('* Credenciales inválidas');
        }
      } else {
        setError('* Credenciales inválidas');
      }
    } catch (error) {
      setError('Error al realizar el login');
    }
  };

  return (
    <div className='card'>
      <div className='title-login'>Login</div>
      {error && <p className='p-error'>{error}</p>}
      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
