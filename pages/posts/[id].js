import Link from 'next/link';
import firebase from '../../config/fire-conf';
import Layout from '../../components/Layout';

export default function Post({ post }) {
  if (!post) {
    return <h2>Loading...</h2>;
  }

  return (
    <Layout>
      <Link href='/'>
        <a className='btn btn-primary'>Back</a>
      </Link>

      <h2 className='mt-5'>{post.title}</h2>
      <p>{post.body}</p>
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  const res = await firebase
    .firestore()
    .collection('posts')
    .doc(query.id)
    .get();
  const resData = { id: res.id, ...res.data() };

  return {
    props: {
      post: resData,
    },
  };
};
