import React from 'react'
import styles from '../styles/Home.module.css'
import data from '../data/branchesData'

export default function Legislative({selectedPlace}) {
    
    const [branchesData, setBranchesData] = React.useState(data)

    let processedSelectedPlace
    if (selectedPlace !== null) {
        processedSelectedPlace = selectedPlace.replace("-", "")
    }

    return (
        <div className={styles.legislative}>
            <h6 className={styles.branchTitle}>Legislative</h6>
            {selectedPlace && <p>{selectedPlace}</p>}
            {selectedPlace &&
                <p>
                    {branchesData.legislative.state[processedSelectedPlace]}
                </p>
            }
        </div>
    )
}