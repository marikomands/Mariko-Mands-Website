import React, { useState } from "react";
import "./Calculator.css";
import { Link } from "react-router-dom";

function App() {
  console.log("%%%%%% STATE %%%%%%%");

  const [memoryNumber, setMemoryNumber] = useState(0);
  console.log("π ~ file: App.js ~ line 6 ~ memoryNumber", memoryNumber);
  const [displayNumber, setDisplayNumber] = useState(0);
  console.log("π ~ file: App.js ~ line 8 ~ displayNumber", displayNumber);
  const [actionNumber, setActionNumber] = useState(0);
  console.log("π ~ file: App.js ~ line 10 ~ actionNumber", actionNumber);
  const [action, setAction] = useState("add"); // 'plus' 'minus' 'times' 'divide'
  console.log("π ~ file: App.js ~ line 12 ~ action", action);
  const [decimal, setDecimal] = useState("");
  // falseγ§γε―θ½
  console.log("π ~ App ~ decimal", decimal);
  // const [plusMinus, setPlusMinus] = useState("");
  // const [delete, setDelete] = useState("")
  const [percentage, setPercentage] = useState("");

  console.log("%%%%%% STATE %%%%%%%");

  const handleAllClear = () => {
    setMemoryNumber(0);
    setDisplayNumber(0);
    setActionNumber(0);
    setAction("add");
    setDecimal("");
  };

  const handlePercentage = () => {
    const percentage = 0.01 * actionNumber;
    setPercentage(percentage);
    setDisplayNumber(percentage);
    setActionNumber(percentage);
    console.log(percentage);
    console.log("π ~ handlePercentage ~ handlePercentage", handlePercentage);
  };

  const handleDeleteClick = () => {
    console.log("π ~ handleDeleteClick ~ handleDeleteClick");

    const actionNumberString = `${actionNumber}`;
    console.log(
      "π ~ handleDeleteClick ~ actionNumberString",
      actionNumberString
    );

    const splitNum = actionNumberString.split(".");
    console.log("π ~ handleDeleteClick ~ splitNum", splitNum);
    const numbersAfterDecimal = splitNum[1] || "";
    console.log(
      "π ~ handleDeleteClick ~ numbersAfterDecimal",
      numbersAfterDecimal
    );
    const numberOfDecimalPlaces = numbersAfterDecimal.length;
    console.log(
      "π ~ handleDeleteClick ~ numberOfDecimalPlaces",
      numberOfDecimalPlaces
    );
    const afterDecimalNumber = Number(actionNumberString).toFixed(
      numberOfDecimalPlaces
    );
    console.log(
      "π ~ handleDeleteClick ~ afterDecimalNumber",
      afterDecimalNumber
    );

    const updatedNumberString = afterDecimalNumber.slice(0, -1);
    console.log(
      "π ~ handleDeleteClick ~ updatedNumberString",
      updatedNumberString
    );

    if (afterDecimalNumber === Number(actionNumberString).toFixed(1)) {
      const updatedNumber = Math.trunc(Number(actionNumberString));
      setActionNumber(updatedNumber);
      setDisplayNumber(updatedNumber);
    } else {
      const updatedNumber =
        updatedNumberString === "" ? "0" : updatedNumberString;
      setActionNumber(updatedNumber);
      setDisplayNumber(updatedNumber);
    }

    // const updatedNumber = updatedNumberString === "" ? 0 : updatedNumberString;

    // console.log("π ~ handleDeleteClick ~ updatedNumber", updatedNumber);
    // '12' = 12
    // '1' = 1
    // '' = 0

    // setActionNumber(updatedNumber);
    // setDisplayNumber(updatedNumber);
  };

  const handleNumberClick = (value) => {
    console.log("π ~ handleNumberClick ~ value", value);
    console.log("π ~ file: App.js ~ line 31 ~ handleNumberClick", value);

    const isInteger = actionNumber.toString().split(".").length === 1;
    // 65 --> 1 = whole number
    // 27.5 --> 2 = has a decimal
    console.log("π ~ handleNumberClick ~ isInteger", isInteger, actionNumber);

    const newNumberString = `${actionNumber}${
      decimal && isInteger ? "." : ""
    }${value}`;
    console.log("π ~ handleNumberClick ~ newNumberString", newNumberString);

    // '165.986.'.split('.') --> ['165', '986']
    const splitNum = newNumberString.split(".");
    console.log("π ~ handleNumberClick ~ splitNum", splitNum);
    const numbersAfterDecimal = splitNum[1] || "";
    console.log(
      "π ~ handleNumberClick ~ numbersAfterDecimal",
      numbersAfterDecimal
    );
    const numberOfDecimalPlaces = numbersAfterDecimal.length;
    console.log(
      "π ~ handleNumberClick ~ numberOfDecimalPlaces",
      numberOfDecimalPlaces
    );
    const newNumber = Number(newNumberString).toFixed(numberOfDecimalPlaces);

    console.log("π ~ handleNumberClick ~ newNumber", newNumber);

    setDecimal("");
    setActionNumber(newNumber);
    setDisplayNumber(newNumber);
    // setMemoryNumber(newNumber);
  };

  // const handleNumberClick = (value) => {
  //   // const isInteger = actionNumber % 1 === 0;
  //   console.log("π ~ handleNumberClick ~ value", value);
  //   console.log("π ~ handleNumberClick ~ decimal", decimal);
  //   console.log("π ~ handleNumberClick ~ actionNumber", actionNumber);
  //   const newNumberString = `${actionNumber}${decimal}${value}`;
  //   console.log("π ~ handleNumberClick ~ newNumberString", newNumberString);
  //   const newNumber = Number(newNumberString);
  //   console.log("π ~ handleNumberClick ~ newNumber", newNumber);

  //   setDecimal("");
  //   setActionNumber(newNumber);
  //   setDisplayNumber(newNumber);
  // };

  const handleDecimalClick = () => {
    console.log("π ~ handleDecimalClick ~ handleDecimalClick");
    setDecimal("."); // true γ§γε―θ½
  };

  const handleActionClick = (action) => {
    console.log("π ~ handleActionClick ~ handleActionClick", action);
    setAction(action);
    setActionNumber(0);
    if (actionNumber) {
      handleCalculate();
    }
  };

  const handlePlusMinus = () => {
    console.log("π ~ handlePlusMinus ~ handlePlusMinus");
    if (actionNumber > 0) {
      const updatedNumber = -Math.abs(actionNumber);
      setDisplayNumber(updatedNumber);
      setActionNumber(updatedNumber);
    } else {
      const updatedNumber = Math.abs(actionNumber);
      setDisplayNumber(updatedNumber);
      setActionNumber(updatedNumber);
    }
  };

  const handleCalculate = () => {
    console.log("π ~ handleCalculate ~ handleCalculate", action);
    if (action === "add") {
      const newValue = Number(memoryNumber) + Number(actionNumber);
      setDisplayNumber(newValue);
      setMemoryNumber(newValue);
      setActionNumber(0);
    } else if (action === "minus") {
      const newValue = Number(memoryNumber) - Number(actionNumber);
      setDisplayNumber(newValue);
      setMemoryNumber(newValue);
      setActionNumber(0);
    } else if (action === "times") {
      const newValue = Number(memoryNumber) * Number(actionNumber);
      setDisplayNumber(newValue);
      setMemoryNumber(newValue);
      setActionNumber(0);
    } else if (action === "divide") {
      const newValue = Number(memoryNumber) / Number(actionNumber);
      setDisplayNumber(newValue);
      setMemoryNumber(newValue);
      setActionNumber(0);
    } else {
      console.log("NO_ACTION");
    }
  };

  return (
    <div className="calcContainer">
      <div className="calc-app">
        <div className="inputContainer">
          <input className="CalcInput" type="text" value={displayNumber} />
        </div>
        <div className="container">
          <button className="button-light-gray" onClick={handleAllClear}>
            AC
          </button>
          <button className="button-light-gray" onClick={handlePlusMinus}>
            +/-
          </button>
          <button className="button-light-gray" onClick={handlePercentage}>
            %
          </button>
          <button
            className="button-orange"
            onClick={() => handleActionClick("divide")}
          >
            /
          </button>
          <button className="digits" onClick={() => handleNumberClick(7)}>
            7
          </button>
          <button className="digits" onClick={() => handleNumberClick(8)}>
            8
          </button>
          <button className="digits" onClick={() => handleNumberClick(9)}>
            9
          </button>
          <button
            className="button-orange"
            onClick={() => handleActionClick("times")}
          >
            Γ
          </button>
          <button className="digits" onClick={() => handleNumberClick(4)}>
            4
          </button>
          <button className="digits" onClick={() => handleNumberClick(5)}>
            5
          </button>
          <button className="digits" onClick={() => handleNumberClick(6)}>
            6
          </button>
          <button
            className="button-orange"
            onClick={() => handleActionClick("minus")}
          >
            -
          </button>
          <button className="digits" onClick={() => handleNumberClick(1)}>
            1
          </button>
          <button className="digits" onClick={() => handleNumberClick(2)}>
            2
          </button>
          <button className="digits" onClick={() => handleNumberClick(3)}>
            3
          </button>
          <button
            className="button-orange"
            onClick={() => handleActionClick("add")}
          >
            +
          </button>
          <button className="zero" onClick={() => handleNumberClick(0)}>
            0
          </button>
          <button className="del" onClick={() => handleDeleteClick()}>
            DEL
          </button>
          <button name="." className="dot" onClick={() => handleDecimalClick()}>
            .
          </button>
          <button
            className="button-orange equal"
            onClick={handleCalculate}
          ></button>
        </div>
      </div>
      <Link to="/" className="CalcLink">
        Home
      </Link>
    </div>
  );
}

export default App;
