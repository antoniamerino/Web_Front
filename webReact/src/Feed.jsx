import './Feed.css'
import Post from "./Post"
import taxi from './assets/taxi.jpg';
import profe from './assets/profe.jpg';

export default function Feed() {
    const posts = [
        {id:1, imgSrc: taxi},
        {id:2, imgSrc: profe},
        {id:3, imgSrc: ""},
    ]

    return(
    
        <div className='feed'>
            <div className='feed-row'>
                {posts.map(post=> (
                    <Post key={post.id} imgSrc={post.imgSrc} />
                ))}
            </div>
        </div>
    )
}