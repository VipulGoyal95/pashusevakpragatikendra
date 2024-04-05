import React, { useEffect } from 'react'
import Hometopcontainer from '../components/hometopcontainer/hometopcontainer'
import Benefits from '../components/benefits/benefits'

const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      <Hometopcontainer/>
      <Benefits/>
    </>
  )
}

export default Homepage
