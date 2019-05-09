import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                Google Books
                    <ul className="navbar-nav">
                      
                        <li className="nav-item">
                            <Link to="/Search"
                            onClick={() => props.handlePageChange("Search")} 
                            className={props.activePage === "Search" ? "nav-link" : "nav-link"}>Search</Link>
                        </li>
                      
                        <li className="nav-item">
                            <Link to="/Saved"
                            onClick={() => props.handlePageChange("Saved")} 
                            className={props.activePage === "Saved" ? "nav-link" : "nav-link"}>Saved</Link>
                        </li>
                    </ul>
               
            </nav>
        );
    }

export default Navbar;