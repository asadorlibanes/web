import React from 'react'
import Logointento from '../../assets/site/images/logo-123x35.png'

export default function Navbar() {
  return (
    <header class="page-header">
    
    <div class="rd-navbar-wrap">
      <nav class="rd-navbar rd-navbar_transparent" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-sm-device-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-fixed" data-xl-device-layout="rd-navbar-static" data-xl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-stick-up-clone="false" data-sm-stick-up="true" data-md-stick-up="true" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true" data-lg-stick-up-offset="100px" data-xl-stick-up-offset="100px" data-xxl-stick-up-offset="100px" data-body-class="rd-navbar-absolute rd-navbar_transparent-linked">
        <div class="rd-navbar-inner">
         
          <div class="rd-navbar-panel">
            <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
           
            <div class="rd-navbar-brand"><a class="brand-name" href="/"><img src={Logointento} alt=""  style={{width:"123", height:"35"}}/></a></div>
          </div>
          
          <div class="rd-navbar-nav-wrap">
            <div class="rd-navbar-nav-wrap__element"><a class="button button-gray-light-outline"  href="/"><span>Book online</span></a></div>
            <ul class="rd-navbar-nav">
              <li class="active"><a href="/">Home</a>
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
