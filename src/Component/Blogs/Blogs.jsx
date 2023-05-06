import React, { useState } from 'react';
import CommonBanner from '../CommonBanner/CommonBanner';

const Blogs = () => {
    let [checked, setChecked] = useState(true)
    return (
        <>
            <CommonBanner>Blog Page</CommonBanner>
            <div className='w-5/6 md:w-4/6 xl:w-3/6 mx-auto py-20 space-y-4 text-lg'>
                <div className="collapse collapse-plus rounded-lg">
                    <input onChange={()=> setChecked(!checked)} type="checkbox" checked={checked} className="peer" />
                    <div className="collapse-title bg-slate-500 text-primary-content peer-checked:bg-slate-300 peer-checked:text-slate-800 peer-checked:font-bold font-semibold text-xl">
                        01. When should you use context API?
                    </div>
                    <div className="collapse-content bg-300 text-primary-content peer-checked:bg-slate-500 peer-checked:text-secondary-content">
                        <p className='font-semibold'>The Context API is a very important feature in React that allows sharing data efficiently between components. When needs to avoid passing props via prop drilling then it's helpful for us.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-slate-500 text-primary-content peer-checked:bg-slate-300 peer-checked:text-slate-800 peer-checked:font-bold font-semibold text-xl">
                        02. What is custom hook?
                    </div>
                    <div className="collapse-content bg-300 text-primary-content peer-checked:bg-slate-500 peer-checked:text-secondary-content">
                        <p className='font-semibold'>Custom hooks are reusable functions that can add unique and important functionality to a react application. When needs to use components logic in multiple components, then we can extract that logic to a custom hooks. Custom Hooks start with "use".</p>
                    </div>
                </div>
                <div className="collapse collapse-plus rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-slate-500 text-primary-content peer-checked:bg-slate-300 peer-checked:text-slate-800 peer-checked:font-bold font-semibold text-xl">
                        03. What is useRef?
                    </div>
                    <div className="collapse-content bg-300 text-primary-content peer-checked:bg-slate-500 peer-checked:text-secondary-content">
                        <p className='font-semibold'>useRef is a hook in React that returns a mutable ref object. It is especially useful in cases where needs to access the DOM node</p>
                    </div>
                </div>
                <div className="collapse collapse-plus rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-slate-500 text-primary-content peer-checked:bg-slate-300 peer-checked:text-slate-800 peer-checked:font-bold font-semibold text-xl">
                        04. What is useMemo?
                    </div>
                    <div className="collapse-content bg-300 text-primary-content peer-checked:bg-slate-500 peer-checked:text-secondary-content">
                        <p className='font-semibold'>useMemo is a built in hook in React Js. It is used when we want to avoid recomputing the result of a function on every render.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;