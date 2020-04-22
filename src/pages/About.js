import React from 'react';
import Introduction from './../components/introduction';
import Education from './../components/education';
import WorkExperience from './../components/workExperience'; 

const About = () => {

    return (
        <div className="[ container ]">
            <div className="[ row ]">
                <Introduction />
                <Education />
                <WorkExperience />
            </div>
        </div>

    );
}

export default About;
