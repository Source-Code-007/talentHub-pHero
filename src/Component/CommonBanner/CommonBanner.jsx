import React from 'react';
import commonBannerImg from '../../assets/img/commonBanner.jpg'

const CommonBanner = ({children}) => {
    return (
        <div className='h-52 flex justify-center items-center bg-center bg-cover bg-no-repeat bg-blend-overlay bg-slate-500' style={{backgroundImage:`url(${commonBannerImg})`}}>
            <h2 className='font-bold text-3xl text-slate-50'>{children}</h2>
        </div>
    );
};

export default CommonBanner;