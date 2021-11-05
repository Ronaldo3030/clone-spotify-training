import styles from '../../styles/Spotfy/SoundCard.module.css'
export default function SoundCard(props){
    return(
        <div className={styles.container}>
            <img className={styles.img} src={props.image} alt="album rock" />
            <h3>{props.name}</h3>
        </div>
    )
}