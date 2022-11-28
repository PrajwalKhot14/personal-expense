import React from "react";
import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js';
import Labels from './Labels';
// import Linefunc from './LineChart';
import {chart_Data} from '../helper/helper';
import {default as api} from '../store/apiSlice';

Chart.register(ArcElement);

const config = {
    data: {
        datasets: [{
            data: [35,45,20],
            backgroundColor: [
                'rgb(255, 205, 86)',
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
            ],
            hoverOffset: 4,
            borderRadius: 30,
            spacing: 10
          }]
    },
    options:{
        cutout: 115
    }
}

export default function Graph(){
    const {data, isFetching, isSuccess, isError} = api.useGetLabelsQuery()
    let graphData;
    // const {data1, isFetching1, isSuccess1, isError1} = api.useGetLabelsQuery();
    
    if(isFetching){
        graphData = <div>Fetching</div>
    }
    else if(isSuccess){
        chart_Data(data)
        // Transactions = getLabels(data, 'type').map((v, i) => <LabelComponent key={i} data = {v}></LabelComponent>)
    }
    else if(isError){
        graphData = <div>Error</div>
    }

    return(
        <div className="flex justify-content max-w-xs mx-auto">
            <div className="item">
                <div className="chart relative">
                    
                    <Doughnut {...config}></Doughnut>
                    {/* <h3 className="mb-4 font-bold title">Total
                        <span className="block text-3xl text-emerald-400">${0}</span>
                    </h3> */}
                    <div className="flex flex-col py-10 gap-4">
                    {/* Labels */}
                    <Labels></Labels>
                    </div>
                </div>
                
            </div>
        </div>
    )
}