import React from 'react'
import IconLiked from './Icons/IconLiked'
import IconHeart from './Icons/IconHeart'
import IconHaha from './Icons/IconHaha'
import IconLovely from './Icons/IconLovely'
import IconSurprise from './Icons/IconSurprise'
import IconSadly from './Icons/IconSadly'
import IconAngry from './Icons/IconAngry'

const Emotions = ({ count, emotion }) => {
    return (
        <div className='emotion'>
            {emotion === "liked" &&
                <IconLiked />
            }
            {emotion === "heart" &&
                <IconHeart />
            }
            {emotion === "haha" &&
                <IconHaha />
            }
            {emotion === "lovely" &&
                <IconLovely />
            }
            {emotion === "surprise" &&
                <IconSurprise />
            }
            {emotion === "sadly" &&
                <IconSadly />
            }
            {emotion === "angry" &&
                <IconAngry />
            }
            <span className='small'> {count}</span>
        </div>
    )
}

export default Emotions