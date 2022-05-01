import styles from '../styles/Home.module.css'

export default function Executive({ selectedPlace }) {
    
    let selectedPlaceName
    if (selectedPlace !== null) {
        selectedPlaceName = selectedPlace.replaceAll("-", " ")
    }

    return (
        <div className={styles.place}>
            <h6 className={styles.branchTitle}>Selected: {selectedPlaceName}</h6>
        </div>
    )
}