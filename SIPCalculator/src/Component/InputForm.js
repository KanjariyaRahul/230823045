import React from 'react'
import { useState } from 'react';

const InputForm = (props) => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [Expected_Rate_of_Return, setExpected_Rate_of_Return] = useState(10.5);

  const [tenureYear, setTenureYear] = useState(8);
  const [tenureMonth, setTenureMonth] = useState(4);
  const maxYear = 30;
  const maxMonth = 11;

  const handleYearChange = (e) => {
    let value = e.target.value;
    // Ensure the entered value is not greater than the maximum allowed year
    if (parseInt(value) > maxYear) {
      value = maxYear.toString();
    }
    setTenureYear(value);
  };

  const handleMonthChange = (e) => {  
    let value = parseInt(e.target.value);
    // Ensure the selected month is not greater than the maximum allowed month
    if (value > maxMonth) {
      value = maxMonth;
    }
    setTenureMonth(value);
  };

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    const years = Math.floor(value / 12);
    const months = value % 12 + 1;

    setTenureYear(years.toString());
    setTenureMonth(months);
  };



  return (
          <div className="col-lg-5 row mx-0 mb-lg-0 mb-4 order-lg-1 order-1 mb-lg-0 mb-4 calculator_side">
            <div className="col-12 ps-0 cl_left">
              {/* start Monthly Investment slider */}
              <div className="row mx-0 align-items-center mb-4">
      <div className="col loan_heading fw-bold ng-star-inserted">{props.loan_heading}</div>
      <div className="col-auto">
        <div className="input-group bg-white d-flex align-items-center gap-2">
          <span className="input-group-text p-0 border-0 fw-bold">₹</span>
          <input
          value={monthlyInvestment} // Assign the value of monthlyInvestment to the input box
          onChange={(e) => setMonthlyInvestment(e.target.value)}
            type="text"
            max={100000000}
            maxLength={9}
            placeholder="XX,XX,XXX"
            aria-label="XX,XX,XXX"
            aria-describedby="basic-addon1"
            id="slidervalue"
            className="form-control border-0 p-0 shadow-none ng-untouched ng-pristine ng-valid"
          />
        </div>
      </div>
      <div className="col-12 py-2 form-group range__slider">
        <input
          type="range"
          value={monthlyInvestment}
          onChange={(e)=>setMonthlyInvestment(e.target.value)}
          className="slider"
          id="myRange"
          max={100000000}
          tabIndex={0}
          aria-disabled="false"
          aria-valuemax={100000000}
          aria-valuemin={0}
          aria-orientation="horizontal"
          step={1500}
        />
      </div>
      <div className="col-12 row mx-0 px-0 align-items-center">
        <div className="col fw-bold prich_value">₹ 1 Rs</div>
        <div className="col-auto fw-bold prich_value text-end">₹ 10 Crs</div>
      </div>
    </div>
              {/* end Monthly Investment slider */}
              {/*Start Expected Rate of Return */}
              <div className="row mx-0 align-items-center mb-4">
                <div className="col loan_heading fw-bold ng-star-inserted">Expected Rate of Return</div>
                <div className="col-auto">
                  <div className="inner_input bg-white d-flex align-items-center gap-2">
                    <input 
                    value={Expected_Rate_of_Return}
                    onChange={(e)=>setExpected_Rate_of_Return(e.target.value)}
                    formcontrolname="rateOfinterest" 
                    maxLength={5} 
                    max={100} 
                    type="text" 
                    placeholder="1%" 
                    aria-label="1%" 
                    aria-describedby="basic-addon1" 
                    id="slidervalue" 
                    className="form-control border-0 p-0 shadow-none text-center ng-untouched ng-pristine ng-valid" />
                  </div>
                </div>
                <div className="col-12 py-2 form-group range__slider">
                  <input value={Expected_Rate_of_Return}
                  onChange={(e)=>setExpected_Rate_of_Return(e.target.value)} 
                  type="range" 
                  className="form-group range__slider" 
                  id="MonthlySlider" 
                 
                   max={100}
                  defaultValue={0} 
                  tabIndex={0} 
                  aria-disabled="false" 
                  aria-valuemax={100} 
                  aria-valuemin={1} 
                  aria-valuenow="10.5" 
                  aria-valuetext="10.5"
                  aria-orientation="horizontal" step={0.1} />
                </div>
                <div className="col-12 row mx-0 px-0 align-items-center">
                  <div className="col fw-bold prich_value"> 1%</div>
                  <div className="col-auto fw-bold prich_value text-end">100% </div>
                </div>
              </div>
              {/* End Expected Rate of Return */}
              {/* start */}
              <div className="row mx-0 align-items-center mb-4">
      <div className="col loan_heading fw-bold">Tenure</div>
      <div className="col-auto row mx-0 gap-2">
        <div className="col-auto px-0">
          <div className="lable_input">
            <label className="form-label text-center w-100">Year</label>
            <input
              value={tenureYear}
              onChange={handleYearChange}
              type="text"
              max={maxYear}
              className="form-control shadow-none border-1.5 text-center ng-untouched ng-pristine ng-valid"
            />
          </div>
        </div>
        <div className="col-auto px-0" style={{ width: '70px' }}>
          <label htmlFor="exampleFormControlInput2" className="form-label text-center w-100">Month</label>
          <select
            value={tenureMonth}
            onChange={handleMonthChange}
            aria-label="Default select example"
            id="exampleFormControlInput2"
            className="form-select border-1.5 shadow-none bot pe-2 ng-pristine ng-valid ng-touched"
          >
            {[...Array(maxMonth).keys()].map(month => (
              <option key={month + 1} value={month + 1}>{month + 1}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-12 py-2 form-group range__slider">
        <input
          type="range"
          className="form-group range__slider"
          id="MonthlySlider"
          min={0}
          max={maxYear * 12 + maxMonth - 1}
          defaultValue={0}
          tabIndex={0}
          aria-disabled="false"
          aria-valuemax={maxYear * 12 + maxMonth - 1}
          aria-valuemin={0}
          aria-valuenow={parseInt(tenureYear) * 12 + tenureMonth - 1}
          aria-valuetext={`${tenureYear} year(s) ${tenureMonth} month(s)`}
          aria-orientation="horizontal"
          step={1}
          onChange={handleSliderChange}
        />
      </div>
      <div className="col-12 row mx-0 px-0 align-items-center">
        <div className="col fw-bold prich_value">1 Month</div>
        <div className="col-auto fw-bold prich_value text-end">360 Month</div>
      </div>
    </div>
      {/* end */}
           
          </div>
          </div>
  )
}

export default InputForm;
