import React, { Component } from 'react'
import { Form, FormGroup, Input } from 'reactstrap'
import './style.css'
import IMAGES from '../../config/images.js'
import Button from '../../components/Button'
import PesanKesan from '../../components/PesanKesan'

class Impression extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false
    }
  }
  render() {
    return (
      <div className="impression">
        <h1 className="impression-title">TULIS SURAT CINTA <br/> KALIAN DISINI</h1>
        <div className="impression-input">
          <Form>
            <FormGroup>
              <Input type="text" placeholder="Posting pesan dan kesan kamu selama sekolah"/>
            </FormGroup>
          </Form>
          <Button text="POSTING SEKARANG GAES" bgColor="black" width="240px" heigth="45px"/>
        </div>
        <div className="impression-content">
          {
            this.state.isLoading ?
            <div className="impression-loading-wrapper">
              <div className="impression-content-loading">Loading . . .</div>
              <div className="impression-more-loading"></div>
            </div>
            :
            <div>
              <PesanKesan image={IMAGES.fotoKesanPesan} />
              <PesanKesan image={IMAGES.fotoKesanPesan} love />
              <PesanKesan love />
            </div>
          }
        </div>
        <button className="impression-btn-more">Load More</button>
      </div>
    );
  }
}

export default Impression
