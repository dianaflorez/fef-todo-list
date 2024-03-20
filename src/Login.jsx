import { useState } from "react";
import { postLogin } from "./services/api";
import PropTypes from "prop-types";

import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const data = await postLogin({ email, password });

      if (data.token) {
        onLogin(data.token);
      } else {
        setError("* Credenciales inválidas");
      }
    } catch (error) {
      setError(error.message);
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

Login.PropTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
