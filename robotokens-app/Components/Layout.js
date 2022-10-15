import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import GlobalStyles from '../styles/GlobalStyles'

const Layout = ({children}) => {
  return (
    <>
    <Head>
      <title>RoboTokens</title>
      {/* <link rel="icon"  type="image/x-icon" href= "/favicon.ico" /> when we got web icon*/} 
    </Head>

    <GlobalStyles/>

    <Navbar/>
        {children}
    <Footer />

    </>
  )
}

export default Layout