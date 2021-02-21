import React, {useState} from 'react'
import styles from '../../styles/galery.module.css'
import Image from 'next/image'

const photos: string[] = [
    'http://rylik.ru/uploads/posts/2013-07/1373234069_3.jpg',
    'http://rylik.ru/uploads/posts/2013-07/1373234084_1.jpg',
    'http://rylik.ru/uploads/posts/2013-03/1363166612_1.jpg',
    'http://rylik.ru/uploads/posts/2013-03/1363166571_2.jpg'
]



const Galery = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0)

    const dots = photos.map((photoURL, i: number) => {
        return(
            <div key={photoURL}  
                className={activeIndex === i ? styles.activeDot : styles.dot}
                onClick={() => setActiveIndex(i)}>    
            </div>
        )
    })

    const nextPhoto = (direction: number) => {
        setActiveIndex(() => {
            let newNumber: number = activeIndex;
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
                <Image 
                    src='/left.svg'
                    className={styles.arr}
                    width='100px'
                    height='150px'
                    onClick={() => nextPhoto(-1)}/>
            </div>
            <Image 
                className={styles.photo}
                src={photos[activeIndex]}
                alt='Picture of the author'
                width='800px'
                height='450px'            
            />  
            <div className={styles.arrows}>
                <Image 
                    src='/right.svg'
                    className={styles.arr}
                    width='100'
                    height='150'
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
