import React, { useState, useEffect, useMemo } from 'react'
import { Form, FormGroup, Input } from 'reactstrap'
import './style.css'
import IMAGES from '../../config/images.js'
import Button from '../../components/Button'
import PesanKesan from '../../components/PesanKesan'
import firebase from 'firebase'

const Impression = () => {

  const [data, setData] = useState([])

  const firebaseConfig = useMemo(() => ({
    apiKey: "AIzaSyANeDhtG8IwdQ5pj8YN_UfSFbgywxIynwQ",
    authDomain: "yb-stematel25.firebaseapp.com",
    databaseURL: "https://yb-stematel25.firebaseio.com",
    projectId: "yb-stematel25",
    storageBucket: "yb-stematel25.appspot.com",
    messagingSenderId: "645018167819",
    appId: "1:645018167819:web:f01b615d26f225d224f50e",
    measurementId: "G-7NB4GCCMT8"
  }), []);

  useEffect( () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.firestore().collection('comment').get().then((snapshot) => {
      const items = snapshot.docs.map(doc => doc.data())
      setData(items)
    });

    return db
  }, [firebaseConfig, setData]);

  const getTime = (timestamp) => {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const date = new Date(timestamp.seconds * 1000)
    const year = date.getFullYear()
    const month = months[date.getMonth()]
    const day = date.getDate()

    return day + ' ' + month + ' ' + year
  }
  
  
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
          data.map((item, key) => (
              <div key={key}>
                <h1>{item.username}</h1>
                <div>
                  <PesanKesan image={IMAGES.fotoKesanPesan} time={getTime(item.timestamp)} like={item.like} user={item.username} desc={item.desc} />
                </div>
              </div>
            )
          )
        }
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
