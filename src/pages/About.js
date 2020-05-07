import React from 'react';
import Introduction from './../components/introduction';
import Education from './../components/education';
import WorkExperience from './../components/workExperience';
import GetInTouch from './../components/getInTouch'; 
import Knowledge from './../components/knowledge'; 

const About = () => {
    return (
        <div className="[ container ]">
            <div className="[ row ]">
                <Knowledge />
                <Education />
                <Introduction showBtn={false} />
                <WorkExperience />
                <GetInTouch />
            </div>
        </div>

    );
}

export default About;
