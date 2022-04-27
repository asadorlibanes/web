import React, { Fragment } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import First from './First'
import Fundado from './Fundado'
import Gallery from './Gallery'
import MenuInicio from './MenuInicio'
import Quesomos from './Quesomos'
import Standards from './Standards'

export default function inicio() {
  return (
    <Fragment>
    <div>inicio</div>
    <Navbar/>
    <First/>
    <Quesomos/>
    <Standards/>
    <Fundado/>
    <MenuInicio/>
    <Gallery/>
    <Footer/>
    </Fragment>
  )
}
