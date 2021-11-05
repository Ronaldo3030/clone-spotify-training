import styles from '../../styles/Spotfy/Meio.module.css'
import SoundCard from './SoundCard'
import Lista from './Lista'
export default function Meio() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Bom dia</h1>
            <div className={styles.soundCards}>
                <SoundCard name="AC DC: Black ice" image="https://2.bp.blogspot.com/-QFMnePh9Skk/Uv4lYIOp3TI/AAAAAAAA3R8/CLKgD0FIbPA/s1600/acdc-black_ice-cover.jpg" />
                <SoundCard name="Heaven e Hell – The Devil You Know" image="https://4.bp.blogspot.com/-gMAZkxxztAg/Uv4lnmc3jdI/AAAAAAAA3SE/_Nds5-8uicA/s1600/1000x1000-1.jpg" />
                <SoundCard name="Black Spiders – Sons of the North" image="https://3.bp.blogspot.com/--yLn3Qe6gII/Uv4mJf1CtxI/AAAAAAAA3SU/X1gPbduVWYg/s1600/1000x1000-2.jpg" />
                <SoundCard name="Dust Bolt – Violent Demolition" image="https://3.bp.blogspot.com/-mS9wMXWjVcM/Uv4nDFKZmwI/AAAAAAAA3S0/WSZ7xJZgC7k/s1600/1000x1000-4.jpg" />
            </div>
            <Lista
                name="Seus programas"
                title1="Hipsters ponto tech" desc1="Alura" image1="https://i1.wp.com/hipsters.tech/wp-content/uploads/2016/07/hipsters-logo.png?ssl=1"
                title2="Podpah" desc2="Podcast Podpah" image2="https://yt3.ggpht.com/w-7B6_gQu2M0k7ETNwLqtubjSXXyIvUMCUKzlbt1SBN37JAMFhbHpeGCYxFBhMrtf4gZLlu0Ww=s900-c-k-c0x00ffffff-no-rj"
                title3="Google Podcast" desc3="Google" image3="https://play-lh.googleusercontent.com/BQUYd1Th9Z_XI5wtklPQDHmiNkSOzBakOnpk-Ni8CBTyHb0E7UM5LpyjRW9BWs4fUuVD"
            />
            <Lista
                name="Com base no que você ouviu recentemente"
                title1="00's Rock" desc1="The best of 00's rock" image1="http://lh3.googleusercontent.com/-CpSW6xNu3TWZbn39sU-9spspDIV3ko1bDApmtNtUVdXoBRS8u8vGg-s1g-114GuekZ2EcAPDq-0kTwz9E5FOg"
                title2="Heavy Metal" desc2="The best Heavy Metal album In the world" image2="https://img.discogs.com/eKhvrc7C40PjfvY0M5oLH6vno9A=/fit-in/600x584/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-2542678-1386786079-6110.jpeg.jpg"
                title3="Lofi Sounds" desc3="Radio lofi by instrumental Hip Hop Gang" image3="https://m.media-amazon.com/images/I/71VmOJbgknL._SS500_.jpg"
            />
        </div>
    )
}