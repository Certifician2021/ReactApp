import React from 'react'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import './Videos.css'

function VideoCard({thumbnail, channel, views, timestamp, title}) {
    return (
        <div className="videoCard">
            <img style={{height: "150px",width:"250px"}} src={thumbnail} title="Mern Stack" />
            <div className="videoCard__info">
            <AccountBoxIcon className="Avatar" />
            <div className="video__text">
                <h4><a href="">{title}</a></h4>
                <p>{channel}</p>
                <p>{views}</p>
                <p>{timestamp}</p>
            </div>
            </div>
        </div>
    )
}

export default VideoCard

