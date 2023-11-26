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
             
            <div className={styles.subtitledescription}>
            <a>
            A balisong (butterfly knife) designed in onshape.com, rendered in Blender, and built using popsicle sticks and hot glue.
            </a>
            </div> 
        </main>
    )
}