import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <>
    <Head>
      <title>RoboTokens</title>
      {/* <link rel="icon"  type="image/x-icon" href= "/favicon.ico" /> when we got web icon*/} 
    </Head>

    <Navbar/>
        {children}
    <Footer />

    </>
  )
}

export default Layout