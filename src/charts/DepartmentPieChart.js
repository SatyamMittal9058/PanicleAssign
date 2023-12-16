import React from 'react'
import {Pie} from 'react-chartjs-2';
const DepartmentPieChart = ({charData}) => {
    const ChartData = {
      labels: charData.label.map((curr)=>curr),
      datasets: [
        {
          data: charData.count.map((curr)=>curr),
          backgroundColor: charData.bgColor.map((curr)=>curr),
          borderColor:"gray",
          borderWidth: 1,
        },
      ],
    }
   
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
    <h2 className="text-center text-xl font-bold mb-4">Pie Chart</h2>
    <div className="w-full h-64">
      <Pie data={ChartData} />
    </div>
  </div>
    
  )
}


export default DepartmentPieChart