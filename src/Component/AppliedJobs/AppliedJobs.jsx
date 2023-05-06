import React, { useContext, useEffect, useState } from 'react';
import CommonBanner from '../CommonBanner/CommonBanner';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { cartContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faSackDollar } from '@fortawesome/free-solid-svg-icons';

const AppliedJobs = () => {
    let navigate = useNavigate()
    // let storedJobs = useLoaderData()
    const [cart, setCart] = useContext(cartContext)
    
    // Filter
    const [filterOption, setFilterOption] = useState(null) //filter state
    let jobsFilter = cart.filter(job => {
        if (filterOption === 'Onsite') {
            return job.remote_or_onsite === 'Onsite'
        } else if (filterOption === 'Remote') {
            return job.remote_or_onsite === 'Remote'
        } else {
            return cart
        }
    })
    return (
        <>
            <CommonBanner>Applied Jobs</CommonBanner>
            <div className='space-y-4 max-w-7xl mx-10 xl:mx-auto py-20'>
                <form className='text-right'>
                    <select onChange={(e) => setFilterOption(e.target.value)} className='py-3 px-5 bg-slate-100 shadow-inner font-bold text-xl rounded-lg'>
                        <option>Show all</option>
                        <option value="Onsite">Onsite</option>
                        <option value="Remote">Remote</option>
                    </select>
                </form>
                {
                    !jobsFilter.length<1? jobsFilter.map(job => {
                        const { id, company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary } = job
                        return <div key={id} className='rounded-lg p-4 shadow-inner bg-slate-100 flex flex-col md:flex-row gap-10 justify-between text-slate-800 text-lg'>
                            <div className='flex justify-center gap-5'>
                                <figure className='flex items-center'>
                                    <img className='h-32 w-32' src={company_logo} alt="" />
                                </figure>
                                <div className='space-y-3'>
                                    <h2 className='font-bold text-xl'>{job_title}</h2>
                                    <h2 className='font-semibold text-slate-500'>{company_name}</h2>
                                    <div className='flex flex-col md:flex-row gap-5'>
                                        <button className='rounded-lg py-1 px-5 border-2 border-emerald-500 hover:bg-emerald-500 hover:text-slate-50 duration-500'>{remote_or_onsite}</button>
                                        <button className='rounded-lg py-1 px-5 border-2 border-emerald-500 hover:bg-emerald-500 hover:text-slate-50 duration-500'>{fulltime_or_parttime}</button>
                                    </div>
                                    <div className='flex gap-8 text-slate-600'>
                                        <p> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> {location}</p>
                                        <p> <FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon> {salary}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button onClick={() => navigate(`/job/${id}`)} className='rounded-lg py-3 px-5 border-2 bg-emerald-500 hover:text-slate-50 duration-500 font-bold text-slate-50'>View Details</button>
                            </div>
                        </div>
                    }) : <div className='text-center'>
                        <h2 className='font-bold p-4 bg-slate-100 shadow-inner text-xl text-slate-800 inline-block rounded-lg text-center'>There are no applied jobs here</h2>
                    </div>
                }
            </div>
        </>
    );
};

export default AppliedJobs;