import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react"
import  axios from "axios";
import RequestComp from "./RequestComp";
import RequestCompContainer from "./RequestCompContainer";
import Config from "../../utils/Config";

const fetch = () => {
    const [requests, setreq] = useState([])
    useEffect(()=> {
        apifet()
    }, [])

    const apifet = async () => {
        const data = await fetch(`${Config.baseUrl}/Request/getAll`)
        const dataJson = await data.json()
        setreq(dataJson)
    }

    return (
        <RequestCompContainer  request={requests}/>
    )
}

export default fetch;
