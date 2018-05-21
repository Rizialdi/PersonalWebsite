import React from 'react';
import './List_menu_item.css';

var ListMenuItem = (props) => {
    return (
        <div className = 'list_menu_item'
             onClick = {props.onClicker}
             style = {props.selectedMenuItem === props.item.nom ? {color : 'red'} : null}>
            <div><img src={props.item.lien} alt={props.item.description}/></div>
            <li>{props.item.nom}</li>
        </div>
    )
}

export default ListMenuItem;