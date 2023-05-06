import './App.css'
import Header from './Component/Header/Header'
import { Outlet, useLoaderData } from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import { createContext, useState } from 'react'

export const cartContext = createContext(null)

function App() {
  const storedCartDB = useLoaderData()
  let [cart, setCart] = useState(storedCartDB)
  return (
    <cartContext.Provider value={[cart, setCart]}>
      <div className='overflow-hidden'>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </cartContext.Provider>


  )
}

export default App
