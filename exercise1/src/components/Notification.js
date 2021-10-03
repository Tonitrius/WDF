import React from 'react'
import styles from './Notification.module.css';

export default function Notification(props){
    return(
        <div className={styles.container}>
            <span className={styles.bigText}>{props.topic}</span> {props.body}
        </div>
    )
}
//Kalasataman toinen pilvenpiirtäjä on nyt valmis, tällaiset maisemat asunnoista aukeavat