import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import Homepage from './Component/Homepage/Homepage';
import JobDetails from './Component/JobDetails/JobDetails';
import Statistics from './Component/Statistics/Statistics';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Blogs from './Component/Blogs/Blogs';
import { getJobsDB } from './utilitiesFunc/appliedJobsDB';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: getJobsDB,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>,
      },
      {
        path: 'home',
        element: <Homepage></Homepage>,
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'job/:id',
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('/featured.json')
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
        // loader: getJobsDB
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
