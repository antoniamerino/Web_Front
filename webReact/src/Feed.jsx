import { useState } from 'react';

export default function Feed() {

    const [name, setName] = useState(null)

    function handleChange( name ) {
        setName(name)
    }

    return (
            <>
            <h2>Mi primer componente</h2>
            <input
                onChange={(e) => handleChange(e.target.value)}
            />
            <p>Hola {name}</p>
            </>
    )
}