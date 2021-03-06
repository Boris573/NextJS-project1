import React, {useState, useEffect} from 'react'
import styles from '../../styles/timer.module.css'


const useDifference = (t: string, zone: string) => {
    const time: Date = new Date(`2021-02-22T${t}${zone}`)
    const localTime: Date = new Date();
    const dif: number = time.getTime() - localTime.getTime();

    return dif
}

const timeToRender = (time: number) => {
    if (time < 0) {
        return ('00')
    } 
    if (time < 10) {
        return (`0${time}`)
    } 
    return time
}


const Timer = () => {
    const timeDif: number = useDifference('10:00', '+03:00');


    const [active, setActive] = useState<boolean>(false)
    const [millisec, setMillisec] = useState<number>(timeDif);

    const time = (timeInMillisec: number) => {

        if (timeInMillisec <= 0 && !active) {
            timeInMillisec = 0
            setActive(true);
            return <div className={styles.time}>00 : 00 : 00</div>
        }

        const second: number = 1000;
        const minute: number = second * 60;
        const hour: number = minute * 60;
        const hours: number = Math.floor(timeInMillisec / hour);
        const minutes: number = Math.floor((timeInMillisec % hour) / minute);
        const seconds: number = Math.floor((timeInMillisec % minute) / second);        
        
        return <div className={styles.time}>{timeToRender(hours)} : {timeToRender(minutes)} : {timeToRender(seconds)}</div>
    }


    useEffect(() => {
        millisec > 0 && !active && setTimeout(() => setMillisec(millisec - 1000), 1000);
    }, [millisec]);

    const timeOrVideo = !active ? time(millisec) : <iframe className={styles.activeVideo} width='250' height='150' src='https://www.youtube.com/embed/0idvYIGCiG8' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>        
    
    return (
        <div className={styles.timer}>
            {timeOrVideo}
        </div>
    )
}

export  default  Timer
