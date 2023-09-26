import React, { useState } from "react";

import InputBox from "./InputBox";

import "./InvForm.css";

function InvForm(props) {
  const [userInput, setUserInput] = useState({
    currentSavings: "",
    yearlySavings: "",
    expectedReturn: "",
    duration: "",
  });

  function onChangeForm(event) {
    const { name, value } = event.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function formReset() {
    setUserInput({
      currentSavings: "",
      yearlySavings: "",
      expectedReturn: "",
      duration: "",
    });
    props.getData([]);
  }

  function calculateHandler(event) {
    event.preventDefault();
    console.log(userInput);
    const yearlyData = [];

    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlySavings;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;
    let totalInterest = 0;
    let totalContribution = 0;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      totalContribution += yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        yearlyContribution: yearlyContribution.toFixed(2),
        totalContribution: totalContribution.toFixed(2),
      });
    }

    props.getData(yearlyData);
  }

  return (
    <form className="form" onSubmit={calculateHandler}>
      <div className="input-group">
        <InputBox
          change={onChangeForm}
          value={userInput.currentSavings}
          label="Current Savings ($)"
          inputId="currentSavings"
        />
        <InputBox
          change={onChangeForm}
          value={userInput.yearlySavings}
          label="Yearly Savings ($)"
          inputId="yearlySavings"
        />
      </div>
      <div className="input-group">
        <InputBox
          change={onChangeForm}
          value={userInput.expectedReturn}
          label="Expected Interest (%, per year)"
          inputId="expectedReturn"
        />
        <InputBox
          change={onChangeForm}
          value={userInput.duration}
          label="Investment Duration (years)"
          inputId="duration"
        />
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={formReset}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default InvForm;
