import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Set jobs in local storage
async function setJobsDB(id) {
    let res = await fetch('/featured.json')
    let data = await res.json()
    let currentJob = data.find(job => job.id === id)

    let storeJobsArr
    let existJobs = JSON.parse(localStorage.getItem('storedJobs'))
    if (existJobs) {
        // let duplicateJobs = existJobs.find(job => job.id == id)
        // if (!duplicateJobs) {
            storeJobsArr = [...existJobs, currentJob]
            localStorage.setItem('storedJobs', JSON.stringify(storeJobsArr))
        // }
    } else {
        storeJobsArr = [currentJob]
        localStorage.setItem('storedJobs', JSON.stringify(storeJobsArr))
    }
}

// Get jobs from local storage
const getJobsDB = () => {
    let storedData = JSON.parse(localStorage.getItem('storedJobs'))
    if (storedData) {
        return storedData
    } else {
        return []
    }
}

export { setJobsDB, getJobsDB }