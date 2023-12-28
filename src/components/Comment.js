import React from 'react'
import Avatars from './Icons/IconAvatars'
import IconSmile from './Icons/IconSmile'
import IconPhoto from './Icons/IconPhoto'
import IconGif from './Icons/IconGif'
import IconSticker from './Icons/IconSticker'
import IconSend from './Icons/IconSend'

const Comment = () => {
    return (
        <div className='d-flex mx-3 border-top py-3'>
            <img className='rounded-pill me-2'
                style={{ width: "40px", height: "40px" }}
                src="https://scontent.fsaw2-2.fna.fbcdn.net/v/t39.30808-1/244081837_10159808776148559_4464614354752744286_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=107&ccb=1-7&_nc_sid=5740b7&_nc_ohc=J3Uvo3OJdMAAX9MfA8i&_nc_ht=scontent.fsaw2-2.fna&oh=00_AfBRhp7eohE-9Txd5x86mrdFnjvbhOAwGBWVVpsoXDHIxQ&oe=65927491"
            />
            <div className='list-wrapper w-100'>
                <textarea className='form-control rounded-4 border-0' rows="3" placeholder='Yorum yaz...' />
                <ul className="list-group list-group-horizontal w-100">
                    <li className='list-group-item'>
                        <div aria-label="Bir Avatar Çıkartması ile Yorum Yap" role="button" tabindex="0">
                            <Avatars />
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <div aria-label="Bir ifade simgesi ekle" role="button" tabindex="0">
                            <IconSmile />
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <div aria-label="Bir fotoğraf veya video ekle" role="button" tabindex="0">
                            <IconPhoto />
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <div aria-label="Bir GIF ile Yorum Yap" role="button" tabindex="0">
                            <IconGif />
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <div aria-label="Bir Çıkartmayla Yorum Yap" role="button" tabindex="0">
                            <IconSticker />
                        </div>
                    </li>
                    <li className='list-group-item ms-auto me-2'>
                        <IconSend />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Comment