import React from 'react';
import './Home.css';
import '../App.css';
import Header from './Header';
import PageTitle from './PageTitle';

const Curriculum = (props) => {
    return (
        <div className = "App Curriculum">
            <Header className="header" />
            <PageTitle active_item = "Curriculum" className = 'pageTitle'/>
            <div className = 'corps-page'>
                I studied a lot
            </div>
        </div>
    )
}

export default  Curriculum;
