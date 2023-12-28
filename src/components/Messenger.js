import React from 'react'
import friendsData from '../data/friends'
import IconSearch from './Icons/IconSearch'
import IconDots from './Icons/IconDots'

const Messenger = () => {
    return (
        <div className='mt-3'>
            <div className='h6 d-flex justify-content-between align-items-center me-3 ms-2'>
                Kişiler
                <div>
                    <button className='btn btn-dark'>
                        <IconSearch />
                    </button>

                    <button className='btn btn-dark'>
                        <IconDots />
                    </button>
                </div>
            </div>
            <ul className='list-group'>
                {friendsData.map(friend =>
                    <li className='list-group-item'>
                        <img className='rounded-pill' src={friend.img} />
                        <span className='ms-2'>{friend.fullname}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Messenger