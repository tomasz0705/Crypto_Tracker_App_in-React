import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__container container">
                <Link to="/" className="footer__logo">CryptoTrackerApp</Link>
                <div className="footer__copyright">Copyright &#169; Tomasz Stolarczyk. All Rights Reserved.</div>
                {/* <p className="footer__text">CryptoTrackerApp provides a basic analysis of the crypto market such as tracking price, volume and market capitalization.
                    Search for cryptocurrencies that interest you. Database is provided by CoinGecko.
                </p> */}
            </div>
        </div>
    );
}

export default Footer;