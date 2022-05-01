import React from 'react'
import styles from '../styles/Home.module.css'

export default function Legislative({selectedPlace, branchesData}) {

    let selectedPlaceName
    if (selectedPlace !== null) {
        selectedPlaceName = selectedPlace.replaceAll("-", "")
    }

    return (
        <div className={styles.legislative}>
            <h6 className={styles.branchTitle}>
                Legislative: {
                    selectedPlace === null ?
                        0 :
                        branchesData.legislative.amountPerState[selectedPlaceName]
                } of national total ({branchesData.legislative.amountOfMembers})
            </h6>
            <div className={styles.legislativeMembers}>
            </div>
        </div>
    )
}