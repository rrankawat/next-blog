import { useState, useEffect } from 'react';
import firebase from '../config/fire-conf';

import Layout from '../components/Layout';
import CreatePost from '../components/CreatePost';
import Posts from '../components/Posts';

export default function Home() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await firebase
      .firestore()
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .get();
    const data = res.docs.map((entry) => ({
      id: entry.id,
      ...entry.data(),
    }));
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
    const user = firebase.auth().currentUser;
    console.log(user);
  }, []);

  return (
    <Layout>
      <div className='row'>
        <div className='col-md-5'>
          <CreatePost getPosts={getPosts} />
        </div>
        <div className='col-md-6 offset-md-1'>
          <Posts posts={posts} />
        </div>
      </div>
    </Layout>
  );
}
