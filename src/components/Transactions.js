import React, { useState } from 'react';

function Transactions() {
    const [form, setForm] = useState({
        crypto: "",
        buysell: "",
        number: 0,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form); //skasowac potem
        const transactionsRow = document.querySelector(".transactions__list");
        const newTransaction = document.createElement("tr");
        transactionsRow.appendChild(newTransaction);
        newTransaction.classList.add("transactions__row");
        newTransaction.innerHTML = `
            <td>${form.crypto}</td>
            <td>${form.buysell}</td>
            <td>${form.number}</td>
            <td className="total-value-row"></td>
        `
    }


    const sumRow = () => {
        let getTotal = 0;
        let currencyValue = 34000; //przykładowa wartość crypto waluty;
        const valueEl = document.querySelector(".total-value-row");
        getTotal = currencyValue * form.number; // liczenie sumy
        valueEl.innerText = "$" + getTotal;
    }

    const handleClearRows = (event) => {
        event.preventDefault();
        const tableRowsInList = document.querySelectorAll(".transactions__row");
        tableRowsInList.forEach((tr) => tr.remove());
    }

    return (
        <div className="transactions container">
            <form>
                <div>
                    <label>
                        Choose a crypto currency:
                    </label>
                    <select name="crypto" id="currency-select" value={form.crypto} onChange={handleChange}>
                        <option value="-">--Please choose an option--</option>
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                        <option value="USDT">USDT</option>
                    </select>
                </div>
                <div>
                    <label>Buy/sell:</label>
                    <select name="buysell" id="buysell-select" value={form.buysell} onChange={handleChange}>
                        <option value="-">--Please choose an option--</option>
                        <option value="Bought">Bought</option>
                        <option value="Sold">Sold</option>
                    </select>
                </div>
                <div>
                    <label>Count of crypto currency:</label>
                    <input name="number" type="number" placeholder="Enter a number" min={0} step={0.01} value={form.number} onChange={handleChange}></input>
                </div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
                <button onClick={handleClearRows}>Clear</button>
            </form>
            <div style={{paddingTop: "50px"}} className="transactions__content">
                <h1 style={{fontSize: "24px", paddingBottom: "10px"}}>History of cryptocurrency transactions</h1>
                <table className="transactions__table">
                    <thead>
                        <tr>
                            <th style={{paddingRight: "40px"}}>Crypto Currency:</th>
                            <th style={{paddingRight: "40px"}}>Bought/Sold:</th>
                            <th style={{paddingRight: "40px"}}>Count of crypto currency:</th>
                            <th>Value:</th>
                        </tr>
                    </thead>
                    <tbody className="transactions__list"></tbody>
                </table>
            </div>
        </div>
    );
}

export default Transactions;