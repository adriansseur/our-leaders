import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'
import Executive from '../components/Executive'
import Judicial from '../components/Judicial'
import Legislative from '../components/Legislative'
import Place from '../components/Place'
import data from '../data/branchesData'

export default function Home() {

    const [selectedPlace, setSelectedPlace] = React.useState(null)
    const [branchesData, setBranchesData] = React.useState(data)

    return (
        <div className={styles.container}>
        <Head>
            <title>Our Leaders</title>
            <meta name="description" content="Our leaders in governance" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <Place selectedPlace={selectedPlace} />    
            <Executive branchesData={branchesData} />
            <Judicial branchesData={branchesData} />
            <Map 
                selectedPlace={selectedPlace}
                setSelectedPlace={setSelectedPlace}
            />
            <Legislative
                    selectedPlace={selectedPlace}
                    branchesData={branchesData}
            />
        </main>


        <footer className={styles.footer}>
            Website by Adriansseur
        </footer>
        </div>
    )
}
