import { useState } from 'react';
import fire from '../../config/fire-conf';
import Layout from '../../components/Layout';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username !== '' && password !== '' && password === confirmPassword) {
      try {
        const res = await fire
          .auth()
          .createUserWithEmailAndPassword(username, password);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Layout>
      <h5>Register</h5>

      <form onSubmit={handleSubmit}>
        <div className='mb-2'>
          <label>Email</label>
          <input
            type='text'
            className='form-control'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className='mb-2'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label>Confirm Passwrod</label>
          <input
            type='password'
            className='form-control'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <input type='submit' value='Register' className='btn btn-primary' />
      </form>
    </Layout>
  );
}
