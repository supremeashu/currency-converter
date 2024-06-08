import React, {useId} from 'react'
// created the Input box here where you can set amount, choose currency
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
          {/* from to ke lia */}
          <label
            htmlFor={amountInputId}
            className="text-black/70 mb-2 font-medium inline-block"
          >
            {label}
          </label>
          {/* amount enter aur +-1 ke lia */}
          <input
            id={amountInputId}
            className="outline-none w-full bg-transparent text-black py-1.5"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/70 font-medium mb-2 w-full">Currency Type</p>
          {/* different currency val show karne ke lia */}
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
}

export default InputBox;