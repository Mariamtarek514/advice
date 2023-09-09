import React, { useEffect, useState } from "react";
import axios from "axios";
import dividerDesktop from "../assets/pattern-divider-desktop.svg";
import dividerMobile from "../assets/pattern-divider-mobile.svg";
import dice from "../assets/icon-dice.svg";
const Advice = () => {
    const [data, setData] = useState([]);
    const giveAdvice = async () => {
        const API = "https://api.adviceslip.com/advice";
        const response = await axios({
            method: "get",
            url: API,
        });
        setData(response.data.slip);
    };

    useEffect(() => {
        giveAdvice();
    }, []);
    return (
        <div className="card">
            <p>Advice # {data.id}</p>
            <q>{data.advice}</q>
            <img
                src={dividerDesktop}
                className="divider-desktop"
                alt="divider"
            />
            <img src={dividerMobile} className="divider-mobile" alt="divider" />
            <figure className="dice" onClick={giveAdvice}>
                <img src={dice} alt="dice" />
            </figure>
        </div>
    );
};

export default Advice;
