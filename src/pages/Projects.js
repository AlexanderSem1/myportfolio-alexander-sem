import React from 'react';
import Portfolio from './../components/portfolio';
import data from './../data/projects.json';
import GetInTouch from './../components/getInTouch'; 

const MyPortfolio = () => {

    return (
        <div className="[ container ]">
            <div className="[ row ]">
                {
                    data.map((value, index) => {
                        return <Portfolio key={index}
                            heading={value.heading}
                            description={value.description}
                            technology={value.technology}
                            websiteURL={value.websiteURL}
                            imageURL={value.imageURL}
                        />
                    })
                }
                <GetInTouch />
            </div>
        </div>

    );
}

export default MyPortfolio;
