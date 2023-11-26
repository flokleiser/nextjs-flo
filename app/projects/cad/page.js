import styles from 'app/page.module.css'

export const metadata = {
    title: 'CAD',
    description: '-',
  }

export default function cad() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
              CAD (Computer Aided Design)
            </h1>
             
            <div className={styles.subtitledescription}>
            <a>
            In this project, i designed a balisong (butterfly knife) in Onshape, rendered it in Blender, and built it in real life using popsicle sticks and hot glue.
            </a>
            </div> 
        </main>
    )
}