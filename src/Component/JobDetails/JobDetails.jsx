import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import CommonBanner from '../CommonBanner/CommonBanner';
import { setJobsDB } from '../../utilitiesFunc/appliedJobsDB';
import { ToastContainer, toast } from 'react-toastify';
import { cartContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faDatabase, faDollarSign, faEarDeaf, faElevator, faEnvelope, faHeader, faLocation, faLocationDot, faMessage, faPhone, faSackDollar, faVoicemail } from '@fortawesome/free-solid-svg-icons';

const JobDetails = () => {
    const navigate = useNavigate()
    let dynamicId = useParams().id
    const allJobdata = useLoaderData()

    const currentJob = allJobdata.find(jobData => jobData.id == dynamicId)
    let id, job_description, job_responsibility, educational_requirements, salary, job_title, location, contact_information, experiences;
    if (currentJob) {
        ({ id, job_description, job_responsibility, educational_requirements, salary, job_title, location, contact_information, experiences } = currentJob)
    }

    //Cart recieve from context API
    const [cart, setCart] = useContext(cartContext)

    // Apply job button function
    function appliedBtnFunc(id) {
        const existCart = cart.find(job => job.id === id)
        if(!existCart){
            setCart([...cart, currentJob])
        } else{
            toast.error('already applied', {
                autoClose: 1500,
            })
            return
        }

        setJobsDB(id)
        navigate('/applied-jobs')
    }
    
    return (
        <>
            <CommonBanner>Job Details</CommonBanner>
            <div className='max-w-7xl mx-10 xl:mx-auto py-14 grid grid-cols-12 gap-8 font-semibold text-slate-800'>
                <div className='col-span-12 md:col-span-7 space-y-4'>
                    <h2><span className='font-bold text-xl'>Description:</span> {job_description}</h2>
                    <h2><span className='font-bold text-xl'>Responsibility:</span> {job_responsibility}</h2>
                    <h2><span className='font-bold text-xl'>Educational Requirements:</span> {educational_requirements}</h2>
                    <h2><span className='font-bold text-xl'>Experiences:</span> {experiences}</h2>
                </div>
                <div className='col-span-12 md:col-span-5'>
                    <div className='mb-4 space-y-6 rounded-lg bg-slate-100 shadow-inner p-4'>
                        <ul className='space-y-2'>
                            <li className='font-bold text-xl pb-4 border-b-2 border-b-slate-300'>Job Details</li>
                            <li><span className='font-bold text-lg text-slate-700'> <FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon> Salary:</span> {salary}</li>
                            <li><span className='font-bold text-lg text-slate-700'> <FontAwesomeIcon icon={faElevator}></FontAwesomeIcon> Job Title:</span> {job_title}</li>
                        </ul>
                        <ul className='space-y-2'>
                            <li className='font-bold text-xl pb-4 border-b-2 border-b-slate-300'>Contact Information</li>
                            <li><span className='font-bold text-lg text-slate-800'> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Phone:</span> {contact_information?.phone}</li>
                            <li><span className='font-bold text-lg text-slate-800'> <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> Email:</span> {contact_information?.email}</li>
                            <li><span className='font-bold text-lg text-slate-800'> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Location:</span> {location}</li>
                        </ul>
                    </div>
                    <button onClick={()=> appliedBtnFunc(id)} className='rounded-lg py-4 px-3 bg-emerald-500 font-bold text-xl text-slate-50 w-full'>Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default JobDetails;