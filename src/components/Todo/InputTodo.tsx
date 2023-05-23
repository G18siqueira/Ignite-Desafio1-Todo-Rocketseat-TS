import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsPlusCircle } from "react-icons/bs";

import ListTodo from "./ListTodo";
import styles from "./inputTodo.module.scss";

export interface NewTodo {
  id: string;
  title: string;
  isChecked: boolean;
}

const InputTodo = () => {
  const [todos, setTodos] = useState<NewTodo[]>([]);
  const [inputValue, setInputValue] = useState("");

  // Handle Create New Todo
  const handleCreateNewTodo = (event: FormEvent) => {
    event.preventDefault();

    const newTodo: NewTodo = {
      id: uuidv4(),
      title: inputValue,
      isChecked: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  // Handle New Todo Change
  const handleNewTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("");
    setInputValue(event.target.value);
  };

  // Handle New Todo Invalid
  const handleNewTodoInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("Esse campo é obrigatório");
  };

  //Checked Todo
  const checkedTodo = (id: string) => {
    const toggleTodo = todos.map((todo) => {
      return todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo;
    });
    setTodos(toggleTodo);
  };

  // Delete Todo
  const deleteTodo = (todoToDelete: NewTodo) => {
    const todosWithoutDeleteOne = todos.filter((todo) => {
      return todo !== todoToDelete;
    });
    setTodos(todosWithoutDeleteOne);
  };

  return (
    <>
      <form onSubmit={handleCreateNewTodo} className={styles["formTodo"]}>
        <input
          type="text"
          name=""
          placeholder="Adicione uma nova tarefa"
          value={inputValue}
          onChange={handleNewTodoChange}
          onInvalid={handleNewTodoInvalid}
          required
        />
        <button type="submit">
          <span>Criar</span>
          <BsPlusCircle />
        </button>
      </form>

      <ListTodo
        todos={todos}
        onCheckedTodo={checkedTodo}
        onDeleteTodo={deleteTodo}
      />
    </>
  );
};

export default InputTodo;
