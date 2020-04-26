import React from 'react';
import showcasePortfolioImage from './../images/showcase_portfolio.png';
import Button from './../components/button';

const ShowcasePortfolio = ({ showBtn, showBtn2 }) => {

    return (
        <div className="[ container ]">
            <div className="[ row ] [ myCard ]">
                <div className="[ col-sm-2 ] [ myCard__sidebar ]">
                    <h5 className="[ myCard__sidebar--text ]">My Portfolio</h5>
                </div>
                <div className="[ col-sm-4 ] [ myCard__textbox ]">
                    <h4 className="[ myCard__textbox--heading ]">Selection of my work</h4>
                    <p className="[ myCard__textbox--text ]">Selection of my work during my studies at Noroff School of Media & Technology</p>
                    <p className="[ myCard__textbox--text ]">Check out the full work in my Portfolio and get in touch if you're looking for Frontend Designer & Developer.</p>
                </div>
                <div className="[ col-sm-5 ] [ myCard__showcaseImage ]">
                    <img src={showcasePortfolioImage} alt="alexander profile" width="100%" />
                </div>
                <Button btnText2={'Find out More'} showBtn2={showBtn2} />

            </div>
        </div>
    )
};

export default ShowcasePortfolio;


