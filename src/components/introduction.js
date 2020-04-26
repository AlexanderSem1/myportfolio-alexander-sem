import React from 'react';
import myPicture from './../images/myPicture.png';
import Button from './../components/button';

const Introduction = ({ showBtn, showBtn2 }) => {

    return (
        <div className="[ container ]">
            <div className="[ row ] [ myCard ]">
                <div className="[ col-sm-3 ] [ myCard__sidebar ]">
                    <h5 className="[ myCard__sidebar--text ]">Introduction</h5>
                </div>
                <div className="[ col-sm-4 ] [ myCard__textbox ]">
                    <h1 className="[ myCard__textbox--heading ]">I AM Alexander</h1>
                    <p className="[ myCard__textbox--text ]">&bull; &nbsp; Over 15 years B2B2C marketing experience <br />&bull; &nbsp; Frontend designer & developer</p>
                    <p className="[ myCard__textbox--text ]">&bull; &nbsp; Email: alexander.sem@icloud.com <br />&bull; &nbsp; Phone: +47 911 03 531</p>
                </div>
                <div className="[ col-sm-4 ] [ myCard__image ]">
                    <img src={myPicture} alt="alexander profile" width="100%" />
                </div>
                <Button btnText={'Read More'} showBtn={showBtn} />
            </div>
        </div>
    )
};

export default Introduction;


