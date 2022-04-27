import React from 'react'
import Logointento from '../images/logo-123x35.png'

export default function Navbar() {
  return (
    <header className="page-header">
    
    <div className="rd-navbar-wrap">
      <nav className="rd-navbar rd-navbar_transparent" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-sm-device-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-fixed" data-xl-device-layout="rd-navbar-static" data-xl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-stick-up-clone="false" data-sm-stick-up="true" data-md-stick-up="true" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true" data-lg-stick-up-offset="100px" data-xl-stick-up-offset="100px" data-xxl-stick-up-offset="100px" data-body-className="rd-navbar-absolute rd-navbar_transparent-linked">
        <div className="rd-navbar-inner">
         
          <div className="rd-navbar-panel">
            <button className="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
           
            <div className="rd-navbar-brand"><a className="brand-name" href="/"><img src={Logointento} alt=""  style={{width:"123", height:"35"}}/></a></div>
          </div>
          
          <div className="rd-navbar-nav-wrap">
            <div className="rd-navbar-nav-wrap__element"><a className="button button-gray-light-outline"  href="/"><span>Book online</span></a></div>
            <ul className="rd-navbar-nav">
              <li className="active"><a href="/">Home</a>
                </li>
              <li><a href="/">about</a>
              </li>
              <li><a href="/">Menu</a>
                
              </li>
             
              
              <li><a href="/">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  )
}
