import React, { useState } from "react";
import Tabledetail from "./TableDetail";
import SlidesMark from "./SlidesMark";
import { AiOutlinePercentage } from "react-icons/ai";
import { MdCurrencyRupee } from "react-icons/md";




function App() {
  const [pAmount, setpAmount] = useState(2755000);
  const [intrest, setintrest] = useState(7);
  const [time, settime] = useState(147);
  // const[sliderValue,setSliderValue]=useState(0);
  const maxvalue = 20000000;
  const intMax = 20;
  const maxTime = 360;

  const handleInput = (event) => {
    setpAmount(parseInt(event.target.value, 10));
  };
  const HandleInputChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (value >= 0 && value <= maxvalue) {
      setpAmount(value);
    } else {
      setpAmount(maxvalue);
    }
  };

  const IntratehandleInput = (event) => {
    setintrest(parseInt(event.target.value, 10));
  };

  const IntHandleInputChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (value >= 0||NaN && value <= intMax) {
      setintrest(value);
    } else {
      setintrest(intMax);
    }
  };

  const TimehandleInput = (event) => {
    settime(parseInt(event.target.value, 10));
  };

  const TimeHandleInputChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (value >= 0  && value <= maxTime) {
      settime(value);
    } else {
      settime(maxTime);
    }
  };

  const intr = intrest / 1200;
  const emi = time
    ? Math.round((pAmount * intr) / (1 - Math.pow(1 / (1 + intr), time)))
    : 0;
  const totalAmount = time * emi;
  var TotalAmountOfCredit = Math.round(
    (emi / intr) * (1 - Math.pow((1 + intr), -time))
  );
  const TotalAmountOfInterest = Math.round(totalAmount - TotalAmountOfCredit);



  return (
    <div className="bg-[#F5F5F7] py-10 border-2 border-dashed border-zinc-600 m-10 rounded-xl">
      <div className="md:max-lg:w-[90%] main-box border-2 border-zinc-400 shadow-md rounded-2xl w-[70%] mx-auto  ">
        <div className="Home-loan-Amount ">
          <div className=" flex-wrap ml-10 lg:flex items-center justify-center mt-10 gap-5">
            <label htmlFor="" className=" sm:max-lg:block text-xl sm:max-lg:mb-5  font-semibold">
              Home Loan Amount {"  "}
            </label>
            <input
              type="text"
              className="md:max-lg:w-[90%] rounded-l-lg p-3 text-xl font-semibold border border-gray-300  "
              id="PriceAmt"
              max={maxvalue}
              step={1}
              onChange={HandleInputChange}
              value={pAmount}
            />
             <div className="md:max-lg:right-[6.5%] md:max-lg:top-[20%] p-4 text-lg absolute right-[30.6%]  rounded-e-lg border-gray-300 bg-gray-200"><MdCurrencyRupee className="text-2xl" /></div>
          </div>
          <input
            type="range"
            className="w-[95%] m-7  [&::-webkit-slider-thumb]:bg-slate-50 accent-orange-500 "
            id="PriceAmt"
            marks={SlidesMark.marksAmt}
            max={maxvalue}
            onChange={handleInput}
            step={1}
           
            value={pAmount}
            
          />
         
        </div>

        <div className="intrest-precent  ">
        <div className="flex-wrap ml-10 lg:flex items-center justify-center mt-10 gap-8 ">
            <label htmlFor="" className="md:max-lg:block md:max-lg:mb-5 text-xl font-semibold">
            Interest Rate % {" "}
            </label>
            <input
              type="text"
              className="md:max-lg:w-[90%] rounded-l-lg p-3 text-xl font-semibold border border-gray-300 "
              id="intRate"
              max={intMax}
              step={1}
              onChange={IntratehandleInput}
              value={intrest}
            />
             <div className="md:max-lg:right-[6.5%]  md:max-lg:top-[53.2%]  p-4 text-lg absolute right-[31.7%] border-gray-300  rounded-e-lg bg-gray-200"><AiOutlinePercentage className="text-2xl" /></div>
          </div>
          <input
           className="w-[95%] m-7  [&::-webkit-slider-thumb]:bg-slate-50 accent-orange-500 "
          type="range"
           id="intRate"
          value={intrest}
          max={intMax}
          onChange={IntHandleInputChange}
        />
        
        </div>
       
        
        <div className=" md:flex-wrap md:ml-10 lg:flex items-center justify-center mt-10 gap-8 ">
            <label htmlFor="" className="md:block md:mb-5 text-xl font-semibold">
           Loan Tenure {" "}
            </label>
            <input
              type="text"
              className="md:max-lg:w-[90%] rounded-l-lg p-3 text-xl font-semibold border border-gray-300"
              id="intRate"
              max={maxTime}
              step={1}
              onChange={TimehandleInput}
              value={time}
            />
            <div className="md:max-lg:right-[6.5%] md:max-lg:bottom-8 p-3 text-xl absolute right-[32.6%] border border-gray-300   font-semibold rounded-e-lg bg-gray-200">Mo</div>
          </div>
        <input
         className="w-[95%] m-7  [&::-webkit-slider-thumb]:bg-slate-50 accent-orange-500 "
        id="timePeriod"
          type="range"
          value={time}
          max={maxTime}
          onChange={TimeHandleInputChange}
        />
        <div className="table-details">
          <Tabledetail pAmount={pAmount} intrest={intrest} time={time} emi={emi} TotalAmountOfInterest={TotalAmountOfInterest} totalAmount={totalAmount} />
       
        </div>
      </div>
    </div>
  );
}

export default App
