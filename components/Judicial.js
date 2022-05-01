import styles from '../styles/Home.module.css'

export default function Judicial({branchesData}) {
    return (
        <div className={styles.judicial}>
            <h6 className={styles.branchTitle}>
                Judicial: {branchesData.judicial.amountOfMembers}
            </h6>
        </div>
    )
}