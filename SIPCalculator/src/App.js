
import './App.css';
import Chart from './Component/Chart';
import Display from './Component/Display';
import InputForm from './Component/InputForm';
import SIPCalculator from './Component/SIPCalculator';

function App() {
  return (
    <>
    <SIPCalculator/>
    <form noValidate className="ng-untouched ng-pristine ng-valid">
    <section className="loancalculator_section">
      <div className="container">
        <div className="row align-items-center mt-5 py-2 mx-0 justify-content-between cards">
        <InputForm/>
        <Display/>
        <Chart/>
        </div>
      </div>
      </section>
      </form>
    </>
  );
}

export default App;
