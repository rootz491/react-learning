import React from "react";
import shortid from "shortid";
import styled from "styled-components";


export default function Currency(props) {
    const {
        currencyOptions,
        selectCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount,
    } = props;

    return (
        <Wrapper>
            <Input onChange={onChangeAmount} defaultValue={amount} type="number"/>
            <Select onChange={onChangeCurrency} value={selectCurrency}>
                {currencyOptions.map(option => {
                    return <option key={shortid.generate()} value={option}>{option}</option>
                })}
            </Select>
        </Wrapper>
    );
}


const Wrapper = styled.div`
    display: flex;
    width: 300px;
    padding: 1em;
`;

const Input = styled.input`
    padding: 5px 8px;
    border: 1px solid black;
    margin-right: 1em;
`;

const Select = styled.select`
    border: 1px solid black; 
`;