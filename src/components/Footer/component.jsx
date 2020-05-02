import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3">
            <h1>Stematel25</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          <div className="col-lg-2">
            <h1>Navigation</h1>
            <ul>
              <li>
                <p>Jurusan</p>
                <p>Kesan Pesan</p>
                <p>Guru</p>
                <p>About</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h1>Location</h1>
            <ul>
              <li>
                <p>Jalan D.I Pandjaitan 
                    Nomor 20
                    Purwokerto,Indonesia
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h1>Contact</h1>
            <ul>
              <li>
                <p>stematel@gmail.com</p>
              </li>
              <li>
                <p>018180180180</p>
              </li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
    </footer>
  );
}

export default Footer;
