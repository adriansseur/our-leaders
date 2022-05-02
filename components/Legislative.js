import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Legislative({selectedPlace, branchesData}) {

    let selectedPlaceName
    if (selectedPlace !== null) {
        selectedPlaceName = selectedPlace.replaceAll("-", "")
    }

    let memberElements
    let memberSenators = []
    let memberRepresentatives = []
    if (selectedPlace === "Alabama") {
        memberElements = branchesData.legislative.states[selectedPlace].members.map(member => (
                <div key={member.name} title={member.title} className={styles.memberWrapper}>
                    <Image
                        className={styles.memberImage}
                        src={member.src}
                        height={"100%"}
                        width={"100%"}
                        alt={member.name}
                    />
                    <p className={styles.memberName}>{member.name}</p>
                </div>
            ))
        // sorting of memberElements into sentaros and representatives
        for (let i of memberElements) {
            if (i.props.title === "Senator") {
                memberSenators.push(i)
            } else {
                memberRepresentatives.push(i)
            }
        }
    }
    
    return (
        <div className={styles.legislative}>
            <h6 className={styles.branchTitle}>
                Legislative: {
                    selectedPlace === null ?
                        0 :
                        branchesData.legislative.states[selectedPlaceName].totalMembers
                } of national total ({branchesData.legislative.amountOfMembers})
            </h6>
            <div className={styles.legislativeMembers}>
                {selectedPlace === "Alabama" && 
                    <>
                        <div className={styles.senators}>
                            <p className={styles.senatorsTitle}>Senators</p>
                            {memberSenators}
                        </div>
                        <div className="representatives">
                            <p className={styles.representativesTitle}>Representatives</p>
                            {memberRepresentatives}
                        </div>
                    </>
                }
            </div>
            <style jsx>{`
                .representatives {
                    display: grid;
                    grid-template: auto repeat(${
                // number of rows based upon number of representatives
                Math.ceil((memberRepresentatives.length / 10))*10 / 5
            }, 1fr) / repeat(5, 1fr);
                    gap: 0.25rem;
                }
                `}
            </style>
        </div>
    )
}