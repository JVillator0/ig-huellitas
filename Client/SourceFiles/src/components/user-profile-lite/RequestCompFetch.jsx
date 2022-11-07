import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react"
import  axios from "axios";
import RequestComp from "./RequestComp";

import Config from "../../utils/Config";
import swal from "sweetalert";
const RequestCompContainer = (props) => {
    const [requests, setreq] = useState([       ])
    useEffect(()=> {
        axios.get(`${Config.baseUrl}/Request/getAll`)
              .then(response => {
                  setreq(response.data)
              }).catch(error => {
          swal("Algo salio mal", "Intentalo de nuevo", "error")
        })
    }, [])


    return (
        <RequestComp  request={requests} recd={props.recd}/>
    )
}

export default RequestCompContainer;
