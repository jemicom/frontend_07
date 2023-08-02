import React, { useState, useEffect } from 'react'
import './CoinDetail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend
} from "recharts";


const API= `https://api.coinpaprika.com/v1/tickers`

const CoinDetail = () => {
  const { symbol } = useParams();
  const [coin, setCoin] = useState({});
  const [chart, setChart] = useState();

  const axiosHandle = async ()=>{
    const datas = await axios.get(API);
    console.log(datas.data.length)
    const find = datas.data.find(item=>item.symbol === symbol)
    setCoin(find)

    console.log("coin ", coin)
  }

  const chartData = ()=>{
    const data = [
      {
        name: "1h",
        value : coin.quotes.USD.percent_change_1h, 
      },
      {
        name: "6h",
        value : coin.quotes.USD.percent_change_6h, 
      },
      {
        name: "12h",
        value : coin.quotes.USD.percent_change_12h, 
      },
      {
        name: "24h",
        value : coin.quotes.USD.percent_change_24h, 
      }    
    ];

    return data;
  }
  useEffect(()=>{
      axiosHandle();
      setChart(chartData());
  }, [])

  return (
    <div>

        <h1>CoinDetail  {symbol}</h1>
        <LineChart
            width={1000}
            height={600}
            data={chart}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="10 3 3 3 3 3" 
                      stroke="yellowgreen"
            />
            <XAxis dataKey="name"/>
            <YAxis />
            <Legend />
            <Line
              dataKey="value"
              stroke="#8884d8"
              dot={{ stroke: 'red', strokeWidth: 2, fill : "purple" }}
              activeDot={{ stroke: 'red', strokeWidth: 2, r: 10 }} 
              strokeDasharray="10 10 5 5"
            />
            <Line  dataKey="value" stroke="#82ca9d" /> 
        </LineChart>
    
    </div>
    // chart 
  )
}

export default CoinDetail