import "./global.scss";
import styles from "./app.module.scss";
import ToDo from "./components/Todo/Todo";

const App = () => {
  return (
    <main className={styles["app"]}>
      <ToDo />
    </main>
  );
};

export default App;
