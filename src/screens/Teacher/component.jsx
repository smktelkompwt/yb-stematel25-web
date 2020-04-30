import React from 'react';
import './style.css';

import PhotoList from '../../components/PhotoList'

const Teacher = () => {
  return (
    <div className="teacher">
      <h1 className="teacher-title">GURU GURU KITA<br/>TERCINTAH</h1>
      <div className="teacher-photo-list">
        <PhotoList />
        <PhotoList />
        <PhotoList />
        <PhotoList />
        <PhotoList />
        <PhotoList />
        <PhotoList />
        <PhotoList />
      </div>
    </div>
  );
}

export default Teacher;
