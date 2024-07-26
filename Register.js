import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/register', {
        username,
        email,
        password,
        repeatPassword
      });
      console.log(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      <br />
      <label>Email:</label>
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <br />
      <label>Repeat Password:</label>
      <input type="password" value={repeatPassword} onChange={(event) => setRepeatPassword(event.target.value)} />
      <br />
      <button type="submit">Register</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default Register;