import { useState } from 'react';
import styles from './../css/join-page.module.css';


const NewSessionBtn = () => {
    
    const [clicked, setClicked] = useState(false);

    return clicked ? (
        <button className={styles.newMeeting} onClick={() => {setClicked(false)}}>
            <span className={styles.icon}>📹</span> Clicked
        </button>
    ) : (
        <button className={styles.newMeeting} onClick={() => {setClicked(true)}}>
            <span className={styles.icon}>📹</span> New session
        </button>
    );
};

export default NewSessionBtn;