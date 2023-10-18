import './post.css'
import React, { useState } from 'react';

export default function Post({imgSrc, postName}){
    const [likes, setLikes] = useState(0);
    
    const handleLikeClick = () => {
        setLikes(likes + 1);
        if (likes >= 1 ){
            setLikes(0);
        } else {
            setLikes(1);
        }
      };
    return(
        <div className='post'>
            <div className='post-container'>
                <p className='post-name'>{postName}</p>
                <img src={imgSrc} className='logo' alt='Imagen' />
                <button className="button">
                    Más Información
                </button>
                <button className='button' onClick={handleLikeClick}>
                  Me gusta
                </button>
                <p><div className="kolor">{likes} Like </div></p>
            </div>
        </div>
    )
}