import './Feed.css'
import Post from "./Post"

export default function Feed() {

    return (
            <div className='feed'>
                <div className='feed-row'>
                    <Post/>
                </div>
                <div className='feed-row'>
                    <Post/>
                </div>
            </div>
    )
}