import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Posts({ posts }) {
  return (
    <>
      <h5 className='mb-4'>Posts</h5>

      {posts.map((post) => (
        <div className='card card-body mb-3' key={post.id}>
          <h6>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </h6>
          <p className='mb-0'>{post.body}</p>
        </div>
      ))}
    </>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};
