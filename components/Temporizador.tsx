import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../src/styles/Temporizador.module.css'

interface TemporizadorProps{
    key: number
    duracao:number 
    tempoEsgotado: ()=> void
}


export default function Temporizador(props: TemporizadorProps){
    return(
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#BCE596', '#F7B801', '#ff1f1A' ]}
                colorsTime={[props.duracao*0.66, props.duracao*0.33,props.duracao*0.0]}
            >
                {({remainingTime}) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}