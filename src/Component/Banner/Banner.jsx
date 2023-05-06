import React from 'react';
import bannerImg from '../../assets/img/mainBanner.png'

const Banner = () => {
    return (
        <section>
        <div className='max-w-7xl mx-10 lg:mx-auto h-auto lg:h-screen grid grid-cols-12 items-center'>
            <div className='col-span-12 md:col-span-5 space-y-5 px-5 py-10 lg:py-0 font-semibold text-lg'>
                <h2 className='font-bold text-6xl'>One Step Closer To Your <span className='text-emerald-500'>Dream Job</span></h2>
                <p className='text-slate-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum error consectetur praesentium hic cupiditate porro!</p>
                <button className='rounded-lg px-5 py-3 bg-emerald-500 text-slate-50'>Get started</button>
            </div>
            <div className='col-span-12 md:col-span-7 mx-auto'>
                <figure className='h-full'>
                    <img className='max-h-full max-w-full' src={bannerImg} alt="" />
                </figure>
            </div>
        </div>
    </section>
    );
};

export default Banner;