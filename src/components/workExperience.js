import React from 'react';
import experienceImage from './../images/experience.png';

const WorkExperience = () => {

    return (
        <div className="[ container ]">
            <div className="[ row ] [ myCard ]">
                <div className="[ col-sm-2 ] [ myCard__sidebar ]">
                    <h5 className="[ myCard__sidebar--text ]">Work Experience</h5>
                </div>
                <div className="[ col-sm-4 ] [ myCard__image eductionImage ]">
                    <img src={experienceImage} alt="education illustration" width="100%" />
                </div>
                <div className="[ col-sm-5 ] [ myCard__textbox ]">
                    <h4 className="[ myCard__textbox--text ]">Vewd Software AS</h4>
                    <p className="[ myCard__textbox--text ]">Marketing Director<br />May 2014 - August 2019<br />Oslo, Norway</p>
                    <h4 className="[ myCard__textbox--text ]">Ericsson AB</h4>
                    <p className="[ myCard__textbox--text ]">B2B Portfolio Marketing Director<br />January 2000 - April 2014<br />Stockholm, Sweden</p>
                </div>
            </div>
        </div>
    )
};

export default WorkExperience;
