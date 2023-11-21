import styles from 'app/page.module.css'

export const metadata = {
    title: 'CAD',
    description: '-',
  }

export default function cad() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
              Computer Aided Design 
            </h1>
            <div className={styles.subtitle}>
              <a href='https://cad.onshape.com/documents/74ceed200a5aa4f63a77c82e/w/2cd4c25834f626e76cd4c9af/e/d0d97ca62557a0c79fb7dfc5?renderMode=0&uiState=655c8eb7324ece34333423e1' target='_blank'> 
                <h2>
                  Onshape
                </h2>
              </a>
            </div>
        </main>
    )
}