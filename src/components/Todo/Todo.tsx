import InputTodo from "./InputTodo";
import styles from "./todo.module.scss";

const ToDo = () => {
  return (
    <section className={styles["todo"]}>
      <div className={`container ${styles["todo-container"]}`}>
        <InputTodo />
      </div>
    </section>
  );
};

export default ToDo;
