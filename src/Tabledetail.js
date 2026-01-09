import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Tabledetail = ({
  emi,
  TotalAmountOfInterest,
  totalAmount,
  pAmount,
}) => {
  return (
    <div className="w-full mt-6">
      <div className="
        grid 
        grid-cols-1 
        lg:grid-cols-2 
        border-t-2 
        border-zinc-400
      ">

        {/* LEFT DETAILS */}
        <div className="divide-y-4 divide-dotted divide-zinc-400">
          <div className="py-6">
            <h2 className="text-center text-lg md:text-xl text-gray-500">
              Loan EMI
            </h2>
            <h1 className="flex items-center justify-center mt-4 text-xl md:text-2xl font-bold">
              <FaRupeeSign /> {emi}
            </h1>
          </div>

          <div className="py-6">
            <h2 className="text-center text-lg md:text-xl text-gray-500">
              Total Interest Payable
            </h2>
            <h1 className="flex items-center justify-center mt-4 text-xl md:text-2xl font-semibold">
              <FaRupeeSign /> {TotalAmountOfInterest}
            </h1>
          </div>

          <div className="py-6">
            <h2 className="text-center text-lg md:text-xl text-gray-500">
              Total Payment <br />(Principal + Interest)
            </h2>
            <h1 className="flex items-center justify-center mt-4 text-xl md:text-2xl font-semibold">
              <FaRupeeSign /> {totalAmount || 0}
            </h1>
          </div>
        </div>

        {/* RIGHT PIE CHART */}
        <div className="
          flex 
          flex-col 
          items-center 
          justify-center 
          border-t-2 
          lg:border-t-0 
          lg:border-l-2 
          border-zinc-400 
          p-6
        ">
          <h2 className="text-center text-lg md:text-xl font-semibold mb-4">
            Break-up of Total Payment
          </h2>

          {/* Responsive Chart Wrapper */}
          <div className="
            w-full 
            max-w-[280px] 
            sm:max-w-[320px] 
            md:max-w-[360px]
          ">
            <Pie
              data={{
                labels: ["Total Interest", "Principal Amount"],
                datasets: [
                  {
                    data: [TotalAmountOfInterest, pAmount],
                    backgroundColor: ["#EF4444", "#3B82F6"],
                    hoverBackgroundColor: ["#F87171", "#60A5FA"],
                    borderWidth: 6,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      boxWidth: 14,
                      font: {
                        size: 12,
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabledetail;
