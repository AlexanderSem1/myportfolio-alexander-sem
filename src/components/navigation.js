import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../images/Logo_grey.png'; 

const Navigation = () => {

    return (
        <nav className="[ row navbar navbar-expand-sm navbar-dark ] [ myNavigation ]">
            <ul className="[ col-sm-8 navbar-nav ] [ myNavigation__itemContainer ]">
                <Link className="[ navbar-brand ] [ myNavigation__logo ]" ><img src={Logo} alt="Alexander Sem Borrmann logo" to="/" /></Link>
                <Link className="[ nav-link ] [ myNavigation__link ]" to="/">Home</Link>
                <Link className="[ nav-link ] [ myNavigation__link ]" to="/about">About</Link>
                <Link className="[ nav-link ] [ myNavigation__link ]" to="/projects">Projects</Link>
                <Link className="[ nav-link ] [ myNavigation__link ]" to="/contact">Contact</Link>
            </ul>
            <ul className="[ socialLinks ] [ col-sm-4 nav justify-content-end ]">
                <a className="[  nav-link ] [ fab fa-twitter ]" href="https://twitter.com/alex_sem75"> </a>
                <a className="[ nav-link ] [ fab fa-linkedin-in ]" href="https://www.linkedin.com/in/alexander-sem-52013ab/"> </a>
                <a className="[ nav-link ] [ fab fa-skype ]" href="https://join.skype.com/invite/h3tUthGEVsfo"> </a>
            </ul>

        </nav>
    )
};

export default Navigation;
