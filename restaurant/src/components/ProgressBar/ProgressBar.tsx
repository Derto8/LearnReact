import { useEffect, useState } from "react";
import styles from './progress-bar.module.css';

export function ProgressBar(){
    const [progressPercent, setProgressPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setProgressPercent(scrollPercent);
        };  

        document.addEventListener("scroll", handleScroll)
     }, []);
   

    return (
        <div className={styles.progressBar} style={{width: `${progressPercent}%`}}></div>
    )
}