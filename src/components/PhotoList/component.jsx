import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const PhotoList = (props) => {
    const { data } = props

    const checkPath = (path) => {
        try {
            return require(`../../data${path}`)
        } catch (err) {
            return require('../../assets/img/no-image.png')
        }
    };

    return(
        <Link className="photoList-wrapper" to={{
            pathname: '/student-detail',
            state: data
        }}>
            <div className="photoList-detail">
                <div>
                    <p className="photoList-detail-title">{data.name ? data.name : ''}</p>
                    <p className="photoList-detail-desc">@{data.instagram ? data.instagram : ''}</p>
                    <p className="photoList-detail-desc">{data.comment ? data.comment : ''}</p>
                </div>
            </div>
            <img className="photoList-image" src={checkPath(data.image)} alt=""/>
        </Link>
    )
}

export default PhotoList