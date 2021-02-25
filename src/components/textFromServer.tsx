import React, {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'

const TextFromServer = () => {

    const [text, setText] = useState<string>('');

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/59`)
            const obj = await response.json();
            setText(obj.body);
        })()
    }, []);

    return(
        <div className={styles.post}>
            Text from server: <p>{text}</p>
        </div>
    )   
}

export  default  TextFromServer