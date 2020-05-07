import React from 'react';
import { Link } from 'react-router-dom';
import contactImage from './../images/contact.png'; 

const GetInTouch = () => {

    return (
        <div className="[ container ]">
            <div className="[ row ] [ myCard ]">
                <div className="[ col-sm-2 ] [ myCard__sidebar ]">
                    <h5 className="[ myCard__sidebar--text ]">Sounds Interesting? </h5>
                </div>
                <div className="[ col-sm-5 ] [ myCard__textbox ]">
                    <h4 className="[ myCard__textbox--heading ]">Thank you for visiting my portfolio</h4>
                    <p className="[ myCard__textbox--text ]">Don't hesitate to contact me if you've any questions. </p>
                    <p className="[ myCard__textbox--text ]">&bull; &nbsp; Email: alexander.sem@icloud.com <br />&bull; &nbsp; Phone: +47 911 03 531</p>
                    <p className="[ myCard__textbox--text ]">Or follow the link below to fill the form and I will get back to you as soon as possible.</p>
                </div>
                <div className="[ col-sm-3 ] [ myCard__image eductionImage ]">
                    <img src={contactImage} alt="education illustration" width="100%" />
                </div>
                <Link className="[ col-sm-4 offset-sm-4 btn ] [ myCard__contactbox--button ]" to="/contact">Get In Touch</Link>
            </div>
        </div>
    )
};

export default GetInTouch;


