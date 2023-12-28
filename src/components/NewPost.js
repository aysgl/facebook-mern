import React from 'react'
import Avatar from './Avatar'

const NewPost = () => {
    return (
        <div className='bg-dark p-3 rounded mb-3'>
            <div className='d-flex border-bottom pb-3'>
                <Avatar size={"40px"} url={"https://scontent.fsaw2-2.fna.fbcdn.net/v/t39.30808-1/244081837_10159808776148559_4464614354752744286_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=107&ccb=1-7&_nc_sid=5740b7&_nc_ohc=J3Uvo3OJdMAAX9MfA8i&_nc_ht=scontent.fsaw2-2.fna&oh=00_AfBRhp7eohE-9Txd5x86mrdFnjvbhOAwGBWVVpsoXDHIxQ&oe=65927491"} className={"me-2"} />
                <input className='form-control rounded-pill border-0' placeholder='Ne düşünüyorsun, Aysegul
                ?'/>
            </div>
            <div className='mt-2 text-center d-flex justify-content-between'>
                <button className='btn btn-secondary w-100'>
                    <img height="24" width="24" alt="" class="me-2" src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/epGAMnVkMsy.png" />
                    Canlı video
                </button>
                <button className='btn btn-secondary w-100'>
                    <img height="24" width="24" alt="" class="me-2" src="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/74AG-EvEtBm.png" />
                    Fotoğraf/video
                </button>
                <button className='btn btn-secondary w-100'>
                    <img height="24" width="24" alt="" class="me-2" src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/_RWOIsUgWGL.png" />
                    His/hareket
                </button>
            </div>
        </div>
    )
}

export default NewPost