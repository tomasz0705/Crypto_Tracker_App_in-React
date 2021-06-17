import React, { useEffect, useState } from 'react';
import { API_URL } from "../api/constants";
import Coin from './Coin';

function CoinsList() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
      fetch(`${API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then(response => response.json())
      .then(data => setCoins(data))
      .catch(error => {
        console.log("error", error);
      });
    }, []);

    const handleChange = (event) => {
      setSearch(event.target.value);
    };

    const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className=" coin container">
            <div className="coin__search">
                <h1 className="coin__text">Search a currency</h1>
                <form>
                    <input type="text" placeholder="Search" className="coin__input" onChange={handleChange}/>
                </form>
            </div>
            <div className="coin__labels">
                <div className="coin__labels--label">Name:</div>
                <div className="coin__labels--label">Symbol:</div>
            </div>
                {filteredCoins.map(coin => {
                    return <Coin key={coin.id} coin={coin}/>;
                })}
      </div>
    );
}

export default CoinsList;
