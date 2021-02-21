import * as React from 'react'
import {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'


const useDifference = (t: string, zone: string) => {
    let time: any = new Date(`2021-02-21T${t}${zone}`)
    let localTime: any = new Date();
    
    let dif: number = time - localTime;

    return dif
}

const returnTime = (time: number) => {
    if (time < 0) {
        return (`00`)
    } else if (time < 10) {
        return (`0${time}`)
    } else {
        return time
    }
}


const Timer = () => {
    let timeDif: number = useDifference("14:00", '+03:00');

    const [active, setActive] = useState<boolean>(false)
    const [millisec, setMillisec] = useState<number>(timeDif);

    const time = (time: number) => {

        if (time <= 0 && !active) {
            time = 0
            setActive(true);
            return <div className={styles.time}>00 : 00 : 00</div>
        }
        let second: number = 1000;
        let minute: number = second * 60;
        let hour: number = minute * 60;
        let hours: number = Math.floor(time / hour);
        let minutes: number = Math.floor((time % hour) / minute);
        let seconds: number = Math.floor((time % minute) / second);        
        
        return <div className={styles.time}>{returnTime(hours)} : {returnTime(minutes)} : {returnTime(seconds)}</div>
    }


    useEffect(() => {
        millisec > 0 && !active && setTimeout(() => setMillisec(millisec - 1000), 1000);
    }, [millisec]);

    return (
        <div className={styles.timer}>
            {time(millisec)}
            <div className={styles.video}>            
                <iframe className={active ? styles.activeVideo : styles.justVideo} width="250" height="150" src="https://www.youtube.com/embed/0idvYIGCiG8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>        
            </div>
        </div>
    )
    
}

export  default  Timer