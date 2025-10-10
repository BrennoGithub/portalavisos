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
          
#Funções READ
def exibiInformativo(assuntoInformativo, lista_informativos, ID_turma):
    informativos = []
    for iten in lista_informativos:
        if int(iten["ID_turma"]) == int(ID_turma) and "ID_turma" in iten:
            match assuntoInformativo:
                case "avaliacoes":
                    if iten["assunto"] == "Avaliação":
                        informativos.append(iten)
                case "eventos":
                    if iten["assunto"] == "Evento":
                        informativos.append(iten)
                case "materiais":
                    if iten["assunto"] == "Material Didatico":
                        informativos.append(iten)
                case _:
                    if iten["assunto"] != "Avaliação" and iten["assunto"] != "Evento" and iten["assunto"] != "Material Didatico":
                        informativos.append(iten)

    if len(informativos) == 0:
        return {"mensagemServidor": "404 - Não foi encontrado informativo desse tipo."}
    
    else:
        return informativos
    
#Função UPDATE
def atualizaInformativo(ID, lista_informativos, lista_id_informativos, tipoInformativo, objetoInformativo):
    for item in lista_informativos:
        match tipoInformativo:
            case "avisos":
                if item["ID_aviso"] == ID and ID in lista_id_informativos:
                    item["assunto"] = objetoInformativo["assunto"]
                    item["texto"] == objetoInformativo["texto"]

            case "avaliacoes":
                if item["ID_avaliacao"] == ID and ID in lista_id_informativos:
                    item["materia"] == objetoInformativo["materia"]
                    item["assunto"] == objetoInformativo["assunto"]
                    item["data_avaliacao"] == objetoInformativo["data_avaliacao"]
                    item["hora_avaliacao"] == objetoInformativo["hora_avaliacao"]
                    item["descricao"] == objetoInformativo["descricao"]

            case "eventos":
                if item["ID_evento"] == ID and ID in lista_id_informativos:
                    item["nome"] == objetoInformativo["nome"]
                    item["data_evento"] == objetoInformativo["data_evento"]
                    item["hora_evento"] == objetoInformativo["hora_evento"]
                    item["descricao"] == objetoInformativo["descricao"]

            case "materiais":
                if item["ID_material"] == ID and ID in lista_id_informativos:
                    item["material"] == objetoInformativo["material"]
                    item["materia"] == objetoInformativo["materia"]
                    item["assunto"] == objetoInformativo["assunto"]
                    item["descricao"] == objetoInformativo["descricao"]
                #Por enquanto atualizaMaterial não atualiza tipo_material

#Funções DELETE
def deletaInformativo(ID, tipoInformativo, lista_informativos, lista_id_informativos):
    for iten in range(1, len(lista_informativos)+1):
        match tipoInformativo:
            case "avisos":
                if lista_informativos[-iten]["ID_aviso"] == ID and ID in lista_id_informativos:
                    del lista_informativos[-iten]
                break

            case "avaliacoes":
                if lista_informativos[-iten]["ID_avaliacao"] == ID and ID in lista_id_informativos:
                    del lista_informativos[-iten]

            case "eventos":
                if lista_informativos[-iten]["ID_evento"] == ID and ID in lista_id_informativos:
                    del lista_informativos[-iten]

            case "materiais":
                if lista_informativos[-iten]["ID_material"] == ID and ID in lista_id_informativos:
                    del lista_informativos[-iten]