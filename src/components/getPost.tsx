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

export  default  GetPost