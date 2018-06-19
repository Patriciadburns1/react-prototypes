import React, { Component } from 'react';
import Field from "./field"; 

class ContactForm extends Component {
    constructor(props){
        super(props); 
        this.state={
            form:{
                firstName:'',
                lastName:'',
                phone: '',
                email: ''
            }
        }
        this.handleInputChange= this.handleInputChange.bind(this); 
        this.handleSubmit= this.handleSubmit.bind(this); 
        this.reset= this.reset.bind(this); 
    }

    handleInputChange(event){
        const {value, name} = event.target; 
        const{form}= this.state; 
        form[name]= value; 
        this.setState({
           form: {...form},
        })
    }

    handleSubmit(event){
        event.preventDefault(); 
        console.log( "handle Submit function", this.state.form); 
        this.props.add(this.state.form); 
        this.reset(); 
    }

    reset(){
        this.setState({
            form:{
                firstName:'',
                lastName:'',
                phone: '',
                email: ''  
            }
        })
    }

    render(props) {
    const {firstName,lastName, phone, email }= this.state.form; 
        return (
        <form onSubmit={this.handleSubmit}>
            {/* <label> First Name <input name="firstName" onChange={this.handleInputChange}  value={firstName}type="text" className="form-control"/> </label>
            <label> Last Name <input name="lastName"   onChange={this.handleInputChange} value={lastName} type="text" className="form-control"/> </label> */}
            <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange}/>
            <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleInputChange}/>
            <Field name="email" label="Email" type="text" value={email} onChange={this.handleInputChange}/> 
             <Field name="phone" label="Phone" type="text" value={phone} onChange={this.handleInputChange}/>
            <button> Add contact </button> 
            <button type="button" onClick={this.reset} > Clear Form </button> 
        </form>)
    }

}

export default ContactForm; 