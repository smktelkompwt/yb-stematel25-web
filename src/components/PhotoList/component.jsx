import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const PhotoList = (props) => {
    const { data } = props
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
            <img className="photoList-image" src={data.image ? data.image : require('../../assets/img/no-image.png')} alt=""/>
        </Link>
    )
}

export default PhotoList