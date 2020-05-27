import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'

const SiswaList = (props) => {
    const { data } = props

    const checkPath = (path) => {
        try {
            return require(`../../data${path}`)
        } catch (err) {
            return require('../../assets/img/no-image.png')
        }
    };

    // const storeDataStudent = (data) => {
    //     localStorage.setItem('studentData', JSON.stringify(data))
    // }

    return(
        <div>
            <img className="card-img-top" src={checkPath(data.image)} alt=""/>
        </div>
    )
}

export default SiswaList