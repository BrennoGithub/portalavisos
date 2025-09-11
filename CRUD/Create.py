import datetime #Modulo padrão Python para datas e horas

#Função para chamar data atual
def returnData():
    data_hora = datetime.datetime.now() #Objeto com data e hora atual
    data = data_hora.strftime("%d/%m/%y")
    return data

#Função para chamar a hora atual
def returnHora():
    data_hora = datetime.datetime.now() #Objeto com data e hora atual
    hora = data_hora.strftime("%H:%M")
    return hora

#Função CREATE
def criaInformativo(ID_turma, lista_id_informativos, lista_informativos, assuntoInformativo, objetoInformativo):
    id = 1
    while id in lista_id_informativos:
        id += 1
    lista_id_informativos.append(id)

    if objetoInformativo["assunto"] == "":
       objetoInformativo["assunto"] = "Sem assunto"

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