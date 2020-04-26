import React from 'react';
import { Link } from 'react-router-dom';

const GetInTouch = () => {

    return (
        <div className="[ container ]">
            <div className="[ row ] [ myCard ]">
                <div className="[ col-sm-2 ] [ myCard__sidebar ]">
                    <h5 className="[ myCard__sidebar--text ]">Intressted? </h5>
                </div>
                <Link className="[ col-sm-4 offset-sm-4 btn ] [ myCard__contactbox--button ]" to="/contact">Get In Touch</Link>
            </div>
        </div>
    )
};

export default GetInTouch;


