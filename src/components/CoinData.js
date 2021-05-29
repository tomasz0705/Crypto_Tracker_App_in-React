import React from 'react';

function CoinData({ data }) {
    console.log(data);
    return (
        <>
            <div className="coin__details container">
                <div className="details__content">
                    <div className="details__row">
                        {/* <img src={data.image.small} alt={data.id} /> */}
                        <h2 className="details__header">{data.name}</h2>
                        <p className="details__symbol">({data.symbol})</p>
                        {/* {<span className="details__currprice">{data.market_data.current_price.usd}</span>} */}
                        {/* <span className="details__percentage24">{data.market_data.price_change_percentage_24h}</span> */}
                    </div>
                    <h1>{data.name} Price and Market Stats</h1>
                </div>
            </div>
        </>
    );
}

export default CoinData;