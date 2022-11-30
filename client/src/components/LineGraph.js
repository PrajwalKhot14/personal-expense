import React from "react";
import { Line } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js';
import Labels from './Labels';
// import Linefunc from './LineChart';
import {line_chart_Data} from '../helper/helper';
import {default as api} from '../store/apiSlice';

Chart.register(ArcElement);

const labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July']
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

export default function LineGraph(){
    const {data, isFetching, isSuccess, isError} = api.useGetLabelsQuery()
    let graphData;
    // for (var key in data){
    //     console.log(data[key]['amount'])
    // }
    // console.log(data)
    // const {data1, isFetching1, isSuccess1, isError1} = api.useGetLabelsQuery();
    
    if(isFetching){
        graphData = <div>Fetching</div>
    }
    else if(isSuccess){
        graphData = <Line {...line_chart_Data(data)}></Line>;
        // Transactions = getLabels(data, 'type').map((v, i) => <LabelComponent key={i} data = {v}></LabelComponent>)
    }
    else if(isError){
        graphData = <div>Error</div>
    }

    return(
        <div className="">
                    {graphData}
                
        </div>
    )
}