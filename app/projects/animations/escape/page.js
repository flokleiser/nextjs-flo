import styles from 'app/page.module.css'

export const metadata = {
    title: 'Escape',
    description: '-',
  }

export default function escape() {
    return(
        <main className={styles.main}>
           
            <h1 className={styles.title}>
              Escape (Animation Homework of 2021)
            </h1>
            <video 
            src="https://drive.google.com/uc?id=1kJvpWzJHuDWREHTwNt2n_IL_YdrhjusF" controls>
            </video>
        </main>
    )
}