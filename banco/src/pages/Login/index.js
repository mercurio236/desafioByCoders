import React from "react";
import Auth from "../../components/Auth/auth";
import './login.css';

export default function Login() {
    return (
        <div className="containerLogin">
            <h1>Acessar a Aplicação</h1>
            <Auth />
        </div>
    )
}