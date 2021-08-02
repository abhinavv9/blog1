import { NikeCard } from '../../card/card';
import React from 'react'
import './latest.css'

const latest = () => {

    function SeeAll() {
        console.log("See All")
    }

    return (
        <div className="bg-latest">
            <div className="post-header">
                <h2><span>LATEST</span> POSTS</h2>
            </div>
            <div className="horizontal-line"></div>
            <div className="button-div">
                <button className="browse-all-btn" onClick={SeeAll}>See All</button>
            </div>
            <div className="card-div">
                <NikeCard className="card-comp" />
                <NikeCard className="card-comp" />
                <NikeCard className="card-comp" />
                <NikeCard className="card-comp" />
            </div>
        </div>
    )
}

export default latest
