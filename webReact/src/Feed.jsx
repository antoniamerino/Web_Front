import './feed.css'
import Post from "./Post"
import taxi from './assets/taxi.jpg';
import profe from './assets/profe.jpg';
import limpieza from './assets/limpieza.jpg';
import payaso from './assets/payaso.jpg';

export default function Feed() {
    const posts = [
        {id:0, imgSrc: taxi, postName: 'Ofrezco transporte'},
        {id:1, imgSrc: profe, postName: 'Necesito profesora'},
        {id:2, imgSrc: limpieza, postName: 'Ofrezco limpieza'},
        {id:3, imgSrc: payaso, postName: 'Necesito payaso'},
    ]

    return(
    
        <div className='feed'>
            {/* Barra estética de nueva publicación */}
            <div className="new-post-bar">
                <div className="new-post-input">
                <textarea
                    placeholder="Título"
                    rows="1"
                ></textarea>
                <textarea
                    placeholder="¿Qué necesitas o puedes ofrecer?"
                    rows="2"
                ></textarea>
                </div>
                <div className="new-post-options">
                <div className="option">
                    <span>Agregar Imagen</span>
                </div>
                <div className="option">
                    <span>Necesito Servicio</span>
                </div>
                <div className="option">
                    <span>Ofrezco Servicio</span>
                </div>
                </div>
                <div className="new-post-button">Publicar</div>
            </div>

            {/* Lista de publicaciones */}
            <div className='feed-row'>
                {posts.map(post=> (
                    <Post key={post.id} imgSrc={post.imgSrc} postName={post.postName} />
                ))}
            </div>
        </div>
    )
}