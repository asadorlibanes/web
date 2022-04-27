import React from 'react'
import Parallax from '../../assets/site/images/index-parallax-1-1920x1080.jpg'

export default function First() {
  return (
    <section className="section-first-screen text-center">
        <div className="rd-parallax bg-image parallax-header rd-parallax-light parallax-overlay" data-on="false" data-md-on="true" style={{backgroundImage:  `url(${Parallax})`}}>
          <div className="rd-parallax-layer" data-speed="0.35" data-type="media" data-url={Parallax}></div>
          <div className="rd-parallax-layer" data-speed="0.1" data-type="html">
            <div className="parallax-header__inner">
              <div className="parallax-header__content">
                <div className="section-xxl">
                  <div className="container">
                    <div className="row justify-content-sm-center">
                      <div className="col-md-10 col-xl-8">
                        <h1 style={{overflow: "hidden"}}><span className="wow fadeInUpSmall" data-wow-delay="2s">Welcome to</span></h1>
                        <div className="brand-name view-animate">
                          <svg viewBox="0 0 550 180" textAnchor="middle">
                            <text x="50%" y="75%"><tspan>A</tspan>venue</text>
                          </svg>
                        </div>
                        <ul style={{overflow: "hidden"}}>
                          <li className="font-italic wow fadeInDownSmall" data-wow-delay="2s">Alexandria, 32 Washington str, 22303</li>
                          <li className="font-italic wow fadeInDownSmall" data-wow-delay="2.2s">
                            <dl className="list-terms-minimal">
                              <dt>Opening hours</dt>
                              <dd>Mo-Fr 11:00-00:00, Sa-Sa 15:00-00:00</dd>
                            </dl>
                          </li>
                          <li className="wow fadeInDownSmall" data-wow-delay="2.4s">
                            <dl className="list-terms-minimal">
                              <dt>Call</dt>
                              <dd><a href="tel:#">(555)123-4567</a></dd>
                            </dl>
                          </li>
                        </ul>
                        <hr className="divider-minimal wow fadeInDownSmall" data-wow-delay="2.6s"></hr>
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
