import React from 'react'
import styles from './MainSection.module.css';
import logo from './kuva.png';

        export default function MainSection(props){
            return(
                <div className={styles.backGround}>
                <><div className={styles.container}>
                    <img src={logo} width="608" height="342"/>
                    <span className={styles.bigText}>{props.topic}</span> {props.body}
                <span className={styles.container2}>
                        <span className={styles.category}>{props.topic2}</span>
                        <span className={styles.timeStamp}>{props.body2}</span>
                    </span></div></>
                    </div>

    )
}