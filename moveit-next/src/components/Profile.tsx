import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/79338510?s=460&u=e187ed7c5e6862326996c4fa168b357f017c1387&v=4" alt="Andréia Moraes" />
            <div>
                <strong>Andréia Moraes</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level {level}
                </p>
            </div>
        </div>

    );
}