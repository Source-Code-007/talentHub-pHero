import {  faLocationDot, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Jobs = () => {
    let navigate = useNavigate()
    const [featuredData, setFeaturedData] = useState([])
    const [btnToogle, setBtnToogle] = useState(false)

    useEffect(() => {
        fetch('/featured.json')
            .then(res => res.json())
            .then(data => {
                // setAllFeaturedData(data)
                // setFeaturedData(data.slice(0, 4))
                setFeaturedData(data)
            })
    }, [])

    
    return (
        <section className='max-w-7xl mx-auto py-14 space-y-8'>
            <div className='mb-5 space-y-4 text-center'>
                <h2 className='font-bold text-5xl'>Featured Jobs</h2>
                <p className='text-slate-700 text-lg'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 mx-5 md:mx-10 xl:mx-0 gap-7'>
                {
                  featuredData.slice(0, btnToogle? undefined : 4).map(featured => {
                        return <div key={featured.id} className='rounded-lg bg-slate-100 shadow-inner py-5 px-4 space-y-5 text-xl'>
                            <img className='h-20 w-20' src={featured.company_logo} alt="" />
                            <h2 className='font-bold text-2xl'>{featured.job_title}</h2>
                            <p className='font-bold text-slate-700'>{featured.company_name}</p>
                            <div className=' flex gap-5'>
                                <button className='rounded-lg py-2 px-5 border-2 border-emerald-500 hover:bg-emerald-500 hover:text-slate-50 duration-500'>{featured.remote_or_onsite}</button>
                                <button className='rounded-lg py-2 px-5 border-2 border-emerald-500 hover:bg-emerald-500 hover:text-slate-50 duration-500'>{featured.fulltime_or_parttime}</button>
                            </div>
                            <div className='flex gap-5 flex-col md:flex-row justify-between text-slate-700'>
                                <span><span className='font-bold'> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></span> {featured.location}</span>
                                <span><span className='font-bold'> <FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon> </span> {featured.salary}</span>
                            </div>
                            <button onClick={() => navigate(`/job/${featured.id}`)} className='rounded-lg py-3 px-5 bg-emerald-500 font-bold text-slate-50 hover:bg-slate-50 hover:text-emerald-500 border-2 hover:border-2 hover:border-emerald-500 duration-500'>View Details</button>
                        </div>
                    })
                }
            </div>
            <div className='text-center'>
                <button onClick={()=> setBtnToogle(!btnToogle)} className='font-bold text-slate-50 text-xl rounded-lg py-3 px-12 bg-emerald-500 hover:bg-slate-50 border-2 hover:border-2 hover:border-emerald-500 hover:text-emerald-500 duration-500'>{btnToogle? 'View less jobs' : 'View all jobs'}</button>
            </div>
        </section>
    );
};

export default Jobs;