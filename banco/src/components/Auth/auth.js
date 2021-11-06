import React from 'react';
import Login from 'react-simple-oauth2-login';
import './auth.css'

const onSuccess = response => alert(response);
async function onFailure(){
    window.location.replace('http://localhost:3000/home')
} 

export default function Auth(){
    let login = 'https://github.com/login/oauth/authorize'
    let redirect = 'http://localhost:3000/home'
    let client = "5668dfc1b16919ab5ba6"
    let token = "87fafa97172721e8a06b457c70a73546a511a0ea"

   
    return(
        <Login
        authorizationUrl={login}
        responseType={token}
        clientId={client}
        redirectUri={redirect}
        onSuccess={onSuccess}
        onFailure={onFailure}
        buttonText="Acessar"
        className="btnLogin"
        />
    )
}