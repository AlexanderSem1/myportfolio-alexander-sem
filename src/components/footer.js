import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../images/Logo_grey.png'; 

const Footer = () => {

    return (
        <div className="[ container ]">
            <Link className="[ navbar-brand col-sm-2 offset-sm-5 ] [ logo__footer ]" ><img src={Logo} alt="Alexander Sem Borrmann logo" to="/" /></Link>
                <div className="[ row  navbar navbar-expand-sm navbar-dark ] [ footer ]">
                <ul className="[ col-sm-12 ] [ footer__socialLinks ]">
                        <a className="[  nav-link ] [ fab fa-twitter ]" href="https://twitter.com/alex_sem75"> </a>
                        <a className="[ nav-link ] [ fab fa-linkedin-in ]" href="https://www.linkedin.com/in/alexander-sem-52013ab/"> </a>
                        <a className="[ nav-link ] [ fab fa-skype ]" href="https://join.skype.com/invite/h3tUthGEVsfo"> </a>
                    </ul>
                </div>
            <div className="[ footer ]">
                <ul className="[ navbar-nav col-sm-12 ] [ footer ]">
                        <p className="[ nav-link col-sm-12  ] [ footer__text ] ">All Rights Reserved. &copy; 2020. <br />Designed & Developed by: Alexander Sem Borrmann.</p>
                    </ul>
                </div>
        </div>
    )
};

export default Footer;  