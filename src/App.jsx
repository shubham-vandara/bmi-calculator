import { useState } from "react";

function App() {
  // STATES
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // LOGICS
  function calculateBMI(e) {
    e.preventDefault();
    if ((weight > 0) & (height > 0)) {
      const bmiValue =
        parseFloat(weight) / Math.pow(parseFloat(height) / 100, 2);
      setBmi(bmiValue.toFixed(2));

      let bmiMessage = "";
      if (bmiValue < 18.5) {
        bmiMessage = "You are underweight.";
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        bmiMessage = "You are normal weight.";
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        bmiMessage = "You are overweight.";
      } else {
        bmiMessage = "You are obese.";
      }
      setMessage(bmiMessage);
    } else {
      alert("Please enter valid weight and height.");
      setBmi(0);
      setMessage("");
    }
  }

  function reset() {
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
  }

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">FIT BMI Calculator</h2>
        <form onSubmit={calculateBMI}>
          <div>
            <label>Weight (Kg)</label>
            <input
              value={weight}
              placeholder="Enter weight in kg"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (Cm)</label>
            <input
              value={height}
              placeholder="Enter height in cm"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="button" onClick={reset}>
              Reset
            </button>
          </div>
        </form>

        <div className="center">
          {bmi > 0 && (weight != 0 || height != 0) ? (
            <>
              <h3>Your BMI Value is: {bmi}</h3>
              <p>{message}</p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
