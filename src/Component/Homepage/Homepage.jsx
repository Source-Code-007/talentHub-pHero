import React, { createContext, useState } from 'react';
import Category from '../Category/Category';
import Jobs from '../Jobs/Jobs';
import Banner from '../Banner/Banner';


const Homepage = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <Jobs></Jobs>
        </>
    );
};

export default Homepage;