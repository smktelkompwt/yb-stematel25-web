import React from 'react';
import Button from '../../components/Button'
import './style.css';

const StudentDetail = (props) => {
  const data = props.location.state
  console.log(data)
  return (
    <div className="student-detail">
      <div style={{marginBottom: 20}}>
        <p className="student-detail-class">{data ? data.class : 'XII RPL'}</p>/{data ? data.name : ''}
      </div>
      <img src={data ? require(`${data.image}`) : require('../../assets/img/no-image.png')} alt=""/>
      <div>
        {biodata('Nama Lengkap', data ? data.name : '')}
        {biodata('Kelas', data ? data.class : '')}
        {biodata('Alamat', data ? data.address : '')}
        {biodata('No HP', data ? data.phone : '')}
        {biodata('Instagram', data ? data.instagram : '')}
        {biodata('Pesan', data ? data.comment : '')}
      </div>
      <div className="student-detail-call">
        <Button text='Hubungi Diaa' width="100%"/>
      </div>
    </div>
  );
}

const biodata = (title, value) => {
  return (
    <div className="student-detail-biodata">
      <p className="student-detail-biodata-title">{title}</p>
      <p>{title === 'Instagram' ? `@${value}` : value}</p>
    </div>
  )
}

export default StudentDetail;
