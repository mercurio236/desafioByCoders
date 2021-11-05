import React from 'react';
import './header.css';

let link = 'https://www.bycoders.com.br/static/media/logo_bycoders_.e8adf476.svg'

export default function Header() {
    return (
        <div className="container">
            <div className="logo" >
                <img src={link} width="150px" height="60px" />
            </div>
        </div>
    )
}