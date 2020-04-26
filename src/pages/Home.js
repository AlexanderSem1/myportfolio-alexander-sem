import React from 'react';
import Introduction from './../components/introduction';
import ShowcasePortfolio from './../components/showcasePortfolio'; 

const HomePage = () => {

    return (
        <div className="[ container ]">
            <div className="[ row ]">
                <Introduction
                    showBtn={true}
                />
                <ShowcasePortfolio
                    showBtn2={true}
                />
            </div>
        </div>

    );
}

export default HomePage;
