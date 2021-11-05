import MenuEsquerda from '../components/Spotify/MenuEsquerda'
import MenuDireita from '../components/Spotify/MenuDireita'
import Meio from '../components/Spotify/Meio'
export default function spotify(){
    const container = {
        width: '100%',
        height: '100vh',
        background: '#262626',
        display:'flex'
    }
    const esquerda = {
        width: '20%',
        height: '100%'
    }
    const meio = {
        height: '100%',
        width: '60%'
    }
    const direita = {
        width: '20%',
        height: '100%'
    }
    return(
        <div style={container}>
            <div style={esquerda}>
                <MenuEsquerda />
            </div>
            <div style={meio}>
                <Meio />
            </div>
            <div style={direita}>
                <MenuDireita />
            </div>
        </div>
    )
}