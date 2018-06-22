import React from 'react'; 

export default (props) => {
const{info}= props; 
console.log("movie info", props.info); 
    return (
        <div> 
        <div> <img src={info['im:image'][2].label}/> 
            <h3>
                <p> {info['im:name'].label} </p>
            </h3> 
            <p> {info['summary'].label} </p>
            </div> 
        </div>
    )
}