import styles from 'app/subpage.module.css'

export const metadata = {
    title: 'Voxel Art',
    description: '-',
  }

export default function voxel() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
             Voxel Art 
            </h1>
        </main>
    )
}