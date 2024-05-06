import styles from "./Buttons.module.css";
const Buttons = () => {
  const btnNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles["btns-container"]}>
      {btnNames.map((buttonNames) => (
        <button className={styles.btn}>{buttonNames}</button>
      ))}
    </div>
  );
};

export default Buttons;
