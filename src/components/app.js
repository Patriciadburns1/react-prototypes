import React, {Component} from 'react';
import Light from './light';

class App extends Component{
    constructor(props){
        super(props);
        this.colors = ['red','white','green','yellow','blue'];
        this.state = {
            lights : ['red','blue','green','red', 'red']
        }
        this.handleChildClick = this.handleChildClick.bind(this);
    }
    getRandomLightColor(){
        const randomIndex = Math.floor(Math.random()*this.colors.length);
        return this.colors[randomIndex];
    }
    handleChildClick(childIndexThatWasClicked){
        console.log('child was clicked '+ childIndexThatWasClicked);
        const newLights = [...this.state.lights];
        newLights[ childIndexThatWasClicked ] = this.getRandomLightColor();
        this.setState( { 
            lights: newLights
        })

    }
    render(){
        return <div>
            {
                this.state.lights.map( (item, index) => <Light parentClickHandler={this.handleChildClick} myIndex={index} color={item} key={index}/> )
                //this.state.lights.map( function(item, index){ return <Light key={index}/>; })
            }
        </div>
    }
    

}

export default App;