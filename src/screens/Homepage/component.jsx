import React, {Component} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IMAGES from '../../config/images';


class Homepage extends Component{
  render(){
    return(
      <section>
        <div className="row m-0">
            <video width="100%" controls className="p-0 video">
              <source width="100%" height="auto" src={IMAGES.jumbotronVideo} type="video/mp4"/> 
            </video>
        </div>
        {/* AKHIR VIDEO */}

        {/* JURUSAN */}
        <div className="row justify-content-center title-jurusan">
          <h1>Jurusan</h1>
        </div>
              {/* TJA */}
        <section className="tja">
          <div className="container">
            <div className="row m-0">
                <div className="col-lg-7 col-md-8 col-9">
                    <img className="img-fluid" src={IMAGES.fotoJurusan} alt=""/>
                </div>
            </div>
              <div className="row fun-fact tja">
                  <div className="col-lg-7 col-md-8 col-9 offset-3 offset-lg-5 offset-md-4">
                    <div className="funFact-wrapper">
                      <div className="text-center">
                        <h2>#FunFact TJA</h2>
                      </div>
                      <ul>
                        <li>
                          Kalau satu anak bikin kesalahan, semua anak ikut dihukum
                        </li>
                        <li>
                          Nyambung Fiber optik yang putus lancar. Tapi buat nyambungin hubungan sama dia selalu gagal
                        </li>
                        <li>
                          Jurusan paling fanatik dan anak-anaknya yang selalu bareng kemana-mana
                        </li>
                      </ul>
                        <img className="red-dots img-fluid" src={IMAGES.redDots} alt=""/>
                    </div>
                  </div>
              </div>
          </div>
        </section>
              {/* AKHIR TJA */}
              {/* RPL */}
        <section className="rpl">
          <div className="container">
            <div className="row foto-rpl">
              <div className="col-lg-7 col-md-8 offset-lg-5 offset-md-4 col-9 offset-3">
                  <img className="img-fluid" src={IMAGES.fotoJurusan} alt=""/>
              </div>
            </div>
            <div className="row fun-fact rpl">
                <div className="col-lg-7 col-md-8 col-10">
                  <div className="funFact-wrapper">
                    <div className="text-center">
                      <h2>#FunFact RPL</h2>
                    </div>
                    <ul>
                      <li>
                      Jurusan dengan kelas dan siswa terbanyak
                      </li>
                      <li>
                      Jurusan yang siswanya selalu disibukan dengan berbagai deadline sehingga tidak ada waktu untuk cari gebetan. Jadi ga heran kalo jurusan ini dianggap paling banyak jomblonya
                      </li>
                      <li>
                      Jurusan yang sering menyumbangkan juara untuk stematel seperti LKS, Web Design, Hackathon, Mobile Apps, dll. Kalo ga percaya bisa cek banner di sekitar sekolah :D
                      </li>
                    </ul>
                    <img className="green-dots" src={IMAGES.greenDots} alt=""/>
                  </div>
                </div>
            </div>
          </div>
        </section>
              {/* AKHIR RPL */}
               {/* TKJ */}
        <section className="tkj">
        <div className="container">
          <div className="row m-0">
              <div className="col-lg-7 col-md-8 col-9">
                  <img className="img-fluid" src={IMAGES.fotoJurusan} alt=""/>
              </div>
          </div>
            <div className="row fun-fact tja">
                <div className="col-lg-7 col-md-8 offset-lg-5 offset-md-4 col-9 offset-3">
                  <div className="funFact-wrapper">
                    <div className="text-center">
                      <h2>#FunFact TJA</h2>
                    </div>
                    <ul>
                      <li>
                        Kalau satu anak bikin kesalahan, semua anak ikut dihukum
                      </li>
                      <li>
                        Nyambung Fiber optik yang putus lancar. Tapi buat nyambungin hubungan sama dia selalu gagal
                      </li>
                      <li>
                        Jurusan paling fanatik dan anak-anaknya yang selalu bareng kemana-mana
                      </li>
                    </ul>
                      <img className="red-dots img-fluid" src={IMAGES.blueDots} alt=""/>
                  </div>
                </div>
            </div>
        </div>
      </section>
              {/* AKHIR TKJ */}
        <hr/>

        {/* SISWA */}
        <section className="siswa">
          <div className="container">
            <div className="row justify-content-center">
              <h1>Siswa</h1>
            </div>
            <div className="row caption-wrapper">
                <div className="col-lg-5 col-5 px-0">
                    <img className="img-fluid" src={IMAGES.siswa} alt=""/>
                </div>
                <div className="col-lg-7 col-7 px-0 tulisan">
                  <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. “ </p>
                  <h2>Rizal Gradianto</h2>
                  <p className="kelas">Siswa RPL 25</p>
                </div>
            </div>
          </div>  
        </section>
        {/*AKHIR SISWA */}
      </section>
    )
  }
}

export default Homepage;
