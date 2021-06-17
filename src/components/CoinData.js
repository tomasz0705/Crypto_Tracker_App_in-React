import React from 'react';
import moment from 'moment';

function CoinData({ data }) {
    console.log(data);
    return (
        <div className="details__container container">
            <div className="details__row">
                <img src={data?.image?.small} alt={data?.id} />
                <h2 className="details__header">{data?.name}</h2>
                <p className="details__symbol">({data?.symbol})</p>
                <span className="details__currprice">${data?.market_data?.current_price?.usd.toLocaleString()}</span>
                <span className={data?.market_data?.price_change_percentage_24h < 0 ? "details__percentage24--danger" : "details__percentage24--success" }>
                    {data?.market_data?.price_change_percentage_24h < 0 ? <i className="fas fa-sort-down"></i> : <i className="fas fa-sort-up"></i>}
                    {data?.market_data?.price_change_percentage_24h.toFixed(2)}%
                </span>
                <span style={{fontSize: 16, color: "#e2e2e2"}}> / 24h</span>
            </div>
            <div className="details__table">
                <table className="table">
                    <thead>
                        <tr>
                            <th colSpan={2}><span>{data?.name} </span>Price and Market Stats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>{data?.symbol}</span> Price</td>
                            <td>{data?.market_data?.current_price?.usd.toLocaleString()} USD</td>
                        </tr>
                        <tr>
                            <td>Market Cap</td>
                            <td>{data?.market_data?.market_cap?.usd.toLocaleString()} USD</td>
                        </tr>
                        <tr>
                            <td>24 Hour Trading Vol</td>
                            <td>{data?.market_data?.total_volume?.usd.toLocaleString()} USD</td>
                        </tr>
                        <tr>
                            <td>24h Low / 24h High</td>
                            <td>{data?.market_data?.low_24h?.usd.toLocaleString()} USD / {data?.market_data?.high_24h?.usd.toLocaleString()} USD</td>
                        </tr>
                        <tr>
                            <td>Market Cap Rank</td>
                            <td>#{data?.market_cap_rank}</td>
                        </tr>
                        <tr>
                            <td>Fully Diluted Valuation</td>
                            <td>{data?.market_data?.fully_diluted_valuation?.usd ? data?.market_data?.fully_diluted_valuation?.usd.toLocaleString() + " USD" : "Brak danych"}</td>
                        </tr>
                        <tr>
                            <td>Max Supply</td>
                            <td>{data?.market_data?.max_supply ? data?.market_data?.max_supply.toLocaleString() : "Brak danych"}</td>
                        </tr>
                        <tr>
                            <td>All-Time High</td>
                            <td>{data?.market_data?.ath?.usd ? data?.market_data?.ath?.usd.toLocaleString() + " USD" : "Brak danych"}
                                <span style={{marginLeft: "10px"}} className={data?.market_data?.ath_change_percentage?.usd < 0 ? "table__athchangepercent--danger" : "table__athchangepercent--success"}>
                                    {data?.market_data?.ath_change_percentage?.usd.toFixed(1)}%
                                </span>
                                <br/>
                                <span style={{fontSize: "11px"}}>{moment(data?.market_data?.ath_date?.usd).utc().format('MMM DD, YYYY')} </span>
                                <span style={{fontSize: "11px", textTransform: "lowercase"}}>({moment(data?.market_data?.ath_date?.usd).fromNow()})</span>
                            </td>
                        </tr>
                        <tr>
                            <td>All-Time Low</td>
                            <td>{data?.market_data?.atl?.usd ? data?.market_data?.atl?.usd.toLocaleString() + " USD" : "Brak danych"}
                                <span style={{marginLeft: "10px"}} className={data?.market_data?.atl_change_percentage?.usd < 0 ? "table__athchangepercent--danger" : "table__athchangepercent--success"}>
                                    {data?.market_data?.atl_change_percentage?.usd.toFixed(1)}%
                                </span>
                                <br/>
                                <span style={{fontSize: "11px"}}>{moment(data?.market_data?.atl_date?.usd).utc().format('MMM DD, YYYY')} </span>
                                <span style={{fontSize: "11px", textTransform: "lowercase"}}>({moment(data?.market_data?.atl_date?.usd).fromNow()})</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="details__description">
                <h2 className="description__title">What is {data?.name}?</h2>
                <div className="description__text" dangerouslySetInnerHTML={{__html: data?.description?.en}}></div>
            </div>
        </div>
    );
}

export default CoinData;