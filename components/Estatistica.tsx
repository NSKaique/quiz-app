import styles from '../src/styles/Estatistca.module.css'

interface EstatisticaProps{
    valor: any
    texto: string
    corFundo? : string
    corFonte? : string
}

export default function Estatistca(props : EstatisticaProps){
    return(
        <div className={styles.estatistica}>
            <div className={styles.valor} style={{
                backgroundColor: props.corFundo ?? '#FFD60F',
                color: props.corFonte ?? '#333'
            }}>
                {props.valor}
                </div>
                <div className={styles.texto}>
                {props.texto}
                </div>
                
            </div>
        
    )
}