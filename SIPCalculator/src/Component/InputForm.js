import React from 'react'

const InputForm = () => {
  return (
          <div className="col-lg-5 row mx-0 mb-lg-0 mb-4 order-lg-1 order-1 mb-lg-0 mb-4 calculator_side">
            <div className="col-12 ps-0 cl_left">
              {/* start Monthly Investment slider */}
              <div className="row mx-0 align-items-center mb-4">
                <div className="col loan_heading fw-bold ng-star-inserted">Monthly
                  Investment</div>
                <div className="col-auto">
                  <div className="input-group bg-white d-flex align-items-center gap-2">
                    <span className="input-group-text p-0 border-0 fw-bold">₹</span>
                    <input formcontrolname="monSipAmt" type="text" max={100000000} maxLength={9} placeholder="XX,XX,XXX" aria-label="XX,XX,XXX" aria-describedby="basic-addon1" id="slidervalue" className="form-control border-0 p-0 shadow-none ng-untouched ng-pristine ng-valid" />
                  </div>
                </div>
                <div className="col-12 py-2 form-group range__slider">
                  <input type="range" className="form-group range__slider" id="MonthlySlider" min={0} max={10000000} defaultValue={0} tabIndex={0} aria-disabled="false" aria-valuemax={100000000} aria-valuemin={0} aria-valuenow={1000} aria-valuetext="1000" aria-orientation="horizontal" step={1500} />
                </div>
                <div className="col-12 row mx-0 px-0 align-items-center">
                  <div className="col fw-bold prich_value">₹ 1 Rs</div>
                  <div className="col-auto fw-bold prich_value text-end">₹ 10
                    Crs</div>
                </div>
              </div>
              {/* end Monthly Investment slider */}
              {/*Start Expected Rate of Return */}
              <div className="row mx-0 align-items-center mb-4">
                <div className="col loan_heading fw-bold ng-star-inserted">Monthly
                  Investment</div>
                <div className="col-auto">
                  <div className="inner_input bg-white d-flex align-items-center gap-2">
                    <input formcontrolname="rateOfinterest" maxLength={5} max={100} type="text" placeholder="1%" aria-label="1%" aria-describedby="basic-addon1" id="slidervalue" className="form-control border-0 p-0 shadow-none text-center ng-untouched ng-pristine ng-valid" />
                  </div>
                </div>
                <div className="col-12 py-2 form-group range__slider">
                  <input type="range" className="form-group range__slider" id="MonthlySlider" min={0} max={10000000} defaultValue={0} tabIndex={0} aria-disabled="false" aria-valuemax={100000000} aria-valuemin={0} aria-valuenow={1000} aria-valuetext="1000" aria-orientation="horizontal" step={1500} />
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
                      <input formcontrolname="tenureYear" type="text" id="exampleFormControlInput1" max={1} className="form-control shadow-none border-1.5 text-center ng-untouched ng-pristine ng-valid" />
                    </div>
                  </div>
                  <div className="col-auto px-0" style={{width: '70px'}}>
                    <label htmlFor="exampleFormControlInput2" className="form-label text-center w-100">Month</label>
                    <select formcontrolname="tenureMon" aria-label="Default select example" id="exampleFormControlInput2" className="form-select border-1.5  shadow-none bot pe-2 ng-pristine ng-valid ng-touched">
                      <option value={0} selected className="months">
                      </option>
                      <option value={1} className="months">1</option>
                      <option value={2} className="months">2</option>
                      <option value={3} className="months">3</option>
                      <option value={4} className="months">4</option>
                      <option value={5} className="months">5</option>
                      <option value={6} className="months">6</option>
                      <option value={7} className="months">7</option>
                      <option value={8} className="months">8</option>
                      <option value={9} className="months">9</option>
                      <option value={10} className="months">10</option>
                      <option value={11} className="months">11</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 py-2 form-group range__slider">
                  <input type="range" className="form-group range__slider" id="MonthlySlider" min={0} max={10000000} defaultValue={0} tabIndex={0} aria-disabled="false" aria-valuemax={100000000} aria-valuemin={0} aria-valuenow={1000} aria-valuetext="1000" aria-orientation="horizontal" step={1500} />
                </div>
                <div className="col-12 row mx-0 px-0 align-items-center">
                  <div className="col fw-bold prich_value">1 Month </div>
                  <div className="col-auto fw-bold prich_value text-end">360 Month
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
          </div>
  )
}

export default InputForm
