import React from 'react';
import educationImage from './../images/education.png';

const Knowledge = () => {

    return (
        <div className="[ container ]">
            <div className="[ row ] [ myCard ]">
                <div className="[ col-sm-3 ] [ myCard__sidebar ]">
                    <h5 className="[ myCard__sidebar--text ]">Knowledge Domain</h5>
                </div>
                <div className="[ col-sm-4 ] [ myCard__image eductionImage ]">
                    <img src={educationImage} alt="education illustration" width="100%" />
                </div>
                <div className="[ col-sm-4 ] [ myCard__textbox ]">
                    <h4 className="[ myCard__textbox--text ]">Industrial Economics - Bc.Sc.</h4>
                    <p className="[ myCard__textbox--text ]">Royal Institute of Technology - KTH<br />Graduated: January 2000<br />Stockholm, Sweden</p>
                    <h4 className="[ myCard__textbox--text ]">Front-end Design & Development</h4>
                    <p className="[ myCard__textbox--text ]">Noroff School of Media & Technology<br />Graduated: June 2020<br />Oslo, Norway </p>
                </div>
            </div>
        </div>
    )
};

export default Knowledge;
