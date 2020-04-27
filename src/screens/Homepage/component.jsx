import React, {Component} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IMAGES from '../../config/images';


class Homepage extends Component{
  render(){
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
              <div className="row text-center mt-5">
                <div className="col">
                  <h2>WATAK APIK LAN NGAJENI</h2>
                  <a className="btn-klik" href="#">KLIK DONG</a>
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
                <div className="col-lg-3">
                  <div className="content">
                    <h3>895</h3>
                    <p className="m-0">Jumlah Siswa</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="content">
                    <h3>895</h3>
                    <p className="m-0">Jumlah Siswa</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="content">
                    <h3>895</h3>
                    <p className="m-0">Jumlah Siswa</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="content">
                    <h3>895</h3>
                    <p className="m-0">Jumlah Siswa</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        {/* AKHIR REALITA */}

        {/* EKSPETASI */}
          <section className="ekspetasi">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1 className="realita-title mb-5">REALITA</h1>
                </div>
              </div>
              <div className="row">
                <div className="col">

                </div>
              </div>
            </div>
          </section>
        {/* AKHIR EKSPETASI */}
      </section>
    )
  }
}

export default Homepage;
