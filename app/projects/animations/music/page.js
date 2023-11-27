import styles from 'app/page.module.css'

export const metadata = {
    title: 'Music',
    description: '-',
  }

export default function music() {
    return(
        <main className={styles.main}>
            <div className="relative 
   flex 
   place-items-center 
   before:absolute 
   before:h-[300px] 
   before:w-[480px] 
   before:-translate-x-1/2 
   before:rounded-full 
   before:bg-gradient-radial 
   before:from-white 
   before:to-transparent 
   before:blur-2xl 
   before:content-[''] 
   after:absolute 
   after:-z-20 
   after:h-[180px] 
   after:w-[240px] 
   after:translate-x-1/3 
   after:bg-gradient-conic 
   after:from-sky-200 
   after:via-blue-200 
   after:blur-2xl 
   after:content-[''] 
   before:dark:bg-gradient-to-br 
   before:dark:from-transparent 
   before:dark:to-blue-700 
   before:dark:opacity-10 
   after:dark:from-sky-900 
   after:dark:via-[#0141ff] 
   after:dark:opacity-40 
   before:lg:h-[360px] 
   z-[-1]">
          </div> 
            <h1 className={styles.title}>
              Animations to Music
            </h1>
            <div className={styles.subtitledescription}>
            <p>
                placeholder
            </p>
            </div>

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

           <div style={{ padding: '2rem' }}> </div>

        </main>

    )
}