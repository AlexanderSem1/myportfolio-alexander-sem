import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ btnText, showBtn, btnText2, showBtn2 }) => {

    return (
        <div className="[ btn col-sm-4 offset-sm-4 ]">
            {
                showBtn && <Link className="[ myCard__contactbox--button btn ]" to="/about">{btnText}</Link>
            }
            {
                showBtn2 && <Link className="[ myCard__contactbox--button btn ]" to="/projects">{btnText2}</Link>
            }
        </div>
    )
};

export default Button;


