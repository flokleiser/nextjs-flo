import styles from 'app/subpage.module.css'

export default function animations() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title2}>
              Animations
            </h1>
                <a 
                href="https://drive.google.com/drive/folders/1hs6amskQ3A8BmUvoEel6KlbXPeIVsO_5?usp=sharing"
                target="_blank">

                <h2>
                Google Drive Folder
                </h2>
                </a>
            <video 
            src="https://drive.google.com/uc?id=1kJvpWzJHuDWREHTwNt2n_IL_YdrhjusF" controls>
            </video>
            <video 
            src="https://drive.google.com/uc?id=1t3uRCLQX84zKMnf8HlKfAWi6Srv_W94F" controls>
            </video>
        </main>
    )
}