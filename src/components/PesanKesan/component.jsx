import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import IMAGES from '../../config/images'
import './style.css'

const PesanKesan = (props) => {
    const url = window.location.href
    return(
        <div className="pesanKesan-wrapper">
            {
                props.image ? <img className="pesanKesan-img" src={props.image} alt="Pesan Kesan"/> : null
            }
            <div className="pesan-wrapper">
                <div className="pesanKesan-action-wrapper">
                    <div className="love-wrapper">
                        <img className="pesanKesan-pointer" src={ props.love ? IMAGES.heartActive : IMAGES.heart} alt=""/>
                        <p className="pesanKesan-suka">{props.like}</p>
                    </div>
                    <CopyToClipboard text={url}>
                        <img className="pesanKesan-pointer" src={IMAGES.share} alt=""/>
                    </CopyToClipboard>
                </div>
                <p className="pesanKesan-waktu">{props.time}</p>
                <p className="pesanKesan-akun">{props.user}</p>
                <p className="pesanKesan-isiPesan">{props.desc}</p>
            </div>
        </div>
    )
}

export default PesanKesan
