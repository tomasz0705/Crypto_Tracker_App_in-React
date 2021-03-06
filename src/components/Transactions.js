import React, { useState, useEffect } from 'react';
import { API_URL } from '../api/constants';

function Transactions() {
    const [form, setForm] = useState({
        crypto: "",
        buysell: "",
        number: "",
    });
    const [coins, setCoins] = useState([]);

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
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const transactionValue = coins.find(coin => {
            return coin.name === form.crypto
        }).current_price * form.number;

        console.log("transactionValue", transactionValue);
        console.log(form, coins);
        const transactionsRow = document.querySelector(".transactions__list");
        const newTransaction = document.createElement("tr");
        transactionsRow.appendChild(newTransaction);
        newTransaction.classList.add("transactions__row");
        newTransaction.innerHTML = `
            <td>${form.crypto}</td>
            <td>${form.buysell}</td>
            <td>${form.number}</td>
            <td className="total-value-row">$${transactionValue.toFixed(2)}</td>
        `;
    }

    const handleClearRows = (event) => {
        event.preventDefault();
        const tableRowsInList = document.querySelectorAll(".transactions__row");
        tableRowsInList.forEach((tr) => tr.remove());
    }

    // var transaction = {
    //     cryptocurrency: form.crypto,
    //     boughtsold: form.buysell,
    //     cryptocount: form.number
    // }

    // localStorage.setItem("transaction", JSON.stringify(transaction));

    return (
        <div className="transactions">
            <div className="transactions__container container">
                <form className="transactions__form">
                    <div>
                        <label>
                            Choose a crypto currency:
                        </label>
                        <select className="form__select" name="crypto" id="currency-select" value={form.crypto} onChange={handleChange}>
                            <option value="-">--Please choose an option--</option>
                            {coins.map((coin) => {
                                return <option key={coin.id} value={coin.name}>{coin.name}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <label>Buy / sell:</label>
                        <select className="form__select" name="buysell" id="buysell-select" value={form.buysell} onChange={handleChange}>
                            <option value="-">--Please choose an option--</option>
                            <option value="Bought">Bought</option>
                            <option value="Sold">Sold</option>
                        </select>
                    </div>
                    <div>
                        <label>Count of crypto currency:</label>
                        <input className="form__input"name="number" type="number" placeholder="Enter a number" min={0} step={0.01} value={form.number} onChange={handleChange}></input>
                    </div>
                    <div className="transactions__buttons">
                        <button className="btn btn__submit" type="submit" onClick={handleSubmit}>Submit</button>
                        <button className="btn btn__clear" onClick={handleClearRows}>Clear All</button>
                    </div>
                </form>
                <div className="transactions__history">
                    <h1>History of cryptocurrency transactions</h1>
                    <table className="transactions__table">
                        <thead>
                            <tr>
                                <th>Crypto Currency:</th>
                                <th>Bought/Sold:</th>
                                <th>Count of crypto currency:</th>
                                <th>Value:</th>
                            </tr>
                        </thead>
                        <tbody className="transactions__list">
                            {/* {transactions.map((transaction) => {
                                <Transaction data={transaction}></Transaction>
                            })} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Transactions;