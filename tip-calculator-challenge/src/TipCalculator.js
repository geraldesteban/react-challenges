import { useState } from "react";
import { Reset } from "./Reset";
import { Output } from "./Output";
import { SelectPercentage } from "./SelectPercentage";
import { BillInput } from "./BillInput";

export function TipCalculator() {
  const [billInput, setBillInput] = useState("0");
  const [youPercent, setYouPercent] = useState(0);
  const [friendPercent, setFriendPercent] = useState(0);

  function handleBillInput(e) {
    setBillInput(e.target.value);
  }

  function handleYouSetPercent(e) {
    setYouPercent(Number(e.target.value));
  }

  function handleFriendSetPercent(e) {
    setFriendPercent(Number(e.target.value));
  }

  function handleReset() {
    setBillInput("0");
    setYouPercent(0);
    setFriendPercent(0);
  }

  return (
    <div>
      <BillInput billInput={billInput} onHandleBillInput={handleBillInput} />
      <SelectPercentage
        youPercent={youPercent}
        onHandleYouSetPercent={handleYouSetPercent}
        friendPercent={friendPercent}
        onHandleFriendSetPercent={handleFriendSetPercent}
      />
      <Output
        billInput={billInput}
        youPercent={youPercent}
        friendPercent={friendPercent}
      />
      <Reset onHandleReset={handleReset} />
    </div>
  );
}
