import React from 'react';
import './Posts.css';
import '../App.css';
import Header from './Header';
import PageTitle from './PageTitle';
import Carte from './Carte'
import preload from '../dummy.json'

const Posts = (props) => {
    let cartes = preload.cartes.map((carte) => <Carte titre = {carte.titre} 
                                                        key = {carte.titre}
                                                        description = {carte.description}
                                                        image = {carte.image}
                                                        adresse = {`/posts/${carte.titre}/`.replace(' ', '-')} />)

    return (
        <div className = "App Posts">
            <Header className="header" />
            <PageTitle active_item = "Posts" className = 'pageTitle'/>
            <div className = 'corps-page'>
                {cartes}
            </div>
        </div>
    )
}

export default  Posts;
