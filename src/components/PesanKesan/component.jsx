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
                        <p className="pesanKesan-suka">404 Suka</p>
                    </div>
                    <CopyToClipboard text={url}>
                        <img className="pesanKesan-pointer" src={IMAGES.share} alt=""/>
                    </CopyToClipboard>
                </div>
                <p className="pesanKesan-waktu">1 Minutes ago</p>
                <p className="pesanKesan-akun">Rayhan Rafiud Darojat</p>
                <p className="pesanKesan-isiPesan">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit expedita enim atque! Odio aut blanditiis distinctio voluptates incidunt recusandae harum provident, labore delectus suscipit quaerat. Dolore rerum odio at temporibus.</p>
            </div>
        </div>
    )
}

export default PesanKesan
