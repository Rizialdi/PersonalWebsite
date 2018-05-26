import React from 'react';
import './Posts.css';
import '../App.css';
import Header from './Header';
import PageTitle from './PageTitle';
import Carte from './Carte'

const Posts = (props) => {
    return (
        <div className = "App Posts">
            <Header className="header" />
            <PageTitle active_item = "Posts" className = 'pageTitle'/>
            <div className = 'corps-page'>
                <Carte titre = 'bilo' description = 'Lorem  ipsum' adresse = '/' />
                <Carte titre = 'bilo' description = 'Lorem  karibou' adresse = '/' />
                <Carte titre = 'bilo' description = 'Lorem  karibou' adresse = '/' />
                <Carte titre = 'bilo' description = 'Lorem  karibou' adresse = '/' />
                <Carte titre = 'bilo' description = 'Lorem  karibou'  adresse = '/'/>
                <Carte titre = 'bilo' description = 'Lorem  karibou'  adresse = '/'/>
                <Carte titre = 'bilo' description = 'Lorem  karibou'  adresse = '/'/>
            </div>
        </div>
    )
}

export default  Posts;
