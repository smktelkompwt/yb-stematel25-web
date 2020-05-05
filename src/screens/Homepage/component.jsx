import React from 'react';
import './style.css';
import Button from '../../components/Button'

const Homepage = () => {
  return(
    <section>
      {/* JUMBOTRON */}
        <section className="jumbotronz">
          <div className="container">
            <div className="row justify-content-center text-center">
                <div className="bg-red">
                  <h1>WANI</h1>
                </div>
            </div>
            <div className="row text-center mt-5 homepage-title">
              <div className="col">
                <h2>WATAK APIK LAN NGAJENI</h2>
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
                <h1 className="realita-title mb-5">REALITA</h1>
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
        <section className="ekspetasi">
          <div>
            <div className="container">
              <p className="ekspetasi-title">EKSPETASI</p>
            </div>
              <div className="ekspetasi-code">
                <div className="container">
                  <h1>99% CODE</h1>
                  <h1>1% COPY PASTE</h1>
                </div>
              </div>
            <div className="container">
              <h1>DAN LAMPUI<br/>BATASANMU</h1>
            </div>
          </div>
        </section>
      {/* AKHIR EKSPETASI */}

      {/* PLUS ULTRA */}
        <section className="ultra">
          <div className="ultra-title-wrapper">
            <p className="ultra-title">PLUS<br />ULTRA</p>
          </div>
          <div>
            
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
          <Button text="KEPOIN YUK GES" width="240px" path="/student"/>
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
    <div className="col-lg-3">
      <div className="content">
        <h3>{value}</h3>
        <p className="m-0">{title}</p>
      </div>
    </div>
  )
}

export default Homepage;
