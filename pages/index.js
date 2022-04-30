import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'
import Executive from '../components/Executive'
import Judicial from '../components/Judicial'
import Legislative from '../components/Legislative'

export default function Home() {

    return (
        <div className={styles.container}>
        <Head>
            <title>Our Leaders</title>
            <meta name="description" content="Our leaders in governance" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <Executive />
            <Judicial/>
            <Map />
            <Legislative />
        </main>


        <footer className={styles.footer}>
            Website by Adriansseur
        </footer>
        </div>
    )
}
