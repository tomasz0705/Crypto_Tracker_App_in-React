import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__content">
                    <Link to="/" className="footer__logo">CryptoTrackerApp</Link>
                    <p className="footer__text">CryptoTrackerApp provides a basic analysis of the crypto market such as tracking price, volume and market capitalization.
                        Search for cryptocurrencies that interest you. Database is provided by CoinGecko.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;