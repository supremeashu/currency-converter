import {useEffect, useState} from "react"

// created a custom hook for using api and to provide information regarding the differnt currency rates
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
        )
        .then((res) => res.json())
        .then((res) => setData(res[currency]));
        // console.log(data);
    }, [currency])
    //check the json format of api in console by loging data
    // console.log(data);
    return data
}

export default useCurrencyInfo;