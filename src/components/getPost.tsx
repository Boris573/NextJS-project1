import * as React from 'react'
import {useState} from 'react'
import styles from '../../styles/Home.module.css'

const GetPost = () => {

    const [text, setText] = useState<string>('');

    fetch(`https://jsonplaceholder.typicode.com/posts/59`)
        .then(response => response.json())
        .then(json => {
            setText(json.body)
        })

    return(
        <div className={styles.post}>
            Text from server: <p>{text}</p>
        </div>
    )   
}

export  default  GetPost