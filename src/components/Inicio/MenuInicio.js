import React from 'react'
import Foto1 from '../../assets/site/images/index-5-418x315.jpg'
import Foto2 from '../../assets/site/images/index-6-418x315.jpg'
import Foto3 from '../../assets/site/images/index-7-418x315.jpg'
import Foto4 from '../../assets/site/images/index-8-418x315.jpg'
import Foto5 from '../../assets/site/images/index-9-418x315.jpg'
import Foto6 from '../../assets/site/images/index-10-418x315.jpg'

export default function MenuInicio() {
  return (
    <section class="section-xl bg-default text-center">
        <div class="container">
          <h1>Menu</h1>
          <div class="row row-60">
            <div class="col-md-6 col-lg-4">
              <div class="thumbnail-classic">
                <figure class="figure-main-menu"><img src={Foto1} alt="" width="418" height="315"/>
                </figure>
                <div class="label-main-menu">
                  Chef’s
                  Special
                </div>
                <div class="caption">
                  <div class="menu-inner menu-inner__heading"><a >Thyme Soup with Cream</a><span class="menu-inner-price">5.45</span></div>
                  <div class="menu-inner"><span>with Winter black truffles from Piedmont</span><span>320g</span></div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="thumbnail-classic">
                <figure class="figure-main-menu"><img src={Foto2} alt="" width="418" height="315"/>
                </figure>
                <div class="label-main-menu">
                  Chef’s
                  Special
                </div>
                <div class="caption">
                  <div class="menu-inner menu-inner__heading"><a >Hot Grilled Chicken Breast</a><span class="menu-inner-price">2.45</span></div>
                  <div class="menu-inner"><span>with pecan ‘épicé’ & passe crassane pear</span><span>320g</span></div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="thumbnail-classic">
                <figure class="figure-main-menu"><img src={Foto3} alt="" width="418" height="315"/>
                </figure>
                <div class="label-main-menu">
                  Chef’s
                  Special
                </div>
                <div class="caption">
                  <div class="menu-inner menu-inner__heading"><a >Big Smokey Burger</a><span class="menu-inner-price">8.45</span></div>
                  <div class="menu-inner"><span>with ground beef sirloin and adobo sauce</span><span>320g</span></div>
                </div>
              </div>
            </div>
            
            <div class="col-md-6 col-lg-4">
              <div class="thumbnail-classic">
                <figure class="figure-main-menu"><img src={Foto4} alt="" width="418" height="315"/>
                </figure>
                <div class="label-main-menu">
                  Chef’s
                  Special
                </div>
                <div class="caption">
                  <div class="menu-inner menu-inner__heading"><a >Blue Cheese Burger</a><span class="menu-inner-price">5.45</span></div>
                  <div class="menu-inner"><span>with sun-dried tomatoes and lean ground beef</span><span>320g</span></div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="thumbnail-classic">
                <figure class="figure-main-menu"><img src={Foto5} alt="" width="418" height="315"/>
                </figure>
                <div class="label-main-menu">
                  Chef’s
                  Special
                </div>
                <div class="caption">
                  <div class="menu-inner menu-inner__heading"><a >Catriona potato gnocchi</a><span class="menu-inner-price">8.71</span></div>
                  <div class="menu-inner"><span>with black truffles</span><span>320g</span></div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="thumbnail-classic">
                <figure class="figure-main-menu"><img src={Foto6} alt="" width="418" height="315"/>
                </figure>
                <div class="label-main-menu">
                  Chef’s
                  Special
                </div>
                <div class="caption">
                  <div class="menu-inner menu-inner__heading"><a >Fruit Pie</a><span class="menu-inner-price">6.45</span></div>
                  <div class="menu-inner"><span>with raisins, chopped pecans, and coconut</span><span>320g</span></div>
                </div>
              </div>
            </div>
          </div>
        </div><a class="button button-gray-light-outline" href="menu.html"><span>See menu</span></a>
      </section>

  )
}
