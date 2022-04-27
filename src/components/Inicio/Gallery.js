import React from 'react'

import Foto1 from '../../assets/site/images/index-gallery-1-442x332.jpg'
import Foto2 from '../../assets/site/images/index-gallery-2-442x332.jpg'
import Foto3 from '../../assets/site/images/index-gallery-3-442x332.jpg'
import Foto4 from '../../assets/site/images/index-gallery-4-442x332.jpg'
import Foto5 from '../../assets/site/images/index-gallery-5-442x332.jpg'
import Foto6 from '../../assets/site/images/index-gallery-6-442x332.jpg'
import Foto7 from '../../assets/site/images/index-gallery-7-442x332.jpg'
import Foto8 from '../../assets/site/images/index-gallery-8-442x332.jpg'

import Foto11 from '../../assets/site/images/image-original-1-1200x800.jpg'
import Foto22 from '../../assets/site/images/image-original-2-1200x800.jpg'
import Foto33 from '../../assets/site/images/image-original-3-1200x800.jpg'
import Foto44 from '../../assets/site/images/image-original-4-1200x800.jpg'
import Foto55 from '../../assets/site/images/image-original-5-1200x800.jpg'
import Foto66 from '../../assets/site/images/image-original-6-1200x800.jpg'
import Foto77 from '../../assets/site/images/image-original-7-1200x800.jpg'
import Foto88 from '../../assets/site/images/image-original-8-1200x800.jpg'

export default function Gallery() {
  return (
    
      <section class="section-lg bg-default" data-photo-swipe-gallery="gallery">
        <div class="container-fluid">
          <div class="row row-50">
            <div class="col-md-4 col-xl-3"><a class="thumb-modern" data-photo-swipe-item href={Foto11} data-size="1200x800">
                <figure><img src={Foto1} alt="" width="442" height="332"/>
                </figure>
                <div class="thumb-modern__overlay"></div></a></div>
            <div class="col-md-4 col-xl-3"><a class="thumb-modern" data-photo-swipe-item href={Foto22} data-size="1200x800">
                <figure><img src={Foto2} alt="" width="442" height="332"/>
                </figure>
                <div class="thumb-modern__overlay"></div></a></div>
            <div class="col-md-4 col-xl-3"><a class="thumb-modern" data-photo-swipe-item href={Foto33} data-size="1200x800">
                <figure><img src={Foto3} alt="" width="442" height="332"/>
                </figure>
                <div class="thumb-modern__overlay"></div></a></div>
            <div class="col-md-4 col-xl-3"><a class="thumb-modern" data-photo-swipe-item href={Foto44} data-size="1200x800">
                <figure><img src={Foto4} alt="" width="442" height="332"/>
                </figure>
                <div class="thumb-modern__overlay"></div></a></div>
            <div class="col-md-4 col-xl-3"><a class="thumb-modern" data-photo-swipe-item href={Foto55} data-size="1200x800">
                <figure><img src={Foto5} alt="" width="442" height="332"/>
                </figure>
                <div class="thumb-modern__overlay"></div></a></div>
            <div class="col-md-4 col-xl-3"><a class="thumb-modern" data-photo-swipe-item href={Foto66} data-size="1200x800">
                <figure><img src={Foto6} alt="" width="442" height="332"/>
                </figure>
                <div class="thumb-modern__overlay"></div></a></div>
            <div class="col-md-4 col-xl-3"><a class="thumb-modern" data-photo-swipe-item href={Foto77} data-size="1200x800">
                <figure><img src={Foto7} alt="" width="442" height="332"/>
                </figure>
                <div class="thumb-modern__overlay"></div></a></div>
            <div class="col-md-4 col-xl-3"><a class="thumb-modern" data-photo-swipe-item href={Foto88} data-size="1200x800">
                <figure><img src={Foto8} alt="" width="442" height="332"/>
                </figure>
                <div class="thumb-modern__overlay"></div></a></div>
          </div>
        </div>
      </section>

  )
}
