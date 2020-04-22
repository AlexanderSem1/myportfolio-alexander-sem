import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <nav className="[ row navbar navbar-expand-sm navbar-dark ] [ myNavigation ]">
            <ul className="[ col-sm-10 navbar-nav ] [ myNavigation__itemContainer ]">
                <Link className="[ nav-link ]" to="/">Home</Link>
                <Link className="[ nav-link ]" to="/about">About Me</Link>
                <Link className="[ nav-link ]" to="/projects">My Projects</Link>
               <Link className="[ nav-link ]" to="/contact">Contact</Link>
            </ul>
            <div className="[ cold-sm-2 nav justify-content-end ]">
                <ul className="[ nav justify-content-end ] [ socialLinks ]">
                    <a className="[  nav-link ] [ fab fa-twitter ]" href="https://twitter.com/alex_sem75"> </a>
                    <a className="[ nav-link ] [ fab fa-linkedin-in ]" href="https://www.linkedin.com/in/alexander-sem-52013ab/"> </a>
                    <a className="[ nav-link ] [ fab fa-skype ]" href="https://join.skype.com/invite/h3tUthGEVsfo"> </a>
                </ul>
            </div>
        </nav>
    )
};

export default Navigation;
