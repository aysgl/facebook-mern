import React from 'react'
import storiesData from '../data/stories'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import IconPlus from './Icons/IconPlus'

const Stories = () => {
    const option = {
        perPage: 4,
        autoplay: false,
        interval: 8000,
        pagination: false,
        drag: 'free',
        perMove: 1,
        lazyLoad: 'nearby',
        margin: '10px'
    }
    return (
        <div className='my-4'>
            <Splide aria-label="My Favorite Images" options={option}>
                <SplideSlide>
                    <div className='story p-1'>
                        <img className='img-fluid story-img' src='https://scontent.fsaw2-2.fna.fbcdn.net/v/t39.30808-1/244081837_10159808776148559_4464614354752744286_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=5740b7&_nc_ohc=J3Uvo3OJdMAAX9MfA8i&_nc_ht=scontent.fsaw2-2.fna&oh=00_AfAJ-_Y0Ays0Crnra_ik-YsSwPuO28uqh5aL020jScuuQg&oe=65927491' />
                        <div className='story-new'>
                            <a href='#.' className='plus'>
                                <IconPlus />
                            </a>
                            <span className='mb-2 mt-2'>
                                Hikaye Oluştur
                            </span>
                        </div>
                    </div>
                </SplideSlide>
                {storiesData.map(story =>
                    <SplideSlide>
                        <div className='story p-1'>
                            <div className='username'>
                                <img className='username-img' src={story.img} />
                                <p className='username-title mb-2'>{story.name}</p>
                            </div>
                            <img className='img-fluid story-img' src={story.story} />
                        </div>
                    </SplideSlide>
                )}
            </Splide>
        </div>
    )
}

export default Stories