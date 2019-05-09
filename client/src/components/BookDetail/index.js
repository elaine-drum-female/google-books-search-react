import React from "react";

export function BookDetail ({ children }) {
    return <ul className="list-group">
    {children}
    <li></li> 
    </ul>;
}

