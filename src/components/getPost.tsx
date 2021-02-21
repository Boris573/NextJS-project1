<<<<<<< HEAD
import React, {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'


const response = fetch(`https://jsonplaceholder.typicode.com/posts/59`)
    .then(response => response.json())
    .then(json => json.body)

const GetPost = () => {

    const [text, setText] = useState<string>('');

    useEffect(() => {
        response.then(text => setText(text));
      }, []);

      return(
        <div className={styles.post}>
            Text from server: <p>{text}</p>
        </div>
    )   
}

=======
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

>>>>>>> 2dab1d65baf44515ea287fb603fbeb48c3c16126
export  default  GetPost