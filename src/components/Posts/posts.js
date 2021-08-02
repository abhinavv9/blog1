import React, { useState } from 'react'
import './posts.css'
import TopPosts from '../Sections/topPosts/top';
import LatestPosts from '../Sections/latestPosts/latest';
// import classnames from 'classnames';
import Burger from '../navbar/burger';



function Posts() {


    return (
        <div id="topPosts" className="posts">
            <div className="bg">
                <div className="cat-icon"> <Burger icon="cat" /></div>
                <div> <Burger /> </div>
            </div>
            <div className="latest-post-section">
                <LatestPosts />
            </div>
            {/* <hr
                style={{
                    color: "white",
                    backgroundColor: "white",
                    height: 5,
                    position: "relative",
                    top: "97vh",
                }}
            /> */}
            <div className="top-post-section">
                <TopPosts />
            </div>
        </div>
    )

}


export default Posts