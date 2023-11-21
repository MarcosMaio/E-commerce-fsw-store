import styles from "./styles/loading-animation.module.css";

const LoadingAnimation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        <div className={styles.bounceball}></div>
        <div className={styles.text}>LOADING ...</div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
