import React, {useState} from 'react'
import styles from '../../styles/Home.module.css'


const getTextFromServer = async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/59`)
    const textFromServer = await response.json()
    return textFromServer.body
}

const TextFromServer = () => {

    const [text, setText] = useState<string>('');
   
    const textFromServer = getTextFromServer()
    textFromServer.then(text => setText(text))

      return(
        <div className={styles.post}>
            Text from server: <p>{text}</p>
        </div>
    )   
}

export  default  TextFromServer