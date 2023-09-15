import logo from './assets/taxi.jpg';
import './Post.css'

export default function Post(){
    return(
        <div className='post'>
            <div className='post-container'>
                <img src={logo} className="logo">
                </img>
                <button className="button">
                    Mostrar
                </button>
            </div>
        </div>
    )
}