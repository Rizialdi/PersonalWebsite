import React from 'react';
import './Contacts.css';
import '../App.css';
import Header from './Header';
import PageTitle from './PageTitle';

const Posts = (props) => {
    return (
        <div className = "App Contacts">
            <Header className="header" />
            <PageTitle active_item = "Contacts" className = 'pageTitle'/>
            <div className = 'corps-page'>
                Je reste disponible pour toute informations complementaires
                sur <a href = "mailto:rasselio.diack@gmail.com">Gmail</a>
            </div>
        </div>
    )
}

export default  Posts;
