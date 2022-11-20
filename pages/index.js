import Head from 'next/head'
import styles from '../styles/components/Home.module.scss'
import Form from '../components/Form'

export default function Home() {
  return (<>
    <Head>
      <title>Web Interface Labs</title>
      <meta name="description" content="Simple template for my lab tasks on the subject" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <Form />
    </main>
  </>)
}
