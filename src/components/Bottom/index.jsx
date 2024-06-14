import Styles from "./styles.module.css";
const Bottom = () => {
  return (
    <div className={Styles.footer}>
      <p className={Styles.textFooter}>
        Desenvolvido por{" "}
        <a href="https://github.com/TheCarvalho" target="_blank">
          Abdon Carvalho
        </a>
      </p>
    </div>
  );
};

export default Bottom;
