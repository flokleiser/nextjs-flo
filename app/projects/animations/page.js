import styles from 'app/page.module.css'

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
                rel="noopener noreferrer"
                >
                <h2>
                    Plasticine (A)life
                </h2>
                </a>

                <a
                href='/projects/animations/skate'
                className={styles.card}
                rel="noopener noreferrer"
                >
                <h2>
                    Skateboarding Animations
                </h2>
                </a>

                <a
                href='/projects/animations/train'
                className={styles.card}
                rel="noopener noreferrer"
                >
                <h2>
                    Boy on a Train
                </h2>
                </a>

                <a
                href='/projects/animations/kontakt'
                className={styles.card}
                rel="noopener noreferrer"
                >
                <h2>
                    Kontakt
                </h2>
                </a>

                <a
                href='/projects/animations/logo'
                className={styles.card}
                rel="noopener noreferrer"
                >
                <h2>
                    Logo Animation
                </h2>
                </a>

                <a
                href='/projects/animations/music'
                className={styles.card}
                rel="noopener noreferrer"
                >
                <h2>
                    Animations for Music
                </h2>
                </a>
            </div>

            <a 
                href="https://drive.google.com/drive/folders/1hs6amskQ3A8BmUvoEel6KlbXPeIVsO_5?usp=sharing"
                target="_blank">
                    <h2 className={styles.subtitle}>
                    All animations (Google Drive)
                    </h2>
                </a>
    

        </main>
    )
}