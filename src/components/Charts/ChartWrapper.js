import React, {Component} from 'react';
import { Bar, defaults } from 'react-chartjs-2';
import {data,options} from './chartSetup';
import Loader from './Loader';

const colors=['#D95656','#F58D8D',
            '#8D8989','#91CBEF',
            '#139FF7'];

/* 
* ChartWrapper Component where each chart is created, rendered
* and where all the data is organized
*/

export default class ChartWrapper extends Component {
    constructor(props){
        super(props);
        this.state={
            questions:[],            
            answers:[],
            legendPosition:'right',
            questionTitle:[],
            barThick:20,
            hasLoaded: false,
        }
    }   

    componentDidMount(){
        defaults.global.defaultFontFamily='Acme';
        defaults.global.defaultFontSize=12; 
    
        this.getQuestionsData();

        window.addEventListener('resize', ()=>{
            if(window.innerWidth < 700){
                this.setState({
                    legendPosition:'top',
                    barThick:10,
                })
            }
        })
        window.addEventListener('load', ()=>{
            if(window.innerWidth < 700){
                this.setState({
                    legendPosition:'top',
                    barThick:10,
                })
            }
        })
    }    

    getQuestionsData(){

        const groupData = (arr, key, search) => 
        [...arr.reduce( (acc, currentValue) => 
            acc.set(currentValue[key], 
            (acc.get(currentValue[key]) 
            || []).concat(currentValue[search]))
            , new Map()).values()
        ];

        const surveyReceived = this.props.location.state;
        const [answers1,answers2,answers3,answers4] = 
        surveyReceived.questions.map(elem => elem.answerOptions)
        
        const totalAnswers = (a1,a2,a3,a4)=>{
           return a4 !== undefined 
                    ? [...a1,...a2,...a3,...a4]
                    : [...a1,...a2,...a3]
        }
        const selectedByRespondents = 
        groupData( totalAnswers(answers1,answers2,answers3,answers4),
                    'answerOption', 
                    'selectedByRespondents');

        const answersText = answers1.map((elem => elem.text))
        const questionTitle = surveyReceived.questions.map(question => question.questionTitle);

        this.setState({
            answersValue: selectedByRespondents,
            questionTitle: questionTitle,
            answersText: answersText,
            hasLoaded: true,
        });
    }

    render(){
        return  <div className="container">
                    <div className="row">
                        <h1 className='center'>
                            {this.props.location.state.title}
                        </h1>
                    </div>
                    {this.state.hasLoaded 
                        ?   <div className="row">                    
                                <div className="col s12 m12 l12">
                                    <div className="card">
                                        <div className="card-content graph">
                                            <Bar
                                                key={this.props.location.state.title}
                                                data={
                                                    data(this.state.answersValue,
                                                    this.state.answersText,
                                                    colors, 
                                                    this.state.questionTitle,
                                                    this.state.barThick
                                                    )}
                                                options={options(this.state.legendPosition)}
                                            />
                                        </div>
                                        <div className="card-action">
                                            {this.state.questionTitle.map((title,index)=> 
                                            <div key={index}>{`Q${index+1}:  ${title}`}</div>
                                            )}
                                        </div>
                                    </div>                            
                                </div>
                            </div>                    
                        :
                            <Loader/>
                    }
                </div>
    }
}