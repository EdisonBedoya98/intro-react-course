import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";
function ChangeAlert({sincronize}){
    const {show, toggleShow}= useStorageListener(sincronize);
    if (show){
        return (
            <div className='changeAlert'>
                 <h3  className='changeAlert__title'>CAMBIOS DETECTADOS</h3>
                 <p className='changeAlert__text'>¿Desea volver a recargar la pagina para obtener los datos mas actuales?</p>
                 <button 
                    className='changeAlert__reloadbtn'
                    onClick={() => toggleShow()}
                 >Recargar</button>
            </div>
        );
    } else{
        return null;
    }
}

export { ChangeAlert };