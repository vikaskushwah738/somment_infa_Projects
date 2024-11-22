'use client';
import { useEffect } from 'react';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to the console for debugging
    console.error(error);
  }, [error]);

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h2>Something went wrong! </h2>
      <p className='text-red-500 px-20'>{error.message || 'An unknown error occurred.'}</p>
      {error.digest && <p className='text-sm'>Error Digest: {error.digest}</p>}
    </div>
  );
}
