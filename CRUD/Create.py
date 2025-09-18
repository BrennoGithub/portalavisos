#Função CREATE
def criaInformativo(ID_turma, lista_id_informativos, lista_informativos, assuntoInformativo, objetoInformativo):
    id = 1
    while id in lista_id_informativos:
        id += 1
    lista_id_informativos.append(id)

    match assuntoInformativo:
        case "Avaliação":
          lista_informativos.append(
            { "ID_turma": ID_turma,
              "ID_informativo": id,
              "tipoAvaliacao": objetoInformativo["tipoAvaliacao"],
              "materia": objetoInformativo["materia"],
              "assunto": objetoInformativo["assunto"],
              "assuntoAvaliacao": objetoInformativo["assuntoAvaliacao"],
              "dataAvaliacao": objetoInformativo["dataAvaliacao"],
              "horaAvaliacao": objetoInformativo["horaAvaliacao"],
              "mensagem": objetoInformativo["mensagem"],
              "anexo": objetoInformativo["anexo"],
              "dataInformativo": objetoInformativo["dataInformativo"],
              "horaInformativo": objetoInformativo["horaInformativo"],
            })
          
        case "Evento":
          lista_informativos.append(
            { "ID_turma": ID_turma,
              "ID_informativo": id,
              "assunto": objetoInformativo["assunto"],
              "nomeEvento": objetoInformativo["nomeEvento"],
              "dataInicial_Evento": objetoInformativo["dataInicial_Evento"],
              "dataFinal_Evento": objetoInformativo["dataFinal_Evento"],
              "horaInicial_Evento": objetoInformativo["horaInicial_Evento"],
              "horaFinal_Evento": objetoInformativo["horaFinal_Evento"],
              "mensagem": objetoInformativo["mensagem"],
              "anexo": objetoInformativo["anexo"],
              "dataInformativo": objetoInformativo["dataInformativo"],
              "horaInformativo": objetoInformativo["horaInformativo"],
            })
        
        case "Material Didatico":
          lista_informativos.append(
            { "ID_turma": ID_turma,
              "ID_informativo": id,
              "materia": objetoInformativo["materia"],
              "assuntoMaterial": objetoInformativo["assuntoMaterial"],
              "assunto": objetoInformativo["assunto"],
              "mensagem": objetoInformativo["mensagem"],
              "dataInformativo": objetoInformativo["dataInformativo"],
              "horaInformativo": objetoInformativo["horaInformativo"],
              "anexo": objetoInformativo["anexo"]
            })
        
        case _:
          lista_informativos.append(
            { "ID_turma": ID_turma,
              "ID_informativo": id,
              "assunto": objetoInformativo["assunto"],
              "mensagem": objetoInformativo["mensagem"],
              "dataInformativo": objetoInformativo["dataInformativo"],
              "horaInformativo": objetoInformativo["horaInformativo"],
              "anexo": objetoInformativo["anexo"]
              
            })