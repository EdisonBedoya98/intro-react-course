import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css";
function ChangeAlert({show, toggleShow}){
    if (show){
        return (
            <div className='changeAlert'>
                 <h3  className='changeAlert__title'>CAMBIOS DETECTADOS</h3>
                 <p className='changeAlert__text'>¿Desea volver a recargar la pagina para obtener los datos mas actuales?</p>
                 <button 
                    className='changeAlert__reloadbtn'
                    onClick={() => toggleShow()}
                 >Volver a cargar la información</button>
            </div>
        );
    } else{
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener };