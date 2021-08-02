import { NikeCard } from '../../card/card';
import React from 'react'
import './top.css'

const topPosts = () => {

    function SeeAll() {
        console.log("See All")
    }

    return (
        <div>
            <div className="top-div">
                <h2><span>TOP</span> POSTS</h2>
            </div>
            <div className="button">
                <button className="browse-all-btn" onClick={SeeAll}>See All</button>
            </div>
            <div className="line"></div>
            <div className="bottom-div">
                <NikeCard className="card-comp" />
                <NikeCard className="card-comp" />
                <NikeCard className="card-comp" />
                <NikeCard className="card-comp" />
            </div>
        </div>
    )
}

export default topPosts
