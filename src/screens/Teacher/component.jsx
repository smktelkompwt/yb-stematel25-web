import React from 'react';
import './style.css';

import PhotoList from '../../components/PhotoList'

const Teacher = () => {
  return (
    <div className="teacher-wrapper">
      <h1 className="teacher-title">Guru Guru Kita<br/>Tercintah</h1>
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
