
import React from 'react'; 
import { Route } from 'react-router-dom'; 
import Welcome from './welcome';
import Nav from './nav'; 
import OurMacarons from './our_macarons'; 
import GiftParties from './gift_parties'; 

const App  = ()=>{
    return(
        <div className="container"> 
        <Nav/> 
        <Route path="/" component={Welcome}/> 
        <Route path="/our-macarons" component={OurMacarons}/>
        <Route path='/gift-parties' component={GiftParties}/> 
        </div> 
    )
}

export default App; 