import styles from '../../styles/Spotfy/CardLista.module.css'
export default function CardLista(props){
    return(
        <div className={styles.container}>
            <img className={styles.image} src={props.image} alt="imagem Card" />
            <h3>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
        </div>
    )
}