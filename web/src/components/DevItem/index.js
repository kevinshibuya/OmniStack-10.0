import React from 'react';
import logo from './remove-icon.svg'

import './style.css';

function DevItem({ dev, handleDeleteDev }) {
    async function handleSubmit() {
        handleDeleteDev(dev._id);
    }
    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
                <img src={logo} onClick={handleSubmit} alt='Delete Button'></img>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
        </li>
    );
}

export default DevItem;