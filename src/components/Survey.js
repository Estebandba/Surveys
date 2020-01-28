import React from 'react';
import {withRouter} from 'react-router-dom';

/* 
* Survey Component where each survey is rendered 
* and where the routing happens
*/

 const routeChange = (survey, props) =>{
    const path = '/chart/';
    props.history.push(path + survey.title, survey);
}


const Survey = (props) => {    

    return props.survey.map((survey, index) => {
        return <div className="survey" key={index} data-test="survey-component">
                    <div className="col s12 m4">                    
                        <div className="card hoverable" onClick={()=>(routeChange(survey, props))}>
                            <div className="card-image">
                                <img src={require(`../images/${props.pictures[index]}.jpg`)} alt="survey"/>
                                <span className="card-title">{survey.title}</span>
                            </div>                                                
                            <div className="card-action center lighten-4">
                                <span>View</span>
                            </div>
                        </div>
                    </div>
                </div>
        })

}

export default withRouter(Survey);