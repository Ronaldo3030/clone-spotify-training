import styles from '../../styles/Spotfy/MenuEsquerda.module.css'
export default function Button (props){
    return(
        <div>
            <button className={styles.btn}>{props.children}</button>
        </div>
    )
}