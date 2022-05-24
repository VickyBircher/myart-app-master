import { useEffect, useState } from 'react';
import axios from 'axios';

import Imagen from './components/Imagen';
import Description from './components/Description';
import './App.css';
import Boton from './components/Boton';
import InputUser from './components/InputUser';

function App() {
    const publication = 
    {
        url: "https://i.imgur.com/3ZNfQJW.jpeg",
        user: "sa",
        description: "ddd"
    }

    const [usuarios, setUsuarios] = useState([]);

    useEffect(async() => {
        const res = await axios.get("localhost:5000/api/usuarios");
        setUsuarios(res.data)
    }, [])

    return (
        <>
            <div className="container-fluid" >
                <div className="text-center-center">
                    <Imagen url={publication.url} />
                    <Description description={publication.description} />
                    <Boton />
                    <InputUser/>

                    {
                        usuarios.map(usuario => (
                            <div>
                                <p>{ usuario.nombre }</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default App;
