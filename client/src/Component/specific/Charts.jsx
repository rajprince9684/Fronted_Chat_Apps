// import React from 'react';
// import {Line, Doughnut,} from "react-chartjs-2";
// import { Chart as ChartJS,
//   CategoryScale, // ← ADD THIS
//   LinearScale,
//   PointElement,
//   LineElement,
//     ArcElement,
//   Title,
//   Tooltip,
//   Legend,
//   plugins,
//   scales} from 'chart.js'
// import { Purple, purpleLight,orange } from '../../Constants/color';
// import { getLast7Days } from '../../Lib/Features';

// ChartJS.register( CategoryScale, // ← ADD THIS
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//     ArcElement,
//   Legend

// );
// const labels=getLast7Days();

// const LineChartOptions={
//     responsive:true,
// plugins:{
//     legend:{
//         display:false,
    
//     },
//     title:{
//         display:false,
//     },
// },
// scales:{
//     x:{
//         grid:{
//             display:false,
//         },
    
//     },
//     y:{
//         beginAtZero:true,
//          grid:{
//             display:false,
//         },

//     },
// },

// };

// const  LineCharts=({value=[]})=> {

//     const data  = {
//         labels,
//         datasets:[
        

//          {
//             data:value,
//             labels:"Revenue 2",
//             fill:true,
//             backgroundColor:purpleLight,
//             borderColor: Purple,
//         },
//     ],
//     };
//   return <Line data={data} options={LineChartOptions}/>
   
  
// };


// const DoughnutChartOptions={
//     responsive:true,
// plugins:{
//     legend:{
//         display:false,
    
//     },
//     title:{
//         display:false,
//     },
// },
// scales:{
//     x:{
//         grid:{
//             display:false,
//         },
    
//     },
//     y:{
//         beginAtZero:true,
//          grid:{
//             display:false,
//         },

//     },
// },
// cutout:120,

// };


// const  DoughnutCharts=({value=[],labels})=> {
//        const data  = {
//         labels,
//         datasets:[
        

//          {
//             data:value,
//             offset:20,
//             hoverbackgroundColor:[purpleLight,orange],
//             backgroundColor:[purpleLight,orange],
//             borderColor: [Purple,orange],
//         },
//     ],
//     };
//   return <Doughnut
//   style={{
//     zIndex:10
//   }} 
//   data={data} options={DoughnutChartOptions}/>
   
  
// }

// export  {LineCharts, DoughnutCharts}
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { orangeLight, Purple, purpleLight,orange}from '../../Constants/color'
import { getLast7Days } from '../../Lib/Features';

ChartJS.register(
  Tooltip,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend
);

const labels = getLast7Days();

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineCharts = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Messages",
        fill: true,
        backgroundColor: purpleLight,
        borderColor: Purple,
      },
    ],
  };

  return <Line data={data} options={lineChartOptions} />;
};

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 120,
};

const DoughnutCharts = ({ value = [], labels = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        backgroundColor: [purpleLight, orangeLight],
        hoverBackgroundColor: [Purple, orange],
        borderColor: [Purple, orange],
        offset: 40,
      },
    ],
  };
  return (
    <Doughnut
      style={{ zIndex: 10 }}
      data={data}
      options={doughnutChartOptions}
    />
  );
};

export { DoughnutCharts, LineCharts };