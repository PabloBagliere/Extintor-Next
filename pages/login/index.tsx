import Head from 'next/head';
import Auth from 'component/Auth';
import useUser from 'hooks/useUser';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Login(): JSX.Element {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    user && router.replace('/');
  }, [router, user]);
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Auth />
        </div>
      </div>
    </>
  );
}
