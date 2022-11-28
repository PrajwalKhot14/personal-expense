import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

export default function Linefunc() {
  const [data, setData]= useState({
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
  return (
    <div className="App" style={{width:'560px'}}>
    <Line data={data}>Hello</Line>
  </div>
  );
}
