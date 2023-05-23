import LogoTodo from "../../assets/logo-todo.svg";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={`container`}>
        <div className={styles["content"]}>
          <img src={LogoTodo} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
