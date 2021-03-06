import React from 'react';
import knowledgeImage from './../images/knowledge.png';

const Knowledge = () => {

    return (
        <div className="[ container ]">
            <div className="[ row ] [ myCard ]">
                <div className="[ col-sm-3 ] [ myCard__sidebar ]">
                    <h5 className="[ myCard__sidebar--text ]">Knowledge Domain</h5>
                </div>
                <div className="[ col-sm-3 ] [ myCard__image eductionImage ]">
                    <img src={knowledgeImage} alt="education illustration" width="100%" />
                </div>
                <div className="[ col-sm-5 ] [ myCard__textbox ]">
                    <h4 className="[ myCard__textbox--heading  ]">Design</h4>
                    <p className="[ myCard__textbox--text ]">&bull; &nbsp; Photoshop, Illustrator and XD<br />&bull; &nbsp; Website and Logo design</p>
                    <h4 className="[ myCard__textbox--heading  ]">Technical</h4>
                    <p className="[ myCard__textbox--text ]">&bull; &nbsp; HTML Framework - Bootstrap<br />&bull; &nbsp; CSS Frameworks - SASS, Stylus and BEM<br />&bull; &nbsp; Javascript Framework - React & Vue<br />&bull; &nbsp; Headless CMS - Strapi<br />&bull; &nbsp; Workflow skills - Scrum master, Life cycle management and Agile </p>
                </div>
            </div>
        </div>
    )
};

export default Knowledge;
