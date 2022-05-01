import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'
import Executive from '../components/Executive'
import Judicial from '../components/Judicial'
import Legislative from '../components/Legislative'

export default function Home() {

    const [selectedPlace, setSelectedPlace] = React.useState(null)

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
            <Map 
                selectedPlace={selectedPlace}
                setSelectedPlace={setSelectedPlace}
            />
            <Legislative
                selectedPlace={selectedPlace}
            />
        </main>


        <footer className={styles.footer}>
            Website by Adriansseur
        </footer>
        </div>
    )
}
