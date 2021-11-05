import styles from '../../styles/Spotfy/ButtonCard.module.css'
export default function ButtonCard(props){
    if(props.title){
        return(
            <button className={styles.btnTitle}>{props.children}</button>
        ) 
    }else{
        return(
            <button className={styles.btn}>{props.children}</button>
        )
    }
}