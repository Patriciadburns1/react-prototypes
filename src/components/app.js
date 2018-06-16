import React from 'react';
import Table from './table'; 

const students =[ 
    {
    name: "Aaron",
    course: "Math", 
    grade: 100
    },
    {
    name: "Jake",
    course: "ballet", 
    grade: 70
    },
    {
    name: "Lori", 
    course: "science", 
    grade: 87
    }
]; 

export default () => {
    return <div className="container"> 
    <h1> Student Grade Table </h1> 
    <Table data={students}/>
    </div>; 
}

