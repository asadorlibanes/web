import React from 'react'

import Foto1 from '../../assets/site/images/logo-inverse-123x35.png'

export default function Footer() {
  return (
    <footer class="footer-modern">
    <div class="container">
      <div class="footer-modern__layer footer-modern__layer_top"><a class="brand" href="/"><img src={Foto1} alt="" width="123" height="35"/></a>
        <ul class="list-nav">
          <li class="active"><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Menu</a></li>
          <li><a href="/">Contacto</a></li>
        </ul>
        <ul class="list-inline-xxs footer-modern__list">
          <li><a class="icon icon-sm icon-gray-4 fa fa-facebook" href="#"></a></li>
          <li><a class="icon icon-sm icon-gray-4 fa fa-twitter" href="#"></a></li>
          <li><a class="icon icon-sm icon-gray-4 fa fa-google-plus" href="#"></a></li>
          <li><a class="icon icon-sm icon-gray-4 fa fa-vimeo" href="#"></a></li>
          <li><a class="icon icon-sm icon-gray-4 fa fa-youtube" href="#"></a></li>
          <li><a class="icon icon-sm icon-gray-4 fa fa-pinterest" href="#"></a></li>
        </ul>
      </div>
      <div class="footer-modern__layer footer-modern__layer_bottom">
        <p class="rights"><span>Avenue</span><span>&nbsp;</span><span class="copyright-year"></span>.</p>
        <ul class="list-bordered">
          <li>
            <dl class="list-terms-minimal">
              <dt>Address</dt>
              <dd>Alexandria, 32 Washington str, 22303</dd>
            </dl>
          </li>
          <li>
            <dl class="list-terms-minimal">
              <dt>Phones</dt>
              <dd>
                <ul class="list-semicolon">
                  <li><a href="tel:#">(800) 123-0045</a></li>
                  <li><a href="tel:#">(800) 123-0045</a></li>
                </ul>
              </dd>
            </dl>
          </li>
          <li>
            <dl class="list-terms-minimal">
              <dt>E-mail</dt>
              <dd><a href="mailto:#">info@demolink.org</a></dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  )
}
