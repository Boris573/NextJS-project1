<<<<<<< HEAD
import React, {useState, useEffect} from 'react'
import styles from '../../styles/timer.module.css'


const useDifference = (t: string, zone: string) => {
    const time: Date = new Date(`2021-02-22T${t}${zone}`)
    const localTime: Date = new Date();
    const dif: number = time.getTime() - localTime.getTime();

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
    const timeDif: number = useDifference('10:00', '+03:00');


    const [active, setActive] = useState<boolean>(false)
    const [millisec, setMillisec] = useState<number>(timeDif);

    const time = (time: number) => {

        if (time <= 0 && !active) {
            time = 0
            setActive(true);
            return <div className={styles.time}>00 : 00 : 00</div>
        }

        const second: number = 1000;
        const minute: number = second * 60;
        const hour: number = minute * 60;
        const hours: number = Math.floor(time / hour);
        const minutes: number = Math.floor((time % hour) / minute);
        const seconds: number = Math.floor((time % minute) / second);        
        
        return <div className={styles.time}>{returnTime(hours)} : {returnTime(minutes)} : {returnTime(seconds)}</div>
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
=======
import * as React from 'react'
import {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'



const useDifference = (t: string, zone: string) => {

    
    let time: any = new Date(`2021-02-21T${t}${zone}`)
    let localTime: any = new Date();
        console.log("time - " + time + "local time - " + localTime);
    let dif: number = time - localTime;
console.log("dif - " + dif);
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
    let timeDif: number = useDifference("10:00", '+03:00');
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
>>>>>>> 2dab1d65baf44515ea287fb603fbeb48c3c16126
