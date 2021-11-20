import React from "react";
import './TodoList.css';

function TodoList(props){
    //Valida si se envia una render prop o una render function para saber que renderizar
    const renderFunc = props.children || props.render;
    return(
        <section className="TodoList-container">
            {/* llamado a las render props  */}
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos)&&props.onEmptyTodos()}
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
            
            {/* Una version simplificada al llamado del render funtion*/}
            {/* {props.searchedTodos.map(todo =>props.render(todo))} */}
            {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}

            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};