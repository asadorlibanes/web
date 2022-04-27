import React from 'react'
import Foto1 from '../../assets/site/images/index-1-433x315.jpg'
import Foto2 from '../../assets/site/images/index-2-433x313.jpg'
import Foto3 from '../../assets/site/images/index-3-453x700.jpg'

export default function Quesomos() {
  return (
    <section class="section-xl bg-default">
    <div class="container-fluid container-limit">
      <div class="row row-50 justify-content-sm-center align-items-xxl-center">
        <div class="col-lg-6">
          <div class="row justify-content-center justify-content-lg-end">
            <div class="col-11 col-xl-9">
              <h1>The Avenue <br></br> Restaurant</h1>
              <h5>The perfect place to enjoy the life and food.</h5>
              <hr class="divider-minimal divider__left"></hr>
              <p>Avenue Restaurant & Bar is a traditional European cuisine venue, serving&nbsp<i>the best dishes and drinks from across the range of European cuisines.&nbsp</i>A definitive neighborhood joint in Davis Square, Avenue offers a laid-back dining experience in a casual setting to guests from all walks of life.&nbsp<i>Honest food and honest drinks set the foundation of our place's menu!</i></p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-xl-6">
              <div class="row row-50">
                <div class="col-md-6 col-lg-12">
                  <figure><img src={Foto1} alt="" width="433" height="315"/>
                  </figure>
                </div>
                <div class="col-md-6 col-lg-12">
                  <figure><img src={Foto2} alt="" width="433" height="313"/>
                  </figure>
                </div>
              </div>
            </div>
            <div class="col-xl-6 d-none d-xl-block">
              <figure><img src={Foto3} alt="" width="453" height="700"/>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
