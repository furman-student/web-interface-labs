import Head from 'next/head'
import styles from '../styles/components/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Interface Labs</title>
        <meta name="description" content="Simple template for my lab tasks on the subject" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      </main>

    </div>
  )
}
