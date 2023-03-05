import useStyles from './style';

const App = () => {
  const { styles } = useStyles();
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li className={styles.code}>
          To get started, edit <code>src/pages/index.js</code> and save to
          reload.
        </li>
        <li className={styles.code}>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
    </div>
  );
};

export default App;
