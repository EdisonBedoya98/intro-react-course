import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { Modal } from "../Modal";
import "./App.css";
import { Skeleton } from "../Skeleton";
import { TodoHeader } from "../TodoHeader";
import { ChangeAlert } from "../ChangeAlert";

function App() {
  const { state, stateUpdaters } = useTodos();
  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
  } = state;

  const {
    setSearchValue,
    addTodo,
    completeTodo,
    deleteTodo,
    setOpenModal,
    sincronizeTodos,
  } = stateUpdaters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searhValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        // Render props
        onError={() => <p>Hubo un error...</p>}
        onLoading={() => <Skeleton />}
        onEmptyTodos={() => <p>No hay nada para mostrar</p>}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      >
        {/* Render function  */}
        {/* {todo => (
        <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
      />
      )} */}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}></TodoForm>
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />

      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export default App;
