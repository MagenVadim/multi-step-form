import './App.css';
import Step from './Components/Step'


function App() {

  const steps = [
    {step: 1, info:"Your info"},
    {step: 2, info:"Select plan"},
    {step: 3, info:"ADD-ONS"},
    {step: 4, info:"Summary"},
  ]

  return (
    <div className="App">
      <div className="form">
        <div className="form-container">
          <div className="form-sidebar">
            {
              steps.map((step)=>(
                <Step key={step.step} step={step.step} info={step.info}/>
              ))
            }
          </div>
        </div>

        <div className="stp stp-1">
          <header>
            <h1 className="title">Personal info</h1>
            <p className="exp">
              Please provide your name, email address, and phone number.
            </p>
          </header>
        </div>
        
      </div>
    </div>
  );
}

export default App;
