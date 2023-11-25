import styles from 'app/page.module.css'

export const metadata = {
    title: 'Kontakt',
    description: '-',
  }

export default function kontakt() {
    return(
        <main className={styles.main}>
           
            <h1 className={styles.title}>
              Kontakt
            </h1>
{/*           
            <video
            src="https://drive.google.com/uc?id=1i1w_fS3-Os0GrAVs-5XcMHmMXpVzvapQ" controls>
            </video> */}
          
          <iframe src="https://drive.google.com/file/d/1i1w_fS3-Os0GrAVs-5XcMHmMXpVzvapQ/preview"> 
            </iframe>


        </main>
    )
}