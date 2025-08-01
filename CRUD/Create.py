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

#Funções CREATE

def criaInformativo(lista_id_informativos, lista_informativos, tipoInformativo, objetoInformativo):
    id = 1
    while id in lista_id_informativos:
        id += 1

    lista_id_informativos.append(id)

    if tipoInformativo == "avisos":
        lista_informativos.append(
            { "ID_aviso": id, 
              "data": objetoInformativo["data_atual"],
              "hora": objetoInformativo["hora_atual"],
              "assunto": objetoInformativo["assunto"],
              "texto": objetoInformativo["texto"]
            })
    
    elif tipoInformativo == "avaliacoes":
        lista_informativos.append(
            { "ID_avaliacao": id,
              "materia": objetoInformativo["materia"],
              "assunto": objetoInformativo["assunto"],
              "data_avaliacao": objetoInformativo["data_avaliacao"],
              "hora_avaliacao": objetoInformativo["hora_avaliacao"],
              "descricao": objetoInformativo["descricao"]
            })
        
    elif tipoInformativo == "eventos":
        lista_informativos.append(
            { "ID_evento": id,
              "nome": objetoInformativo["nome_evento"],
              "data_evento": objetoInformativo["data_evento"],
              "hora_evento": objetoInformativo["hora_evento"],
              "descricao": objetoInformativo["descricao"]
            })
        
    elif tipoInformativo == "materiais":
        lista_informativos.append(
            { "ID_material": id,
              "tipo_material": objetoInformativo["tipo_material"],
              "material": objetoInformativo["material"],
              "materia": objetoInformativo["materia"],
              "assunto": objetoInformativo["assunto"],
              "descricao": objetoInformativo["descricao"]
            })