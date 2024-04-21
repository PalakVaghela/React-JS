import React from 'react'
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header/>
      
        <Outlet/>
    {/* header and footer will not change change but outlet vale can be change like Home About... */}
      <Footer/>
    </>

  )
}

export default Layout
