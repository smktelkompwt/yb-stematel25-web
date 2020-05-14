import React, { useEffect } from 'react';
import './style.css';
import Button from '../../components/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import WOW from 'wowjs'

const Homepage = () => {

  useEffect(() => {
    // const wow = new WOW.WOW();
    // wow.init()
    new WOW.WOW().init()
  })

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
          <div className="ultra-title-wrapper wow fadeInLeft">
            <p className="ultra-title wow fadeInRight">PLUS<br />ULTRA</p>
          </div>
          
          <div className="row video-section mx-0 wow fadeInDown">
          </div>
        </section>
      {/* AKHIR PLUS ULTRA */}

      {/* KOMENIN */}
        <section className="section-carousel">
          <div className="container">
            <p className="section-carousel-title">KOMENIN HIDUP<br />ORANG KUY</p>
            <div>
              <div className="carousel">
                
              </div>
              <Button text="KOMEN SEKARANG GES" width="240px" path="/impression"/>
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
              <br/>br 
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
