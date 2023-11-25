import styles from 'app/page.module.css'

export const metadata = {
    title: 'Music',
    description: '-',
  }

export default function music() {
    return(
        <main className={styles.main}>
           
            <h1 className={styles.title}>
              Animations to Music
            </h1>

            {/* <video
            src="https://drive.google.com/uc?id=16sVUVFGcCh9B5xtfMXyjT8JG6CnF7dug" controls>
            </video>

            <video
            src="https://drive.google.com/uc?id=17JQFnplhl78hUX6wIcvRLMOEZu-8t9xH" controls>
            </video>

            <video
            src="https://drive.google.com/uc?id=1sy4U3cpGvj3lQL_jCDiVZgU4gIA2s9eV" controls>
            </video>     */}

        <div className = {styles.subtitle}>
              <h1>
               Public Transport
              </h1> 
        </div>

            <iframe className={styles.iframevideo} src="https://drive.google.com/file/d/16sVUVFGcCh9B5xtfMXyjT8JG6CnF7dug/preview" >
            </iframe>

        <div className = {styles.subtitle}>
              <h1>
               Piano
              </h1>
        </div>
            <iframe className={styles.iframevideo} src="https://drive.google.com/file/d/17JQFnplhl78hUX6wIcvRLMOEZu-8t9xH/preview" >
            </iframe>

        <div className = {styles.subtitle}>
              <h1>
               Blurry
              </h1>
        </div>
            <iframe className={styles.iframevideo} src="https://drive.google.com/file/d/1sy4U3cpGvj3lQL_jCDiVZgU4gIA2s9eV/preview" >
           </iframe>

        </main>
    )
}