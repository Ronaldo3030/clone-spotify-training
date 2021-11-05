import styles from '../../styles/Spotfy/Lista.module.css'
import CardLista from './CardLista'
export default function Lista(props){
    return(
        <div className={styles.container}>
            <h1 style={{fontSize: '30px'}}>{props.name}</h1>
            <div className={styles.content}>
                <CardLista title={props.title1} description={props.desc1} image={props.image1}/>
                <CardLista title={props.title2} description={props.desc2} image={props.image2}/>
                <CardLista title={props.title3} description={props.desc3} image={props.image3}/>
            </div>
        </div>
    )
}