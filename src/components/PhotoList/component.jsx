import React from 'react'
import './style.css'

const PhotoList = () => {
    return(
        <div className="photoList-wrapper">
            <div className="photoList-detail">
                <div>
                    <p className="photoList-detail-title">Abid Gans</p>
                    <p className="photoList-detail-desc">Guru Dota Indonesia</p>
                    <p className="photoList-detail-desc">Apapun yang terjadi kita semua always the best</p>
                </div>
            </div>
            <img className="photoList-image" src={require("../../assets/img/foto-siswa.png")} alt=""/>
        </div>
    )
}

export default PhotoList