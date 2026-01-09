import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from 'react-chartjs-2';


const Tabledetail = (props) => {
  return (
<div className="">
  <div className="main-box-for-detail grid grid-flow-col border-t-2  border-zinc-400 mt-5  ">
    <div className="part-1-detail  ">
      <div className="Emi border-b-4 border-dotted border-zinc-400  py-5 ">
        <h2 className="text-center text-xl text-gray-500">Loan EMI</h2>
      <h1 className="flex items-center justify-center mt-6 text-2xl font-bold"><FaRupeeSign />{props.emi}</h1>
      </div>

      <div className="totlal-payable-interets border-b-4 border-zinc-400  border-dotted py-5 ">
        <h2 className="text-center text-xl text-gray-500">Total Interest Payable</h2>
      <h1 className="flex items-center justify-center mt-6 text-2xl font-semibold"><FaRupeeSign />{props.TotalAmountOfInterest}</h1>
      </div>

      <div className="totlal-payment py-5 ">
        <h2 className="text-center text-xl text-gray-500">Total Payment <br />(Principle + Intrest)</h2>
      <h1 className="flex items-center justify-center mt-6 text-2xl font-semibold"><FaRupeeSign />{props.totalAmount ? props.totalAmount : 0}</h1>
      </div>
    </div>
    <div className="part-2-detail  flex justify-center  border-zinc-400  border-l-2">
    {ChartJS.register(ArcElement, Tooltip, Legend)}
      <div className="pie-chart">
        <h2 className="text-center text-xl font-semibold my-4">Break-up of Total Payment</h2>
     
      <Pie
     
      data={{
        labels: ['Total Intrest', 'Principle Amount'],
        datasets: [
          {
            data: [props.TotalAmountOfInterest , props.pAmount],
            backgroundColor: ['red', 'blue'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB'],
            borderWidth: 8,
          },
        ],
      }}
    
    />
   
      </div>
    </div>
    
   
    </div>

    
  </div>

  )
}

export default Tabledetail;
