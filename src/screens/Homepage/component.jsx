import React, { useEffect } from 'react';
import './style.css';
import Button from '../../components/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import WOW from 'wowjs'
import IMAGES from '../../config/images';
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import $ from "jquery";

const Homepage = () => {

  useEffect(() => {
    // const wow = new WOW.WOW();
    // wow.init()
    new WOW.WOW().init()
  })

  const options = {
    items: 3,
    margin: 20,
    nav: false,
    rewind: true,
    lazyload: true,
    autoplay: true,
    loop: true,
    responsive: {
      0: {
          items: 1.2,
          dots: false
      },
      767: {
          items: 2,
          dots: false
      },
      991: {
          items: 2,
          loop: true
      },
      1199: {
          items: 3,
          dots: false
      },
      1200: {
          items: 3,
          dots: false,
          nav: true
      }
  },
  componentDidMount() {
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.btn-next').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.btn-prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });
  }
  
};

  return(
    <section>
      {/* JUMBOTRON */}
        <section className="jumbotronz">
          <div className="container">
            <div className="row justify-content-center text-center">
                <div className="bg-red wow fadeInLeft">
                  <h1 className="wow fadeInLeft">WANI</h1>
                </div>
            </div>
            <div className="row text-center mt-5 homepage-title">
              <div className="col">
                <h2 className="wow fadeInRight">WATAK APIK LAN NGAJENI</h2>
                {/* <a className="btn-klik" href="#">KLIK DONG</a> */}
                <Button text="KLIK DONG" bgColor="white" width="180px" heigth="45px"/>
              </div>
            </div>
          </div>
        </section>
      {/* AKHIR JUMBOTRON */}

      {/* REALITA */}
        <section className="realita">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="realita-title mb-5 wow fadeInLeft">REALITA</h1>
              </div>
            </div>
            <div className="row">
              {realita("Jumlah Siswa", 895)}
              {realita("Jumlah Siswa", 895)}
              {realita("Jumlah Siswa", 895)}
              {realita("Jumlah Siswa", 895)}
            </div>
          </div>
        </section>
      {/* AKHIR REALITA */}

      {/* EKSPETASI */}
        <section className="ekspetasi row mx-0 wow fadeInLeft">
          <div>
            <div className="container wow fadeInRight">
                <p className="ekspetasi-title">EKSPETASI</p>
            </div>
            <div className="container">
              <div className="ekspetasi-code row wow fadeInLeft">
                <div className="container">
                  <h1>99% CODE</h1>
                  <h1>1% COPY PASTE</h1>
                </div>
              </div>
            </div>
              
            <div className="container wow fadeInUp" style={{ paddingBottom: "50px"}}>
              <p className="ekspetasi-title">DAN LAMPAUI <br/> BATASANMU</p>
            </div>
          </div>
        </section>
      {/* AKHIR EKSPETASI */}

      {/* PLUS ULTRA */}
        <section className="ultra">
          <div className="container">
            <div className="row">
              <div className="title-wrapper">
                <h2>PLUS <br/> ULTRA</h2>
              </div>
            </div>
            <div className="row video">
                <video width="100%" height="100%" controls>
                  <source src={IMAGES.video}/>
                </video>
            </div>
          </div>
        </section>
      {/* AKHIR PLUS ULTRA */}

      {/* KOMENIN */}
      <section className="section-carousel komenin">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="section-carousel-title">KOMENIN HIDUP<br />ORANG KUY</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                  <div className="d-flex">
                    <div className="arrLeftWrapper ">
                      <img className="btn-prev owl-prev" src={IMAGES.arrLeft} alt=""/>
                    </div>
                    <div className="mx-3"></div>
                    <div className="arrRightWrapper">
                      <img className="btn-prev owl-prev" src={IMAGES.arrRight} alt=""/>
                    </div>
                  </div>
              </div>
            </div>
              <div className="row mb-5 carousel mt-4">
                <OwlCarousel
                  options={options}
                >
                <div className="card-wrapper item">
                    <div className="card cardz">
                      <img className="card-img-top" src={IMAGES.fotoKomen} alt=""/>
                      <div className="card-body cardz-body">
                        <div className="d-flex align-items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8401 4.61012C20.3294 4.09912 19.7229 3.69376 19.0555 3.4172C18.388 3.14064 17.6726 2.99829 16.9501 2.99829C16.2276 2.99829 15.5122 3.14064 14.8448 3.4172C14.1773 3.69376 13.5709 4.09912 13.0601 4.61012L12.0001 5.67012L10.9401 4.61012C9.90843 3.57842 8.50915 2.99883 7.05012 2.99883C5.59109 2.99883 4.19181 3.57842 3.16012 4.61012C2.12843 5.64181 1.54883 7.04108 1.54883 8.50012C1.54883 9.95915 2.12843 11.3584 3.16012 12.3901L4.22012 13.4501L12.0001 21.2301L19.7801 13.4501L20.8401 12.3901C21.3511 11.8794 21.7565 11.2729 22.033 10.6055C22.3096 9.93801 22.4519 9.2226 22.4519 8.50012C22.4519 7.77763 22.3096 7.06222 22.033 6.39476C21.7565 5.7273 21.3511 5.12087 20.8401 4.61012V4.61012Z" stroke="#29291E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                          <p className="my-0 ml-2"><b>404 Suka</b></p>
                        <svg className="icon-share" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="#29291E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="#29291E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="#29291E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.58984 13.51L15.4198 17.49" stroke="#29291E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.4098 6.51001L8.58984 10.49" stroke="#29291E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        </div>
                        <p className="mt-2 mb-2">1 minutes ago</p>
                        <h5> <b>Rayhan Rafiud Darojat</b> </h5>
                        <p className="isi">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi veniam incidunt dolorum! Ipsa veritatis beatae doloribus officia, inventore velit.</p>
                      </div>
                    </div>
                </div>
                </OwlCarousel>
              </div>
            <div className="row justify-content-center mt-4">
              <div className="col-lg-3">
                <Button className="justify-content-center d-flex" text="KOMEN SEKARANG GES" width="240px" path="/impression"/>
              </div>
            </div>
          </div>
        </section>

      {/* AKHIR KOMENIN */}

      {/* GURU */}
        <section className="section-carousel guru">
          <div className="container">
            <p className="section-carousel-title guru-title">JANGAN LUPAIN<br />MEREKA YA GAESSS</p>
            <div>
              <div className="carousel">
                
              </div>
              <Button text="INGET SEKARANG DONG" bgColor="white" width="240px" path="/teacher"/>
              <br/> 
            </div>
          </div>
        </section>
      {/* AKHIR GURU */}

      {/* TEMEN*/}
      <section className="temen">
          <div className="temen-title-wrapper">
            <p className="temen-title">APALAGI<br />SAMA KITA<br/>DONG</p>
          </div>
          <div>
            
          </div>
          {/* <Button text="KEPOIN YUK GES" width="240px" path="/student"/> */}
        </section>
      {/* AKHIR TEMEN */}

      {/* OUTRO */}
        <section className="outro">
          <div className="outro-wrapper">
            <div>
              <p>YAUDAH<br/>GITU AJA<br/>SIH</p>
            </div>
          </div>
          <div className="outro-wrapper">
            <div>
              <p>KLIK BUAT<br/>TAU SIAPA<br/>YANG BIKIN</p>
            </div>
          </div>
        </section>
      {/* AKHIR OUTRO */}
    </section>
  )
}

const realita = (title, value) => {
  return (
    <div className="col-lg-3 col-md-6 col-xs-12">
      <div className="content wow fadeInRight">
        <h3>{value}</h3>
        <p className="m-0">{title}</p>
      </div>
    </div>
  )
}

export default Homepage;
