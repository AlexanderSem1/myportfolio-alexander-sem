import React from 'react';
import myPicture from './../images/myPicture.png'; 

const Introduction = ({ readMore }) => {

    return (
        <div className="[ container ]">
            <div className="[ row ] [ myCard ]">
                <div className="[ col-sm-2 ] [ myCard__sidebar ]">
                    <h5 className="[ myCard__sidebar--text ]">Introduction</h5>
                </div>
                <div className="[ col-sm-5 ] [ myCard__textbox ]">
                    <h1 className="[ myCard__textbox--heading ]">I am Alexander</h1>
                    <p className="[ myCard__textbox--text ]">&bull; &nbsp; Over 15 years B2B2C marketing experience <br />&bull; &nbsp; Front-end designer & developer</p>
                    <p className="[ myCard__textbox--text ]">&bull; &nbsp;<i className="[ far fa-envelope ] [ myCard__textbox--text ]">&nbsp;&nbsp;</i>alexander.sem@icloud.com <br />&bull; &nbsp;<i className="[ fas fa-mobile-alt ] [ myCard__textbox--text ]">&nbsp;&nbsp;</i>+47 911 03 531</p>
                </div>
                <div className="[ col-sm-4 ] [ myCard__image ]">
                    <img src={myPicture} alt="alexander profile" width="100%" />
                </div>
                <button className="[ btn col-sm-4 offset-sm-4 ] [ myCard__contactbox--button ]">Read More</button>
            </div>
        </div>
    )
};

export default Introduction;


