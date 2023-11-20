import styles from 'app/page.module.css'
import { VscFilePdf } from "react-icons/vsc";
import { DiGithubBadge , DiGoogleDrive, DiIllustrator} from "react-icons/di";

export const metadata = {
    title: 'Links',
    description: '-',
  }

export default function links() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
              Links
            </h1>
            <div className={styles.subtitle}>
                <p>
                    <a href="https://github.com/flokleiser" target="_blank">
                    <DiGithubBadge />Github
                    </a>
                </p>
                <br></br>
                
                <p>
                    <a href="https://drive.google.com/drive/folders/1KUPLIgeu3yFQvicrqMEfe6qayze_X2ea?usp=sharing" target="_blank">
                    <DiGoogleDrive />Google Drive
                    </a>
                </p>
                <br></br>
                <p>
                    {/* <a href="https://drive.google.com/drive/folders/1iTuoikGpE1WVMLkolIVQ4kmpH4dhQVAP?usp=sharing" target="_blank"> */}
                    <a href="https://drive.google.com/file/d/1ylYbcAFKfZ9vhhJQ9jcmslIBZf4nxOA6/view?usp=sharing" target="_blank">
                    <DiIllustrator />  Portfolio
                    </a>
                </p>
            </div>
        </main>
    )
}
