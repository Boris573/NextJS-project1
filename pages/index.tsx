import Head from 'next/head'
import styles from '../styles/Home.module.css'
import GetPost from '../src/components/getPost'
import Galery from '../src/components/galery'
import Timer from '../src/components/timer'

export default function Home() {
  
    return (
    <div className={styles.container}>

      <Head>
        <title>Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.title}>
          My project
        </div>
      </header>

      <main className={styles.main}>
        <Galery />
        <div className={styles.side}>
          <GetPost/> 
          <Timer />
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>

    </div>
  )
}
