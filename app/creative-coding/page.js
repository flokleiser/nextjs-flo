import Image from 'next/image'
import styles from 'app/subpage.module.css'

export default function creativeCoding() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title2}>
               Creative Coding
            </h1>
            <iframe src="https://editor.p5js.org/flokleiser/full/1JskqsGtG" width="100%" height="850" style={{ border: '1px solid white' }}></iframe>
        </main>
    )
}
