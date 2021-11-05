import styles from '../../styles/Spotfy/MenuDireita.module.css'
import { AiOutlineUserAdd } from 'react-icons/ai'
import Button from './Button'
import Card from './Card'
export default function MenuDireita(){
    return(
        <div className={styles.container}>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
                <Button>Atividade de amigos <AiOutlineUserAdd style={{marginLeft: '30px', fontSize: '19px'}} /></Button>
            </div>
            <div>
                <Card name="Alberto Andrades" music="Can I be Him . James Artur" album="Back from the Edge" hour="4h" image="https://photografos.com.br/wp-content/uploads/2020/09/fotografia-para-perfil.jpg"/>
                <Card name="Lucas Miranda" music="Meu eu em você . Victor e Leo" album="Sertanejo" hour="19h" image="https://upload.wikimedia.org/wikipedia/commons/4/43/Foto_Perfil.jpg"/>
            </div>
        </div>
    )
}