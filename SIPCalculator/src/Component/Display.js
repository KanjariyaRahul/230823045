import React from 'react'

const Display = () => {
  return (
    
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
  )
}

export default Display
