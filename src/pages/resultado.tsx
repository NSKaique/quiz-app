import styles from "../styles/Resultado.module.css"
import { useRouter } from "next/router"
import Estatistca from "components/Estatistica"
import Botao from "components/Botao"

export default function Resultado(){

    const router = useRouter()
    
    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas/total) * 100)

    return <div className={styles.resultado}>
        <h1>Resultado Final</h1>
        <div style={{display: "flex"}}>
        <Estatistca texto="Perguntas" valor={total}></Estatistca>
        <Estatistca texto="Certas" valor={certas} corFundo='#9cd2a4'></Estatistca>
        <Estatistca texto="Perccentual" valor={`${percentual}%`}
        corFundo={percentual>=50 ? '#9cd2a4' : "#d36a33"}></Estatistca>
        </div>
        <Botao href="/" texto="Tentar Novamente"></Botao>
    </div>
}