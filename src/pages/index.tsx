import styles from '@/styles/Home.module.css'

import Questionario from 'components/Questionario'
import QuestaoModel from 'model/questao'
import { useEffect, useState } from 'react'
import questoes from './api/questoes/bancoDeQuestoes'
import { useRouter } from 'next/router'

const BASE_URL = 'https://quiz-app-drab-eta.vercel.app/api'


export default function Home() {

  const router = useRouter()

  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respsotascertas, setRespsostasCertas] = useState(0)
  
  async function carregarQuestoesId() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    setIdsDasQuestoes(idsDasQuestoes)
  }

  async function carregarQuestao(idQuestao:number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao)
  }

  useEffect(()=>{
    carregarQuestoesId()
  }, [])

  useEffect(()=>{
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])


  function questaoRespondida(questaoRespondida: QuestaoModel){
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespsostasCertas(respsotascertas + (acertou ? 1 : 0))
  }

  function idProximaPergunta(){
    if(questao){
      const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
      return idsDasQuestoes[proximoIndice]
    }
  }

  function irPraProximoPasso(){
    const proximoId = idProximaPergunta()
    proximoId ? irPraProximaQuestao(proximoId) : finalizar()

  }

  function irPraProximaQuestao(proximoId : number){
    carregarQuestao(proximoId)
  }
  function finalizar(){
    router.push(
      {
        pathname: "/resultado",
        query: {
          total: idsDasQuestoes.length,
          certas:respsotascertas
        }
      })
  }

  return (
    <div style={{
      display:'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center',
      height:'100vh'
    }}>
    { questao ? (
    <Questionario
    questao={questao}
    ultima={idProximaPergunta() === undefined}
    questaoRespondida={questaoRespondida}
    irPraProximoPasso={irPraProximoPasso}
    ></Questionario>) : false}
   </div>

  )
}
