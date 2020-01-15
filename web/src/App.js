import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem/index';
import DevForm from './components/DevForm/index';

// Components: block isolado de HTML, CSS e JS, no qual não interfere no resto da aplicação.
// State: Informações mantidas pelo componente (Lembrar: IMUTABILIDADE!).
// Props: Informações que um componente pai passa para o componente filho.

function App() {
    const [devs, setDevs] = useState([])

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('/devs');

            setDevs(response.data);
        }

        loadDevs();
    }, []);

    async function handleAddDev(data) {
        const response = await api.post('/devs', data);

        setDevs([...devs, response.data]);
    };

    async function handleDeleteDev(dev) {
        await api.delete(`/devs/delete/${dev}`);

        const response = await api.get('devs');

        setDevs(response.data)
    }

    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <DevForm onSubmit={handleAddDev} />
            </aside>
            <main>
                <ul>
                    {devs.map(dev => (
                        <DevItem key={dev._id} dev={dev} handleDeleteDev={handleDeleteDev} />
                    ))}
                </ul>
            </main>
        </div>
    )
}

export default App;
