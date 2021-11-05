import styles from '../../styles/Spotfy/Card.module.css'
import { BiDisc } from 'react-icons/bi'
import ButtonCard from './ButtonCard'
export default function Card(props){
    const icon ={
        marginRight: "5px", 
        fontSize: "17px"
    }

    return(
        <div className={styles.container}>
            <div>
                <img className={styles.img} src={props.image} alt="foto perfil" />
            </div>
            <div>
                <ButtonCard title>{props.name}</ButtonCard>
                <ButtonCard>{props.music}</ButtonCard>
                <ButtonCard><BiDisc style={icon} />{props.album}</ButtonCard>
            </div>
            <div><p className={styles.hour}>{props.hour}</p></div>
        </div>
    )
}