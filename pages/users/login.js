import { useState } from 'react';
import { useRouter } from 'next/router';
import fire from '../../config/fire-conf';
import Layout from '../../components/Layout';

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username !== '' && password !== '') {
      try {
        await fire.auth().signInWithEmailAndPassword(username, password);
        router.push('/');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Layout>
      <h5>Login</h5>

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

        <div className='mb-3'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input type='submit' value='Login' className='btn btn-primary' />
      </form>
    </Layout>
  );
}
