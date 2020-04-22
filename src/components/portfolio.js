import React from 'react';
import educationImage from './../images/education.png';

const Portfolio = () => {

    return (
        <div className="[ container ]">
            <div className="[ row ] [ myCard ]">
                <h2 className="[ col-sm-12 ] [ myCard__heading ]">Selection of my work</h2>
            </div>
            <div id="" className="[ myCard ] [ row ]">
                <div className="[ col-sm-12 ] [ myCard__heading ]">
                    <h5 className="[ myCard__heading ]">My first project</h5>
                </div>
                <div className="[ col-sm-4 offset-1 ] [ myCard__textContainer ]">
                    <p className="[ myCard__textContainer--text ]">Website for a Bike renting company</p>
                    <p className="[ myCard__textContainer--text ]">Based on Only HTML and CSS</p>
                </div>
                <div className="[ col-sm-4 offset-sm-2 ] [ myCard__imageContainer ]">
                    <img src={educationImage} alt="education illustration" width="100%" />
                </div>
            </div>
        </div>
    )
};

export default Portfolio;
