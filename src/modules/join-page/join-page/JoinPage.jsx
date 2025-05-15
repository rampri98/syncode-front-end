import styles from './join-page.module.css'
import NewSessionBtn from '../new-session-btn/NewSessionBtn';
import JoinSessionBtn from '../join-session-btn/JoinSessionBtn';


const JoinPage = () => (
  <div className={styles.joinPage}>
    <div className={styles.container}>
        <h1>Syncode</h1>
        <p>Jump into a doc with your team and co-edit instantly. When you're done, it’s gone — clean and easy.</p>

        <div className={styles.actions}>
            <NewSessionBtn />
            <JoinSessionBtn />
        </div>
        
        <div className={styles.footer}>
            <span>Learn more</span> about Syncode
        </div>
    </div>
  </div>
);

export default JoinPage;