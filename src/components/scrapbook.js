import React from 'react';
import './scrapbook.css'; 
import imageData from './image_data';
import ScrapbookImage from './scrapbook_image';
import Bush from "./images/Bush.jpg";

export default props => {
    return (
        <div className="scrapbook-container">
        <img src={Bush}/> 
        <ScrapbookImage about={imageData[0]}/>
        </div> 
    )
}