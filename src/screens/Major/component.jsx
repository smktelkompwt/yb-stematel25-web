import React,{Component} from 'react';
import './style.css';
import IMAGES from '../../config/images';

class Major extends Component{
  render(){
    return(
      <section>
        {/* NAV JURUSA */}
        <section className="nav-jurusan">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 pr-0">
                <div className="content text-center">
                  <p>Jurusan RPL</p>
                </div>
              </div>
              <div className="col-lg-4 px-0">
                <div className="content text-center">
                  <p>Jurusan TKJ</p>
                </div>
              </div>
              <div className="col-lg-4 pl-0">
                <div className="content text-center">
                  <p>Jurusan TJA</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* NAV JURUSAM */}
        <section className="jumbotronz">
            <img className="img-fluid" src={IMAGES.fotoJurusanJumbotron} alt=""/>
        </section>
        {/* DAFTAR SISWA */}
        <section className="daftar-siswa mt-5 mb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="d-flex align-items-center">
                  <h5 className="my-0 mr-4">Kelas</h5>
                  <select class="custom-select">
                    <option selected>pilih kelas</option>
                    <option value="1">XII RPL 1</option>
                    <option value="2">XII RPL 2</option>
                    <option value="3">XII RPL 3</option>
                    <option value="4">XII RPL 4</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row mt-5 justify-content-between">
              <div className="col-lg-4">
                <div className="d-flex align-items-center">
                  <img src={IMAGES.fotoSiswa} alt=""/>
                  <div className="biodata ml-3">
                    <div className="wrapper mb-3">
                      <p className="mb-2">Nama</p>
                      <h5>Rizal Gradianto</h5>
                    </div>
                    <div className="wrapper mb-3">
                      <p className="mb-2">TTL</p>
                      <h5>Purwokerto, 7 Januari 2002</h5>
                    </div>
                    <div className="wrapper mb-3">
                      <p className="mb-2">Alamat</p>
                      <h5>Perum Selabaya Indah, Purbalingga</h5>
                    </div>
                    <div className="wrapper">
                      <p className="mb-2">Social Media</p>
                      <h5>@gradiannn</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex align-items-center">
                  <img src={IMAGES.fotoSiswa} alt=""/>
                  <div className="biodata ml-3">
                    <div className="wrapper mb-3">
                      <p className="mb-2">Nama</p>
                      <h5>Rizal Gradianto</h5>
                    </div>
                    <div className="wrapper mb-3">
                      <p className="mb-2">TTL</p>
                      <h5>Purwokerto, 7 Januari 2002</h5>
                    </div>
                    <div className="wrapper mb-3">
                      <p className="mb-2">Alamat</p>
                      <h5>Perum Selabaya Indah, Purbalingga</h5>
                    </div>
                    <div className="wrapper">
                      <p className="mb-2">Social Media</p>
                      <h5>@gradiannn</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex align-items-center">
                  <img src={IMAGES.fotoSiswa} alt=""/>
                  <div className="biodata ml-3">
                    <div className="wrapper mb-3">
                      <p className="mb-2">Nama</p>
                      <h5>Rizal Gradianto</h5>
                    </div>
                    <div className="wrapper mb-3">
                      <p className="mb-2">TTL</p>
                      <h5>Purwokerto, 7 Januari 2002</h5>
                    </div>
                    <div className="wrapper mb-3">
                      <p className="mb-2">Alamat</p>
                      <h5>Perum Selabaya Indah, Purbalingga</h5>
                    </div>
                    <div className="wrapper">
                      <p className="mb-2">Social Media</p>
                      <h5>@gradiannn</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* AKHIR DAFTAR SISWA */}
      </section>
    )
  }
}

export default Major;
