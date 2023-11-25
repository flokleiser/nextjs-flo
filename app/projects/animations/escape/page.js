import styles from 'app/page.module.css'

export const metadata = {
    title: 'Escape',
    description: '-',
  }

export default function escape() {
    return(
        <main className={styles.main}>
           
            <h1 className={styles.title}>
              Escape 
            </h1>
            {/* <video 
            src="https://drive.google.com/uc?id=1kJvpWzJHuDWREHTwNt2n_IL_YdrhjusF" controls>
            </video> */}

          <a className={styles.subtitledescription}>
            
            Homework for the application to the Propädeutikum ZHdK 2021
            
            </a>


        <iframe className={styles.iframevideo}
         src="https://drive.google.com/file/d/1kJvpWzJHuDWREHTwNt2n_IL_YdrhjusF/preview"> 
          </iframe>
            
        </main>
    )
}