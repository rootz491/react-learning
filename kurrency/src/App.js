import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css"
import Currency from "./currency";

const ACCESS_KEY = "access_key=a359887036d4f580d3c12a0acc42fbeb";
const BASE_URL = "http://api.exchangeratesapi.io/v1";


const App = () => {
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [fromCurrency, setFromCurrency] = useState("");
    const [toCurrency, setToCurrency] = useState("");
    const [exchangeRate, setExchangeRate] = useState();
    const [amount, setAmount] = useState(1);
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
    
    let fromAmount, toAmount;
    if (amountInFromCurrency) {
        fromAmount = amount;
        toAmount = amount * exchangeRate;
    }
    else {
        toAmount = amount;
        fromAmount = amount / exchangeRate;
    }

    useEffect(() => {
        fetch(`${BASE_URL}/latest?${ACCESS_KEY}`)
        .then(res => res.json())
        .then(data => {
            let firstCurrency = Object.keys(data.rates)[1];
            setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
            setFromCurrency(data.base);
            setToCurrency(firstCurrency);
            setExchangeRate(data.rates[firstCurrency]);
        });
    }, []);

    function handleFromAmountChange(e) {
        setAmount(e.target.value);
        setAmountInFromCurrency(true);
    }

    function handleToAmountChange(e) {
        setAmount(e.target.value);
        setAmountInFromCurrency(false);
    }

    return (
        <Root>
            <h1>Hello World</h1>
            <Currency 
                onChangeCurrency={e => setFromCurrency(e.target.value)}
                currencyOptions={currencyOptions}
                selectCurrency={fromCurrency}
                amount={fromAmount}
                onChangeAmount={handleFromAmountChange}
            />
            <h3>👇</h3>
            <Currency
                onChangeCurrency={e => setToCurrency(e.target.value)} 
                currencyOptions={currencyOptions}
                selectCurrency={toCurrency} 
                amount={toAmount}
                onChangeAmount={handleToAmountChange}
            />
        </Root>
    );
}

export default App;

const Root = styled.div`
    height: 100vh;
    display: grid;
    place-content: center;
    text-align: center;
`;