import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TextFromServer from '../src/components/textFromServer'
import Galery from '../src/components/galery'
import Timer from '../src/components/timer'

export default function Home() {
  
    return (
    <div className={styles.container}>

      <Head>
        <title>Project</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className={styles.header}>
        <div className={styles.title}>
          My project
        </div>
      </header>

      <main className={styles.main}>
        <Galery />
        <div className={styles.side}>
          <TextFromServer/> 
          <Timer />
        </div>
      </main>

    </div>
  )
}
