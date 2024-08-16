export function BillInput({ billInput, onHandleBillInput }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input type="text" value={billInput} onChange={onHandleBillInput} />
    </div>
  );
}
