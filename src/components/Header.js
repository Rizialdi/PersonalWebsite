import React, {Component} from 'react';
import ListMenuItem from './List_menu_item'
import './Header.css';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            selectedMenuItem: null,
        }
    }

    handlerClick = (item) => {
        this.setState(() => {
            return {
                selectedMenuItem: item,
            }
        });
        console.log('click sur ' + item)
    }

    render () {
        let avatar = 'https://avatars2.githubusercontent.com/u/18710740?s=400&u=c11853b720d3288d376a3103cf5c8bb82c37fc13&v=4';
        
        let menu = [{
            nom: 'Acceuil',
            lien: "http://www.free-icons-download.net/images/house-home-icon-70046.png", 
            description: "icone_acceuil"
        },
        {
            nom: 'Curriculum',
            lien: "https://cdn0.iconfinder.com/data/icons/teamwork-9/64/x-23-256.png", 
            description: "icone_curriculum"
        },
        {
            nom: 'Posts',
            lien: "https://cdn3.iconfinder.com/data/icons/seo-glyph-vol-1/64/seo-glyph-1-12-3-512.png", 
            description: "icone_posts"
        },
        {
            nom: 'Contacts',
            lien: "https://cdn2.iconfinder.com/data/icons/mail-dan-contact/64/Mail_and_Contact-03-512.png", 
            description: "icone_conctacts"
        }]
        
        let list_menu = menu.map((item) => {
            return (
                <ListMenuItem 
                    onClicker = {this.handlerClick.bind(this, item.nom)} 
                    className='list_menu_item' key = {item.nom} 
                    item = {item} 
                    selectedMenuItem = {this.state.selectedMenuItem} />
            )
        })
        
        return (
            <div className='header'>
            <img src={avatar} alt="avatar"/>
            <ul>
                {list_menu}
            </ul>
            </div>
        )
    }
}

export default Header;