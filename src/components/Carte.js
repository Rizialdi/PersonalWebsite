import React, {Component} from 'react';
import './Carte.css'
import { Link } from 'react-router-dom'

class Carte extends Component {
    constructor(){
        super();
        this.state = {
            selectedButton: null,
        }
    }

    render() {
        return (
            <Link to = {this.props.adresse} className = 'carte-content'>
                <div style={{backgroundImage: `url(${this.props.image})`}} className = 'carte-image'>
                </div>
                <div className = 'carte-description'>
                    <h1>{this.props.titre}</h1>
                    <p>{this.props.description}</p>
                </div>
            </Link>
        )
    }
}

export default Carte;