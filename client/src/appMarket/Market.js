import './market.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../index";
import {HandySvg} from 'handy-svg';


export const IconValentine = () => (
    <HandySvg
        src={"icons/valentine.svg"}
        className="icon"
        width="40"
        height="40"
    />
);

const Market = () => {
    const [content, setContent] = useState([])

    useEffect(() => {
        getContent()
    }, [])

    const getContent = (data) => {
        axios.get(API_URL).then(data => setContent(data.data))
    }

    const resetState = () => {
        getContent();
    };

    return (
        <main>
            <IconValentine/>
            <h1>Очень крутое приложение</h1>
        </main>
    )
}

export default Market;