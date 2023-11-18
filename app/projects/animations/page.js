import styles from 'app/page.module.css'

export const metadata = {
    title: 'Animations',
    description: '-',
  }

export default function animations() {
    return (
        <main className={styles.main}>
           
            <h1 className={styles.title}>
              Animations
            </h1>
           
                <a 
                href="https://drive.google.com/drive/folders/1hs6amskQ3A8BmUvoEel6KlbXPeIVsO_5?usp=sharing"
                target="_blank">
                    <h2>
                    Google Drive Folder
                    </h2>
                </a>
          

        {/*Plasticine*/} 
            <video
            src="https://drive.google.com/uc?id=10HFBj5xR9ua3ZoUBu_jcKjuKNO_S5TWi" controls>
            </video>
     
        {/*Skate (2)*/}
            <video
            src="https://drive.google.com/uc?id=10vV_TqscYwc4Oru_dqNVzKM385Bs8O1E" controls>
            </video>

            <video
            src="https://drive.google.com/uc?id=1owQOre2EW08O3zLzPgM0hyngOMaC9Aoz" controls> 
            </video>

        {/*Hausaufgabe 1*/}
            <video 
            src="https://drive.google.com/uc?id=1kJvpWzJHuDWREHTwNt2n_IL_YdrhjusF" controls>
            </video>



        {/*Kontakt*/}
            <video
            src="" controls>
            </video>

        {/*Rest (4)*/}
            <video 
            src="https://drive.google.com/uc?id=1t3uRCLQX84zKMnf8HlKfAWi6Srv_W94F" controls>
            </video>

            <video
            src="" controls>
            </video>

            <video
            src="" controls>
            </video>

            <video
            src="" controls>
            </video>        

        </main>
    )
}