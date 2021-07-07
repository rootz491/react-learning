import React, { useEffect, useState } from "react";
import styled from "styled-components";


const Quote = () => {
    //  set states
    const [quote, setQuote] = useState('');

    
    //  load quote before rendering
    useEffect(() => {
        //  function to get quote thru api
        const getQuote = async () => {
            try {
                const res = await fetch("https://api.adviceslip.com/advice");
                const data = await res.json();
                //  set data to `quote` state var.
                setQuote(data.slip.advice);
            }
            catch (err) {
                console.log(err);
                setQuote(err.message);
            }
        }
        //  just call getQuote and it'll fetch the data
        getQuote();
    }, [])


    return (
        <QuoteCover>`{quote}`</QuoteCover>
    );
}

export default Quote;


const QuoteCover = styled.h2`
    font-size: 30px;
    color: gray;
`