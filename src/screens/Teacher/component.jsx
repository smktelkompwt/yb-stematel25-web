import React from 'react';
import './style.css';
import students from '../../data/siswa.json'
import PhotoList from '../../components/PhotoList'

const Teacher = () => {
  return (
    <div className="teacher">
      <h1 className="teacher-title">GURU GURU KITA<br/>TERCINTAH</h1>
      <div className="teacher-photo-list">
        {
          students.filter(student => student.class === "XII RPL 1").map((rpl1, key) => (
            <PhotoList data={rpl1} key={key} />
          ))
        }
      </div>
    </div>
  );
}

export default Teacher;
