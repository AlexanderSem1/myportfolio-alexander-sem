import React from 'react';

const Portfolio = ({ heading, description, technology, websiteURL, imageURL }) => {

    return (
        <div className="[ container ]">
            <div className="[ myCard ] [ row ]">
                <div className="[ col-sm-10 offset-1 ] [ myCard__heading ]">
                    <h5 className="[ myCard__heading ]">{heading}</h5>
                </div>
                <div className="[ col-sm-5 offset-1 ] [ myCard__textContainer ]">
                    <p className="[ myCard__textContainer--text ]">Description: {description}</p>
                    <p className="[ myCard__textContainer--text ]">Technology: {technology}</p>
                    <a className="[ btn ] [ myCard__contactbox--button ]" href={websiteURL} target="_blank" rel="noopener noreferrer" >Visit the Website</a>
                </div>
                <div className="[ col-sm-5 ] [ myCard__imageContainer ]">
                    <img src={imageURL} alt="United Nation Student Association Website" width="100%" />
                </div>
            </div>
        </div>
    )
};

export default Portfolio;

