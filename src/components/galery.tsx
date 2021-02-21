import * as React from 'react'
import {useState} from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import RightArr from '../images/right.svg'
import LeftArr from '../images/left.svg'

const photos: string[] = [
    "http://rylik.ru/uploads/posts/2013-07/1373234069_3.jpg",
    "http://rylik.ru/uploads/posts/2013-07/1373234084_1.jpg",
    "http://rylik.ru/uploads/posts/2013-03/1363166612_1.jpg",
    "http://rylik.ru/uploads/posts/2013-03/1363166571_2.jpg"
]



const Galery = () => {

    const [now, setNow] = useState<number>(0)

    const dots: string[] = photos.map((item, i: number) => {
        return (
            <div key={i}  
                className={now === i ? styles.activeDot : styles.dot}
                onClick={() => setNow(i)}>    
            </div>
        )
    })

    const nextPhoto = (direction: number) => {
        setNow(() => {
            let newNumber: number = now;
            if (direction === -1) {
                if (newNumber === 0) {
                    newNumber = photos.length - 1;
                } else {
                    newNumber--;
                }
            } else if (direction === 1) {
                if (newNumber === photos.length - 1) {
                    newNumber = 0;
                } else {
                    newNumber++;
                }
            }
            
            return newNumber;
        });
    }

    return(
        <div className={styles.galery}>
        <div className={styles.photos}>
            <div className={styles.arrows}>
                <LeftArr 
                    className={styles.arr}
                    width="100"
                    height="150"
                    onClick={() => nextPhoto(-1)}/>
            </div>
            <Image 
                className={styles.photo}
                src={photos[now]}
                alt="Picture of the author"
                width='800px'
                height='450px'            
            />  
            <div className={styles.arrows}>
                <RightArr 
                    className={styles.arr}
                    width="100"
                    height="150"
                    onClick={() => nextPhoto(1)}/>
            </div>
        </div>
        <div className={styles.dots}>
            {dots}
        </div>
        </div>
    )   
}

export  default  Galery