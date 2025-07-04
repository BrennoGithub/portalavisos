import datetime #Modulo padrão Python para datas e horas
from dados.lista_turmas import lista_turmas
from dados.lista_informativos import *

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

#Função de criação de aviso
def criaAviso(lista_id_informativos, lista_informativos, data_atual, hora_atual, tipo_aviso, assunto, texto):
    id = 1
    if id in lista_id_informativos:
        while id in lista_id_informativos:
            id += 1

    lista_id_informativos.append(id)
    lista_informativos.append({
        "ID_aviso": id,
        "tipo": tipo_aviso,
        "data": data_atual,
        "hora": hora_atual,
        "assunto": assunto,
        "texto": texto
    })
   
def criaAvaliacao(lista_id_informativos, lista_informativos, tipo_aviso, materia, assunto, data_avaliacao, hora_avaliacao, descricao):
    id = 1
    if id in lista_id_informativos:
        while id in lista_id_informativos:
            id += 1
    
    lista_id_informativos.append(id)
    lista_informativos.append({
        "ID_avaliacao": id,
        "tipo": tipo_aviso,
        "materia": materia,
        "assunto": assunto,
        "data_avaliacao": data_avaliacao,
        "hora_avaliacao": hora_avaliacao,
        "descricao": descricao
    })

def criaEvento(lista_id_informativos, lista_informativos, tipo_aviso, nome_evento, data_evento, hora_evento, descricao):
    id = 1
    if id in lista_id_informativos:
        while id in lista_id_informativos:
            id += 1
    
    lista_id_informativos.append(id)
    lista_informativos.append({
        "ID_evento": id,
        "tipo": tipo_aviso,
        "nome": nome_evento,
        "data_evento": data_evento,
        "hora_evento": hora_evento,
        "descricao": descricao
    })

def criaMaterial(lista_id_informativos, lista_informativos, tipo_aviso, tipo_material, material, materia, assunto, descricao):
    id = 1
    if id in lista_id_informativos:
        while id in lista_id_informativos:
            id += 1
    
    lista_id_informativos.append(id)
    lista_informativos.append({
        "ID_material": id,
        "tipo": tipo_aviso,
        "tipo_material": tipo_material,
        "material": material,
        "materia": materia,
        "assunto": assunto,
        "descricao": descricao
    })