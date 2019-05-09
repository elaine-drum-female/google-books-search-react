import React from "react";

export function BookDetail ({ children }) {
    return <ul className="list-group">
    {children}
    <li></li> 
    </ul>;
}

export function BookResults(props) {
    return (
    <li>
        <div>
            <img src={props.image} alt={props.image}/>
            <h3>{props.title}</h3>
            <h3>{props.author}</h3>
            <p>{props.description}</p>
            <a href={props.link}>{props.link}</a>
            <button onClick={() => 
                props.handleClick(props.info)}>{props.buttonText}</button>
            
        </div>
    </li>
       
    );
}

