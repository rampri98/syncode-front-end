import styles from './join-session-btn.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const JoinSessionBtn = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleJoin = () => {
    navigate(`/${code}`);
  }
  
  return (
    <>
      <input className={styles.codeInput} type="text" value={code} onChange={(e) => {setCode(e.target.value)}} placeholder='Enter text'/>
      <button className={styles.joinBtn} onClick = {handleJoin}>Join</button>
    </>
  );
}
export default JoinSessionBtn;