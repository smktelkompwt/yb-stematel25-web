import React, { Component, useState, useEffect } from 'react'
import { Form, FormGroup, Input } from 'reactstrap'
import './style.css'
import IMAGES from '../../config/images.js'
import Button from '../../components/Button'
import PesanKesan from '../../components/PesanKesan'
import firebase from 'firebase'

const Impression = () => {

  const [data, setData] = useState([]);

  const firebaseConfig = {
    apiKey: "AIzaSyANeDhtG8IwdQ5pj8YN_UfSFbgywxIynwQ",
    authDomain: "yb-stematel25.firebaseapp.com",
    databaseURL: "https://yb-stematel25.firebaseio.com",
    projectId: "yb-stematel25",
    storageBucket: "yb-stematel25.appspot.com",
    messagingSenderId: "645018167819",
    appId: "1:645018167819:web:f01b615d26f225d224f50e",
    measurementId: "G-7NB4GCCMT8"
  };

  useEffect( async() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.firestore();
    await db.collection('comment').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        let items = doc.data();
        data.push(items)
        setData(data)
      })
    });

    console.log(data)
  });

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
        {data.map((item, key) => {
          return(
            <>
            <h1>{item.username}</h1>
            <div key={key}>
              <PesanKesan image={IMAGES.fotoKesanPesan} like={item.like} time={item.timestamp} user={item.username} desc={item.desc} />
            </div>
            </>
          )
      })}
      </div>
      <button className="impression-btn-more">Load More</button>
    </div>
  )
}
// class Impression extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoading: false
//     }
//   }
 
// }

export default Impression
