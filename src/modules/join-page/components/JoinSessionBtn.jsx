import styles from './../css/join-page.module.css';


const JoinSessionBtn = () => (
  <>
    <input className={styles.codeInput} type="text" placeholder="Enter a code or link" />
    <button className={styles.joinBtn} disabled>Join</button>
  </>
);

export default JoinSessionBtn;