import React from 'react';
import { Link } from 'react-router-dom';

const Coins = ({ coin }) => {
    return (
        <div className="coin__content container">
            <div className="coin__row">
                <div className="coin__single">
                    <img className="coin__image" src={coin.image} alt="crypto" />
                    <Link to={`/coins/${coin.id}`} className="coin__link tooltip">{coin.name}
                        <span className="tooltiptext">Click to learn more</span>
                    </Link>
                    <p className="coin__symbol">{coin.symbol}</p>
                </div>
            </div>
        </div>
    );
}

export default Coins;