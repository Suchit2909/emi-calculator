import React, { useState } from "react";
import Tabledetail from "./Tabledetail";
import { AiOutlinePercentage } from "react-icons/ai";
import { MdCurrencyRupee } from "react-icons/md";

function App() {
  const loanTypes = {
    home: {
      label: "Home Loan",
      maxAmount: 20000000,
      maxTenureYear: 30,
      maxInterest: 15,
      defaultAmount: 2755000,
      defaultInterest: 7,
      defaultTenureYear: 12,
    },
    personal: {
      label: "Personal Loan",
      maxAmount: 5000000,
      maxTenureYear: 5,
      maxInterest: 30,
      defaultAmount: 500000,
      defaultInterest: 12,
      defaultTenureYear: 3,
    },
    car: {
      label: "Car Loan",
      maxAmount: 3000000,
      maxTenureYear: 7,
      maxInterest: 15,
      defaultAmount: 800000,
      defaultInterest: 9,
      defaultTenureYear: 5,
    },
  };

  const [loanType, setLoanType] = useState("home");
  const currentLoan = loanTypes[loanType];

  const [pAmount, setpAmount] = useState(currentLoan.defaultAmount);
  const [intrest, setintrest] = useState(currentLoan.defaultInterest);
  const [tenureYear, setTenureYear] = useState(
    currentLoan.defaultTenureYear
  );

  const handleLoanChange = (type) => {
    const loan = loanTypes[type];
    setLoanType(type);
    setpAmount(loan.defaultAmount);
    setintrest(loan.defaultInterest);
    setTenureYear(loan.defaultTenureYear);
  };

  const maxvalue = currentLoan.maxAmount;
  const intMax = currentLoan.maxInterest;
  const maxTenureYear = currentLoan.maxTenureYear;

  const tenureMonths = tenureYear * 12;

  // EMI Calculation (MONTHS ONLY)
  const intr = intrest / 1200;
  const emi = tenureMonths
    ? Math.round(
        (pAmount * intr) /
          (1 - Math.pow(1 / (1 + intr), tenureMonths))
      )
    : 0;

  const totalAmount = emi * tenureMonths;
  const TotalAmountOfInterest = totalAmount - pAmount;

  return (
    <div className="bg-[#F5F5F7] py-10 px-4">
      <div className="w-full lg:w-[75%] mx-auto bg-white p-6 rounded-2xl shadow-md border">

        {/* Loan Type */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {Object.keys(loanTypes).map((type) => (
            <button
              key={type}
              onClick={() => handleLoanChange(type)}
              className={`px-6 py-2 rounded-full font-semibold border
                ${
                  loanType === type
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white border-gray-300"
                }`}
            >
              {loanTypes[type].label}
            </button>
          ))}
        </div>

        {/* Loan Amount */}
        <div className="mb-8">
          <label className="font-semibold">Loan Amount</label>
          <div className="flex mt-2">
            <input
              type="number"
              value={pAmount}
              onChange={(e) =>
                setpAmount(Math.min(+e.target.value || 0, maxvalue))
              }
              className="w-full p-3 border rounded-l-lg"
            />
            <div className="px-4 bg-gray-200 flex items-center rounded-r-lg">
              <MdCurrencyRupee />
            </div>
          </div>
          <input
            type="range"
            max={maxvalue}
            value={pAmount}
            onChange={(e) => setpAmount(+e.target.value)}
            className="w-full mt-3 accent-orange-500"
          />
        </div>

        {/* Interest */}
        <div className="mb-8">
          <label className="font-semibold">Interest Rate (%)</label>
          <div className="flex mt-2">
            <input
              type="number"
              value={intrest}
              onChange={(e) =>
                setintrest(Math.min(+e.target.value || 0, intMax))
              }
              className="w-full p-3 border rounded-l-lg"
            />
            <div className="px-4 bg-gray-200 flex items-center rounded-r-lg">
              <AiOutlinePercentage />
            </div>
          </div>
          <input
            type="range"
            max={intMax}
            value={intrest}
            onChange={(e) => setintrest(+e.target.value)}
            className="w-full mt-3 accent-orange-500"
          />
        </div>

        {/* Tenure (YEARS) */}
        <div className="mb-8">
          <label className="font-semibold">Loan Tenure (Years)</label>
          <div className="flex mt-2">
            <input
              type="number"
              value={tenureYear}
              onChange={(e) =>
                setTenureYear(
                  Math.min(+e.target.value || 1, maxTenureYear)
                )
              }
              className="w-full p-3 border rounded-l-lg"
            />
            <div className="px-4 bg-gray-200 flex items-center rounded-r-lg">
              Yr
            </div>
          </div>
          <input
            type="range"
            min={1}
            max={maxTenureYear}
            value={tenureYear}
            onChange={(e) => setTenureYear(+e.target.value)}
            className="w-full mt-3 accent-orange-500"
          />
        </div>

        {/* Table */}
        <Tabledetail
          emi={emi}
          totalAmount={totalAmount}
          TotalAmountOfInterest={TotalAmountOfInterest}
          pAmount={pAmount}
        />
      </div>
    </div>
  );
}

export default App;
