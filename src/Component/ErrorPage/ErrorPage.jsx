import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error.error.message, error.status);
    return (
        <div className='h-screen flex flex-col gap-5 justify-center items-center bg-slate-800 text-slate-50'>
            <h1 className='font-bold text-8xl'>{error.status}</h1>
            <h1 className='font-bold text-xl'>{error.error.message}</h1>
            <h1 className='font-semibold text-2xl'>The page you landed is <span className='font-extrabold'>moon</span> not a <span className='font-extrabold'>earth</span></h1>
            <Link to={'/'}><button className='py-3 px-5 bg-emerald-500 font-bold text-xl rounded-lg'>Go Back To Earth</button></Link>
        </div>
    );
};

export default ErrorPage;