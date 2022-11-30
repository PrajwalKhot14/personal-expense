import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
import {getSumByDate, line_Data, line_Date} from '../helper/helper';
import {default as api} from '../store/apiSlice';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)


export default function Linefunc() {
  const {data, isFetching, isSuccess, isError} = api.useGetLabelsQuery()
  // console.log(line_Data(data))
  let lineData;
  
  const [dataValue, setData]= useState({
    labels:["Jan","Feb", "March", "April", "May", "June", "July"],
    datasets:[
      {
        label:"Expense",
        data:[10, 20, 30, 42, 51, 82, 31, 59],
        borderColor:'green',
        tension:0.4,
        fill:false,
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
      }
    ]
  })

  if(isFetching){
    lineData = <div>Fetching</div>
  }
  else if(isSuccess){
    // console.log("Line data", line_Data(data))
    // console.log("Line date", line_Date(data))

    // lineData = <Line data={}></Line>;
      // Transactions = getLabels(data, 'type').map((v, i) => <LabelComponent key={i} data = {v}></LabelComponent>)
  }
  else if(isError){
    lineData = <div>Error</div>
  }

  return (
    <div className="App" style={{width:'560px'}}>
    <Line data={dataValue}></Line>
  </div>
  );
}
