import React from 'react'
import Sidebar from '../components/Sidebar'
import Stories from '../components/Stories'
import NewPost from '../components/NewPost'
import Posts from '../components/Posts'
import Messenger from '../components/Messenger'

const Home = () => {
    return (
        <div className='container-fluid px-0'>
            <div className='row mx-0 mt-5'>
                <div className='col-xl-3 col-lg-3 sidebar'>
                    <Sidebar />
                </div>
                <div className='col-xl-6 col-lg-7 col-md-9 col-sm-11 mx-auto px-xl-5'>
                    <Stories />
                    <NewPost />
                    <Posts />
                </div>
                <div className='col-xl-3 col-lg-3 messenger'>
                    <Messenger />
                </div>
            </div>
        </div>
    )
}

export default Home