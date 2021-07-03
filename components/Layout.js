import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <div className='container p-4'>
        <h1 className='mb-5 text-center text-primary'>Blog</h1>

        {children}
      </div>
    </>
  );
}
