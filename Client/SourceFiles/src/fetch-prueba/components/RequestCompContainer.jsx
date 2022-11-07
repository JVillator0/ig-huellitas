import React from "react";
import RequestComp from "./RequestComp.jsx";


const RequestCompContainer = ({requests}) => {
    return (
        <div>
            {requests.map( r => (
                <RequestComp
                posibleadoptador={r.posibleadoptador}
                fechadesolicitud={r.fechadesolicitud}
                publicacion={r.publicacion}
                telefono={r.telefono}
                direccion={r.direccion}
                mensaje={r.mensaje}
                estado={r.estado}
                />               
            )

            )}
        </div>
    )
}



export default RequestCompContainer;