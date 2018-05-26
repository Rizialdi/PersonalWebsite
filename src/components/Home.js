import React from 'react';
import './Home.css';
import '../App.css';
import Header from './Header';
import PageTitle from './PageTitle';

const Home = (props) => {
    return (
        <div className = "App Home">
            <Header className="header" />
            <PageTitle active_item = "Acceuil" className = 'pageTitle'/>
            <div className = 'corps-page'></div>
        </div>
    )
}

export default  Home;
