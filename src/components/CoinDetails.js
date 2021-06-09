import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API_URL } from '../api/constants';
import CoinData from './CoinData';

function CoinDetails() {
    const { id } = useParams();
    const [coinInfo, setCoinInfo] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/coins/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(response => response.json())
        .then(data => setCoinInfo(data))
        .catch(error => {
            console.log("error", error);
        });
    }, [id]);

    return (
        <CoinData key={coinInfo.id} data={coinInfo}/>
    );
}

export default CoinDetails;