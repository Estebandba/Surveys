/* 
* chartSetup contains the methods that feed and configure the charts
*/


const data = (answersValue,answersText,colors,questionTitle, barThick)=> { 
    return {
    labels: questionTitle.map((_,i) => `Q${i+1}`),
    datasets: answersValue.map((elem,i)=>{
        return {
            label: answersText[i],
            data: answersValue[i],
            backgroundColor: colors[i],
            barThickness: barThick,
            maxBarThickness: 20,
            minBarThickness:1,  
    }})   
}}

const options= (legendPosition)=> {
    return{
    maintainAspectRatio: false,    
    legend:{
      display:true,
      position:legendPosition,
    },
    scales:{
        yAxes: [{
            ticks: {
                beginAtZero: true
            },
            scaleLabel: {
                display: true,
                labelString: 'Selected by respondents',
                fontColor:'Black',
                fontSize: 12,
            }
        }]
    }    
  }
}

export {data,options};