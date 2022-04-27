import React from 'react'
import Foto1 from '../../assets/site/images/index-parallax-2-1920x1080.jpg'

export default function Fundado() {
  return (
    <section class="text-center">
   
    <div class="rd-parallax bg-image parallax-header rd-parallax-light parallax-overlay" data-on="false" data-md-on="true" style={{backgroundImage:  `url(${Foto1})`}}>
      <div class="rd-parallax-layer" data-speed="0.35" data-type="media" data-url={Foto1}></div>
      <div class="rd-parallax-layer" data-speed="0.1" data-type="html">
        <div class="parallax-header__inner">
          <div class="parallax-header__content">
            <div class="container-fluid">
              <div class="row no-gutters align-items-lg-center flex-lg-row-reverse">
                <div class="col-lg-12 section-sm">
                  <div class="row justify-content-center">
                    <div class="col-11 col-md-6 col-xl-5">
                      <h1>Founded in 1982</h1>
                      <h5>Avenue is proud to be serving fine European dishes for more then 30 years!</h5>
                      <hr class="divider-minimal"></hr>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
