import styles from '../styles/Home.module.css'

export default function Executive({branchesData}) {
    return (
        <div className={styles.executive}>
            <h6 className={styles.branchTitle}>
                Executive: {branchesData.executive.amountOfMembers}
            </h6>
        </div>
    )
}