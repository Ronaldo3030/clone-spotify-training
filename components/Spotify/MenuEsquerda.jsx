import styles from '../../styles/Spotfy/MenuEsquerda.module.css'
import Button from './Button'
import Button2 from './Button2'
import { AiOutlineHome, AiOutlineSearch, AiOutlinePlus, AiFillHeart } from 'react-icons/ai'
import { GiBookshelf } from 'react-icons/gi'
import Linha from './Linha'
export default function spotify() {
    const icon ={
        marginRight: "15px", 
        fontSize: "17px"
    }

    return (
        <div className={styles.container}>
            <div>
                <Button>. . .</ Button>
            </div>
            <div style={{ marginBottom: '30px' }}>
                <Button><AiOutlineHome style={icon}/>Home</ Button>
                <Button><AiOutlineSearch style={icon}/>Buscar</ Button>
                <Button><GiBookshelf style={icon}/>Sua Biblioteca</ Button>
            </div>
            <div>
                <Button><AiOutlinePlus style={icon}/>Criar Playlist</Button>
                <Button><AiFillHeart style={icon}/>Músicas Curtidas</Button>
            </div>
            <div>
                <Linha />
            </div>
            <div style={{overflowY: 'scroll' }}>
                <Button2>Album #01</Button2>
                <Button2>Album #02</Button2>
                <Button2>Album #03</Button2>
                <Button2>Album #04</Button2>
                <Button2>Album #05</Button2>
                <Button2>Album #06</Button2>
                <Button2>Album #07</Button2>
                <Button2>Album #08</Button2>
                <Button2>Album #09</Button2>
                <Button2>Album #10</Button2>
            </div>
        </div>
    )
}