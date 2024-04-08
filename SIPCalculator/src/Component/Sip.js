import React from 'react'

const Sip = () => {
  return (
    <div>
      
    <form noValidate className="ng-untouched ng-pristine ng-valid">
    <section className="loancalculator_section">
      <div className="container">
        <div className="row align-items-center mt-5 py-2 mx-0 justify-content-between cards">
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
                  <input type="range" className="form-group range__slider" id="MonthlySlider" min={0} max={10000000} defaultValue={0} tabIndex={0} aria-disabled="false" aria-valuemax={100000000} aria-valuemin={0} aria-valuenow={1000} aria-valuetext={1000} aria-orientation="horizontal" step={1500} />
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
                  <input type="range" className="form-group range__slider" id="MonthlySlider" min={0} max={10000000} defaultValue={0} tabIndex={0} aria-disabled="false" aria-valuemax={100000000} aria-valuemin={0} aria-valuenow={1000} aria-valuetext={1000} aria-orientation="horizontal" step={1500} />
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
                  <input type="range" className="form-group range__slider" id="MonthlySlider" min={0} max={10000000} defaultValue={0} tabIndex={0} aria-disabled="false" aria-valuemax={100000000} aria-valuemin={0} aria-valuenow={1000} aria-valuetext={1000} aria-orientation="horizontal" step={1500} />
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
          {/* start display data */}
          <div className="col-lg-2 order-lg-2 order-2 mb-lg-0 mb-4 calculator_side">
            <div className="row align-items-center mx-0 cl_right">
              <div className="col-12 row mx-0 ps-3 pe-0 py-5 mid_amount">
                <div className="col-12 px-0 emi_heading fw-bold mb-2 ng-star-inserted">Total Value</div>
                {/**/}
                <div className="main_amount px-0 fw-bold mb-4 ng-star-inserted">
                  ₹ 81,758,832,708.161</div>{/**/}{/**/}{/**/}
                <div className="col-12 px-0 emi_heading fw-bold mb-2 ng-star-inserted">Est. Returns</div>
                {/**/}
                <div className="total_amount px-0 mb-4 ng-star-inserted">₹
                  147,458.244</div>{/**/}
                <div className="col-12 px-0 emi_heading fw-bold mb-2 ng-star-inserted">Invested Amount</div>
                {/**/}
                <div className="total_amount px-0 mb-4 ng-star-inserted">₹
                  145,000</div>{/**/}{/**/}{/**/}
              </div>
            </div>
          </div>
          {/* end display data */}
          {/* start chart */}
          <div className="col-lg-4 chart_side row mx-0 px-0 order-lg-3 order-3 mb-lg-0 mb-4 gap-4">
            <div className="chart_img col-12 mb3 d-flex align-items-center justify-content-center">
              <div className="col-lg-4 chart_side d-flex align-items-center justify-content-center order-lg-3 order-3 mb-lg-0 mb-4">
                <div className="px5">
                  <div className="chart" style={{display: 'block'}}><canvas basechart width={600} height={600} id="myChart" style={{display: 'block', boxSizing: 'border-box', height: '300px', width: '300px'}} className="ng-star-inserted" />{/**/}{/**/}{/**/}</div>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <div className="radio_input row mx-0 align-items-center px-3 justify-content-center ng-star-inserted">
                <div className="col-auto form-check mb-sm-0 mb-2 d-flex align-items-center"><span className="dot" style={{backgroundColor: '#AD98EA'}} /><label htmlFor="exampleFormControlInput11" className="text-center ms-2 form-check-label pt-1">Invested Amount:
                    24000000000</label></div>
                <div className="col-auto form-check mb-sm-0 mb-2 d-flex align-items-center"><span className="dot" style={{backgroundColor: '#DDD1FF'}} /><label htmlFor="exampleFormControlInput14" className="text-center ms-2 form-check-label pt-1">Est Returns:
                    57758832708.16136</label></div>
              </div>{/**/}{/**/}{/**/}
            </div>
          </div>
          {/* end chart */}
        </div>
      </div>
    </section>
  </form>
    </div>
  )
}

export default Sip
