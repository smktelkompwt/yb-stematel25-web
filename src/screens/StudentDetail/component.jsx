import React from 'react';
import Button from '../../components/Button'
import './style.css';

const StudentDetail = (props) => {
  const data = props.location.state
  const studentData = JSON.parse(localStorage.getItem('studentData'))

  const checkPath = (path) => {
    try {
        return require(`../../data${path}`)
    } catch (err) {
        return require('../../assets/img/no-image.png')
    }
  };

  return (
    <div className="student-detail">
      <div style={{marginBottom: 20}}>
        <p className="student-detail-class">{data ? data.class : 'XII RPL'}</p>/{data ? data.name : studentData.name}
      </div>
      <img src={data ? checkPath(data.image) : checkPath(studentData.image)} alt=""/>
      <div>
        {biodata('Nama Lengkap', data ? data.name : studentData.name)}
        {biodata('Kelas', data ? data.class : studentData.class)}
        {biodata('Alamat', data ? data.address : studentData.address)}
        {biodata('No HP', data ? data.phone : studentData.phone)}
        {biodata('Instagram', data ? data.instagram : studentData.instagram)}
        {biodata('Pesan', data ? data.comment : studentData.comment)}
      </div>
      <div className="student-detail-call">
        <Button text='Hubungi Diaa' width="100%" exPath={data ? `https://instagram.com/${data.instagram}` : `https://instagram.com/${studentData.instagram}`}/>
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
