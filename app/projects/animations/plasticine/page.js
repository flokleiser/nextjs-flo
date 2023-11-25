import styles from 'app/page.module.css'

export const metadata = {
    title: 'Plasticine (A)life',
    description: '-',
  }

export default function plasticine() {
    return(
        <main className={styles.main}>
           
            <h1 className={styles.title}>
              Plasticine (A)life
            </h1>
            {/* <video
            src="https://drive.google.com/uc?id=10HFBj5xR9ua3ZoUBu_jcKjuKNO_S5TWi" controls>
            </video> */}
            <iframe src="https://drive.google.com/file/d/10HFBj5xR9ua3ZoUBu_jcKjuKNO_S5TWi/preview" 
            width="100%" 
            style={{ padding: '2rem', aspectRatio: '16/9' }}
            allow="autoplay"></iframe>
        </main>
    )
}