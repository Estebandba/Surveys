import React, {Component} from 'react';
import Axios from 'axios';
import Survey from './Survey';
import Loader from './Charts/Loader';
/* 
* Dashboard Component where the API is called and 
* the data is distributed to each Survey Component
*/

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            surveys: {},
            pictures:['Brexit', 'globalWarming', 'US_election'],
            hasLoaded: false,
        }
    }

    componentDidMount () {
        this.getSurveys();
    }

    getSurveys () {
        Axios.get('https://my-json-server.typicode.com/focaldata/demo/db')
        .then((res) => {
            this.setState({
                surveys:res.data.surveys,
                hasLoaded: true,            
        })
    })
    .catch((error) => {
        console.log(error);
    })
}
    render(){
        return  <div className="Dashboard" data-test='dashboard-component'>
                    <div className="container">
                        <div className="row">
                                <div className="col s12 m12">
                                    {this.state.hasLoaded ?                                
                                        <Survey
                                        key={this.state.pictures}
                                        survey={this.state.surveys} 
                                        pictures={this.state.pictures}/>                                
                                    :
                                        <Loader/>
                                    }
                                </div>
                            </div>
                        </div>
                </div>
    }
}