import React from 'react';
import './light.css';

const Light = (props)=>{
    return <div onClick={ ()=> {props.parentClickHandler(props.myIndex)} } className='light' style={{ backgroundColor: props.color}}>{props.myIndex + ' ' + props.color}</div>
}


// const Light = (props)=>{
//     return <div>light</div>
// }

// const Light = function(props){
//     return <div>light</div>
// }

export default Light;