import styles from "../styles/Test.module.css";

export const Test = () => {
  return (
    <div className={styles.container}>
      style module
      <div
        style={{
          color: "red",
        }}
      >
        style in line
      </div>
    </div>
  );
};
