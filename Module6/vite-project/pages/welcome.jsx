import React from 'react'
import '../src/App.css'

export default function Welcome(props) { // custom Welcome component

    console.log(props.children);
    const divStyle = { background: 'lightblue', padding: '1em', fontWeight: 'bold' };

    return (
        <div className="componentBox">
        <div style={divStyle}>Welcome {props.name}!</div>
        {/* if this component has children, render them here */}
        {props.children}
        </div>
    )
}