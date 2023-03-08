import QuestaoModel from "model/questao";
import RespostaModel from "model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Quem é o maior artilheiro em jogos oficiais?',[
    RespostaModel.errada('Messi'),
    RespostaModel.errada('Pelé'),
    RespostaModel.errada('Romario'),
    RespostaModel.certa('Cr7')
    ]),
    new QuestaoModel(202, 'Qual seleção possui mais titulos de copa do mundo?',[
        RespostaModel.errada('Italia'),
        RespostaModel.errada('França'),
        RespostaModel.errada('Alemanha'),
        RespostaModel.certa('Brasil')
    ]),
    new QuestaoModel(203, 'Qual liga é a dita como a mais "dificil" do mundo',[
        RespostaModel.errada('Premier League'),
        RespostaModel.errada('LaLiga'),
        RespostaModel.errada('Bundesliga'),
        RespostaModel.certa('Brasileirão')
    ]),
    new QuestaoModel(204, 'Qual nome do melhor goleiro do mundo?',[
        RespostaModel.errada('Onana'),
        RespostaModel.errada('Donnaruma'),
        RespostaModel.errada('Neuer'),
        RespostaModel.certa('Courtouis')
    ]),

]

export default questoes