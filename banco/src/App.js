import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Auth from './components/Auth/auth';

import Router from './routers';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
        <Header />
        <Router />
    </BrowserRouter>
  )
}


