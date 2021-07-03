import { useState } from 'react';
import PropTypes from 'prop-types';
import firebase from '../config/fire-conf';

export default function CreatePost({ getPosts }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title !== '' && body !== '') {
      firebase
        .firestore()
        .collection('posts')
        .add({ title, body, createdAt: new Date().toISOString() });
    }

    setTitle('');
    setBody('');
    getPosts();
  };

  return (
    <>
      <h5>Add Blog</h5>

      <form onSubmit={handleSubmit}>
        <div className='mb-2'>
          <label>Title</label>
          <input
            type='text'
            className='form-control'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label>Body</label>
          <textarea
            className='form-control'
            value={body}
            rows={6}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <input type='submit' value='Save' className='btn btn-primary' />
      </form>
    </>
  );
}

CreatePost.propTypes = {
  getPosts: PropTypes.func.isRequired,
};
