import React from 'react'
import sidebarData from "../data/sidebar"

const Sidebar = () => {
    return (
        <ul className='list-group mt-3'>
            {sidebarData.map(item =>
                <a href='#.' className='list-group-item d-flex align-items-cente border-0'>
                    <i className='me-2 rounded-pill' style={{ backgroundImage: `url(${item.img})`, backgroundPosition: item.position, backgroundSize: item.name === "Kan Bağışları" ? "911px 306px" : "cover", width: "28px", height: "28px", backgroundRepeat: "no-repeat", display: "inline-block" }}></i>
                    {item.name}
                </a>
            )}
        </ul>
    )
}

export default Sidebar