import React from 'react';
import ReactDOM from 'react-dom';

const userObject={
    name: "Elvis",
    luckyNumber: luckyNumber()
}

ReactDOM.render(
    greeting(userObject),
    document.getElementById('root')
);

function luckyNumber(){
 var randomNumber= Math.floor(Math.random()*1000);
 return randomNumber; 
}

function greeting(props){
    return <div className="container"> <h1> What is your lucky Number?</h1> <h2 className="text-muted"> {props.luckyNumber} </h2> </div>; 
}

