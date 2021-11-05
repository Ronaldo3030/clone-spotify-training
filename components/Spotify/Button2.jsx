import styles from '../../styles/Spotfy/MenuEsquerda.module.css'
export default function Button2 (props){
    return(
        <div>
            <button className={styles.btn2}>{props.children}</button>
        </div>
    )
}