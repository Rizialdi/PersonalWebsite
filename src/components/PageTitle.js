import React from 'react';
import './PageTitle.css';

var PageTitle = (props) => {
    return (
        <div className='pageTitle'>
            <h1>{props.active_item}</h1>
        </div>
    )
}

export default PageTitle;