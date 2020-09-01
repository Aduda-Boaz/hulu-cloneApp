import React from 'react';
import "./VideoCard.css";

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            <img src="https://images.app.goo.gl/LQFNRQg6ofTo7V8f6" alt="" />
            <p>Info on the movie</p>
            <h2>Movie title</h2>
            <p>More of movie likes</p>
        </div>
    )
}

export default VideoCard
