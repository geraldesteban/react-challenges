import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [rate, setRate] = useState(0);

  useEffect(
    function () {
      async function fetchCurrency() {
        try {
          const res =
            await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}
`);
          const data = await res.json();
          setRate(data.rates[toCurrency]);
        } catch (err) {}
      }
      if (fromCurrency === toCurrency) return setRate(amount);
      fetchCurrency();
    },
    [amount, fromCurrency, toCurrency]
  );
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={e => setAmount(+e.target.value)}
      />
      <select
        value={fromCurrency}
        onChange={e => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="PHP">PHP</option>
      </select>
      <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="PHP">PHP</option>
      </select>
      <p>{rate > 0 ? rate : ""}</p>
    </div>
  );
}
