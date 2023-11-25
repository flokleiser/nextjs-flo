import styles from 'app/page.module.css'
import { DiGoogleDrive } from "react-icons/di";

export const metadata = {
    title: 'Animations',
    description: '-',
  }

export default function animations() {
    return (
        <main className={styles.main}>
           
            <h1 className={styles.title}>
              Animations
            </h1>

            <div className={styles.grid}>
                <a
                href='/projects/animations/plasticine'
                className={styles.card}
                style={{ backgroundImage: 'url("/images/animations/cards/plasticine card4.png")',
                    backgroundSize: '102%',
                    backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                >
                <h2>
                    Plasticine (A)life
                </h2>
                <p>Stop Motion</p>
                </a>

                <a
                href='/projects/animations/skate'
                className={styles.card}
                style={{ backgroundImage: 'url("/images/animations/cards/skate transparent2.png")',
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                >
                <h2>
                    Skate
                </h2>
                <p>Rotoscoping, Drawing</p>
                </a>

                <a
                href='/projects/animations/escape'
                className={styles.card}
                style={{ backgroundImage: 'url("/images/animations/cards/escape transparent3.png")',
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                >
                <h2>
                   Escape 
                </h2>
                <p>Bringing an image to life</p>
                </a>

                <a
                href='/projects/animations/kontakt'
                className={styles.card}
                style={{ backgroundImage: 'url("/images/animations/cards/kontakt transparent.png")',
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                >
                <h2>
                    Kontakt
                </h2>
                <p>Animating physics</p>
                </a>

                <a
                href='/projects/animations/logo'
                className={styles.card}
                style={{ backgroundImage: 'url("/images/cards/animlogo transparent3.png")',
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                >
                <h2>
                    Logo 
                </h2>
                <p>Variations of a Logo</p>
                </a>

                <a
                href='/projects/animations/music'
                className={styles.card}
                style={{ backgroundImage: 'url("/images/animations/cards/music transparent3.png")',
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                >
                <h2>
                    Music
                </h2>
                <p>Music Visualizers</p>
                </a>
            </div>

            <div className={styles.subtitle}>
                <a href="https://drive.google.com/drive/folders/1hs6amskQ3A8BmUvoEel6KlbXPeIVsO_5?usp=sharing" target="_blank"> 
                    <DiGoogleDrive /> All videos
                    </a>
                </div>
    

        </main>
    )
}