import { NewTodo } from "./InputTodo";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsCheckLg } from "react-icons/bs";
import { ImFileText2 } from "react-icons/im";

import styles from "./listTodo.module.scss";

interface ListTodoProps {
  todos: NewTodo[];
  onDeleteTodo: (todoToDelete: NewTodo) => void;
  onCheckedTodo: (id: string) => void;
}

const ListTodo = ({ todos, onDeleteTodo, onCheckedTodo }: ListTodoProps) => {
  //Handle Delete Todo
  const handleDeleteTodo = (todoToDelete: NewTodo) => {
    onDeleteTodo(todoToDelete);
  };

  // Handle Toggle Todo
  const handleToggleTodo = (id: string) => {
    onCheckedTodo(id);
  };

  const checkedTodosCount = todos.reduce((count: number, todo: NewTodo) => {
    if (todo.isChecked) {
      return count + 1;
    }
    return count;
  }, 0);

  const createdTasks = todos.length;

  return (
    <div className={styles["listTodo"]}>
      <div className={styles["createdTasks"]}>
        <p className={styles["created"]}>
          Tarefas criadas <span>{createdTasks}</span>
        </p>
        <p className={styles["completed"]}>
          Concluídas{" "}
          <span>
            {createdTasks > 0
              ? `${checkedTodosCount} de ${createdTasks}`
              : `${createdTasks}`}
          </span>
        </p>
      </div>

      {createdTasks ? (
        <ul className={styles["listContent"]}>
          {todos.map((todo) => {
            return (
              <li key={todo.id} className={styles["list"]}>
                <div
                  className={`${styles["content"]} ${
                    todo.isChecked ? `${styles["content-isChecked"]}` : ""
                  }`}
                  onClick={() => handleToggleTodo(todo.id)}
                >
                  <span>{todo.isChecked && <BsCheckLg />}</span>

                  <p>{todo.title}</p>
                </div>

                <button onClick={() => handleDeleteTodo(todo)} title="delete">
                  <RiDeleteBinLine />
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={styles["noListContent"]}>
          <ImFileText2 />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
          </p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </div>
  );
};

export default ListTodo;
