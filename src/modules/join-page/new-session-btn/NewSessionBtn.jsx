import { useState, useEffect, useRef } from 'react';
import styles from './new-session-btn.module.css';
import { useNavigate } from 'react-router-dom';


const NewSessionBtn = ({setLoading}) => {
    
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();
    const navigate = useNavigate();

    useEffect(()=>{
        const handler = (event) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("click", handler)

        return () => {
            document.removeEventListener("click", handler)
        }
    }, [dropdownRef])


    const items = [
        {
            title: "Java",
            id: "java"
        },
        {
            title: "Python",
            id: "python"
        }
    ];

    const handleClick= (id) => {
        setLoading(true);
        navigate(`/12345`);
    }

    return (
    <div className={styles.dropdown} ref={dropdownRef}>
        <button className={styles.newMeeting} onClick={() => {setOpen((open) => !open)}}>
            <span className={styles.icon}>📹</span> New session
        </button>
        <div className={`${styles.dropdownContent} ${open && styles.contentOpen}`}>
            {
                items.map((e, i) => 
                    <div onClick={() => handleClick(e.id)} className={styles.dropdownItem} key={i}>{e.title}</div>
                )
            }
        </div>
    </div>);
};

export default NewSessionBtn;