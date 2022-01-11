import React, { useEffect, useState } from "react";
const CoinTracker = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [price, setPrice] = useState(1.0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const checkSelection = (event) => {
    const values = event.target.value.split(",");
    setSymbol(values[0]);
    setPrice(parseFloat(values[1]));
  };
  const MakeOptions = () => {
    return (
      <select onChange={checkSelection} defaultValue="--">
        <option disabled>--</option>
        {coins.slice(0, 5).map((coin, index) => (
          <option key={index} value={`${coin.symbol},${coin.quotes.USD.price}`}>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
    );
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : <MakeOptions />}
      <h2>
        $1 = {1 / price} / 1{symbol} = ${price}
      </h2>
    </div>
  );
};

export default CoinTracker;
