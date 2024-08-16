export function Output({ billInput, youPercent, friendPercent }) {
  const totalTip = (billInput * ((youPercent + friendPercent) / 2)) / 100;
  const totalAmount = +billInput + totalTip;

  return (
    <div>
      <p>{`You pay $${totalAmount.toFixed(
        2
      )} ($${+billInput} + $${totalTip.toFixed(2)} tip)`}</p>
    </div>
  );
}
