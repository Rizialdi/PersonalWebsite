import React, {Component} from 'react';
import './Carte.css'

class Carte extends Component {
    constructor(){
        super();
        this.state = {
            selectedButton: null,
        }
    }

    render() {
        return (
            <div className = 'carte-content'>
                <div className = 'carte-image'>
                </div>
                <div className = 'carte-description'>
                    <h1>{this.props.titre}</h1>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default Carte;