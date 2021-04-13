import React from 'react';
import './Sidebar.css';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';


function Sidebar() {
    return (
        <div className="sidebar">
            <span className="span"><DoubleArrowIcon />Cities</span>
            <ul>
                <li>New York</li>
                <li>London</li>
                <hr />
                <li>Moscow</li>
                <li>New Delhi</li>
                <hr />
                <li>Paris</li>
                <li>Turkey</li>
              
            </ul>
            <hr />
        </div>
    )
}

export default Sidebar
